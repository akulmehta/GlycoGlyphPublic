import { domElements, gctMonoList, gctSubList } from "./globalvars.js";
import {glycantojson} from './glycantoJSON.js';

//function takes the cfg name from the input field and outputs the GlycoCT
export function cfgToGlycoCT() {
  var cfgname = document.getElementById(domElements.nameInputID).value;
  if (cfgname === '') {
    alert('No name typed. Please check Name above.');
    return;
  }
  var glycanjson = glycantojson(cfgname);
  var glycoCT = jsonToGlycoCT(glycanjson).replace(/\n/g, "<br>");

  document.getElementById(domElements.glycoCTID).innerHTML = glycoCT;
}

//takes the glycan tree JSON and converts it to GlycoCT
export function jsonToGlycoCT(json) {
  var glycoCT = 'Hello';
  var glycan = JSON.parse(json); //parse the json into the glycan obj.
  glycan = d3.hierarchy(glycan);
  var RES = 'RES\n';
  var REScount = 1;
  var LIN = 'LIN\n';
  var LINcount = 1;
  // console.log(glycan);

  // This function recurses through the glycan object to mutate the RES and LIN variables above
  // to generate the RES and LIN fields of the GlycoCT
  function recurseToGlycoCT(obj, parentRES = 1) {

    var data = obj.data;
    var thismono = data.monosaccharide;
    var subcount = 0; //keep count of substituents
    var parentCount = REScount; //This keeps a track of the parent residue for linkages.
    // Passing in the parentCount into the recursive function as parentRES helps to keep track of what is attached
    // to what in case of branching.
    var subs = splitSubs(data.substituent).pop();

    //assign anomeric assignment for the basetype
    var thisanomer = "";
    // console.log(data.anomer);
    if (data.anomer == undefined) {
      thisanomer = "x";
    } else if (data.anomer === "" || data.anomer === "-") {
      thisanomer = "o";
    } else if (data.anomer == "?") {
      thisanomer = "x"
    } else {
      thisanomer = data.anomer;
    }

    // Add the residue and substituents
    var strippedmono = '';

    if (thismono.indexOf('NAc') > -1) {
      strippedmono = thismono.split('NAc')[0];
      subs.unshift("NAc");
      subcount++;
    } else if (thismono.indexOf('NGc') > -1) {
      strippedmono = thismono.split('NGc')[0];
      subs.unshift("NGc");
      subcount++;
    } else if (thismono === 'Neu5Ac') {
      strippedmono = "Kdn";
      subs.unshift("5Ac");
      subcount++;
    } else if (thismono === 'Neu5Gc') {
      strippedmono = "Kdn";
      subs.unshift("5Gc");
      subcount++;
    }
    else if (thismono.indexOf('N') > -1 && gctMonoList.hasOwnProperty(thismono.replace(/N/g, ''))) {
      strippedmono = thismono.replace(/N/g, '');
      subs.unshift("N");
      subcount++;
    } // add other conditions to strip the substituents from the base sugar
    else {
      strippedmono = thismono;
    }


    var type = getRingType(thismono, thisanomer);

    // start writing out the name
    //console.log(strippedmono);
    // Start with the RES portion of the parent monosaccharide
    if (gctMonoList.hasOwnProperty(strippedmono)) {
      //Check if gct stripped mono has a transform, if not append the type and append to RES                                                                                        
      if (gctMonoList[strippedmono].transform == "") {
        RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + '-' + type + gctMonoList[strippedmono].transform;
        // //concatenate the ring begin and end values to the RES
        // RES += type
        if (thisanomer === "o") {
          RES += '|1:aldi';
        }
      }
      //for cases with transforms in the gctMonoList
      else {
        RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + gctMonoList[strippedmono].transform;
      }

      RES += "\n";
      REScount++;
    }


    // Add the Linkage of the node to the parentRes
    if (data.linkage !== '' && data.linkage !== "?" && LINcount != 1) {
      var link = data.linkage
      //e.g. for a1-3 for RES 1 and 2:     1:1o(3+1)2d
      var parentAttachmentPos = link.charAt(link.length - 1),
        childAttachmentPos = link.charAt(link.indexOf('-') - 1);

      if (parentAttachmentPos === "?") { parentAttachmentPos = "-1" };
      if (childAttachmentPos === "?") { childAttachmentPos = "1" };
      LIN += `${LINcount}:${parentRES}o(${parentAttachmentPos}+${childAttachmentPos})${parentCount}d\n`;
      LINcount++;
    }


    //Add substituents
    subs = subs.filter(f => f !== "");
    subs.forEach((s) => {
      // console.log(s);
      var position, substituent;
      switch (true) {
        case (s === "NAc"):
          position = 2;
          substituent = "n-acetyl";
          break;
        case (s === "NGc"):
          position = 2;
          substituent = "n-glycolyl";
          break;
        case (s.indexOf("Ac") > -1):
          position = s.split(/(?!\d)/g)[0];
          // console.log(position);
          substituent = "acetyl";
          //special case
          if (thismono === "Neu5Ac" && position == 5) { substituent = "n-acetyl" };
          break;
        case (s.indexOf("Gc") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "glycolyl";
          //special case
          if (thismono === "Neu5Gc") { substituent = "n-glycolyl" };
          break;
        case (s.indexOf("Me") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "methyl";
          break;
        case (s.indexOf("N") > -1):
          position = 2;
          substituent = "amino";
          break;
        case (s.indexOf("S") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "sulfate";
          break;
        case (s.indexOf("P") > -1):
          position = s.split(/(?!\d)/g)[0];
          substituent = "phospho";
          break;
        default:
          position = s.charAt(0);
          substituent = s.split(/(?!\d)/g)[1];
      }
      RES += `${REScount}s:${substituent}\n`;
      LIN += `${LINcount}:${parentCount}d(${position}+1)${REScount}n\n`;
      LINcount++;
      subcount++;
      REScount++;
    })

    //all counters must move before this

    if (obj.data.children.length > 0) {
      obj.children.forEach(a => recurseToGlycoCT(a, parentCount)); //pass the REScount as the parent sugar number for the LIN
    }


    return obj;
  }

  recurseToGlycoCT(glycan);

  if (LIN !== "LIN\n") {
    glycoCT = RES + LIN;
  } else {
    glycoCT = RES;
  }

  glycoCT = glycoCT.trim();
  return glycoCT;
}




function splitSubs(str) {
  if (subs === "") return [];
  var subs = [];
  //replace the brackets with "," and then split it
  subs = str.replace(/\[(?=[0-9a-zA-Z])/g, '').replace(/\](?=[0-9a-zA-Z])/g, ',').replace(']', '');
  subs = subs.split(/,/g);
  if (typeof subs === "object") {
    subs = [subs];
  }
  return subs;

}


//function decides whether ring is pyranose, furanose or open
function getRingType(mono, anomer) {
  // if ring is open then just return open
  if (anomer === "o") {
    return "0:0";
  }

  //list of pyranose type 
  var pyranose = `Gal,Glc,Man,GalNAc,GlcNAc,ManNAc,Fuc,Neu5Ac,Neu5Gc,Neu,Sia,Xyl,IdoA,GlcA,
  GalA,GlcA,ManA,GlcN,GalN,ManN,Hex,HexNAc,HexA,HexN
  `;
  var furanose = `Rib,Api,Ara`;

  pyranose = pyranose.split(/,/g);
  furanose = furanose.split(/,/g);

  if (pyranose.includes(mono)) {
    return '1:5'
  }

  if (furanose.includes(mono)) {
    return '1:4'
  }

  return 'x:x'
}
