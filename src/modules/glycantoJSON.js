import {monos} from './globalvars.js';

//takes the CFG glycan name and converts it into a glycan tree object and returns it as json
export function glycantojson(glycanname) {
  //remove whitespace between string if any
  glycanname = glycanname.replace(/ /g, '');

  //replace sulfated position brackets
  glycanname = glycanname.replace(/\((?=\d[a-zA-Z]\))/g, '[');
  glycanname = glycanname.replace(/(\[\d[a-zA-Z])\)/g, '$1]');

  glycanname = glycanname.replace(/\u03B1(?=(\d|\?)\-)/g, 'a').replace(/\u03B2(?=(\d|\?)\-)/g, 'b');

  //clean up GlcN(Gc)
  if (glycanname.indexOf('GlcN(Gc)') > -1) {
    glycanname = glycanname.replace(/GlcN\(Gc\)/, 'GlcNGc');
  }
  if (glycanname.indexOf('GalN(Gc)') > -1) {
    glycanname = glycanname.replace(/GalN\(Gc\)/, 'GalNGc');
  }
  if (glycanname.indexOf('ManN(Gc)') > -1) {
    glycanname = glycanname.replace(/ManN\(Gc\)/, 'ManNGc');
  }

  var glynamearray = glystrtoarray(glycanname);

  function glystrtoarray(str) {
    //split the glycannamenow to the array
    var arr = str.split(/(\)|\(|-[\d,\?]|-(?=[a-zA-z]))/g).filter(function (n) {
      return n !== '';
    });

    //clean up the array to add the linkages back to the glycan
    var newarr = [];
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i + 1].search(/\-[\d,\?]/) > -1) {
        newarr.push(arr[i] + arr[i + 1]);
      } else if (arr[i].search(/\-/) < 0) {
        newarr.push(arr[i]);
      }
    }
    //push the last value of arr
    newarr.push(arr[arr.length - 1]);
    return newarr;
  }


  var glyjson = JSON.stringify(parseTree(glynamearray), 0, 2);

  // Answer from stackoverflow question answered by ryeballar modified for performance
  // https://stackoverflow.com/questions/50673284/delimited-text-to-nested-javascript-object-json
  function parseTree(arr) {
    return arr.reduce(parseTreeReducer, [])[0];
  }

  function parseTreeReducer(array, ch, idx, src) {
    // console.log({array, ch, src, idx});
    let indexBracket = array.lastIndexOf('(');
    if (ch === `(`) {
      // is it an open bracket?
      // store it in the array stack!

      array.push(ch);
    } else if (ch === `)`) {
      // is it a close bracket?
      // remove the last open bracket
      // this prepares the nodes after the open bracket index
      // to be the children of the next node

      array.splice(indexBracket, 1);
    } else if (ch !== '-') {
      // make sure to ignore '-' key

      // separate the linkage, monosaccharide, subsituents information
      var link, mono, sub, linknum;
      var chnosub = ch.substring(ch.lastIndexOf(']') + 1, ch.length); //name without substituents like sulfates
      if (chnosub != ch) {
        sub = ch.replace(chnosub, ''); //get the substituent information
      }
      //to get linkage information countdown from the length of the chnosub till the string matches to one of the monos
      //when you have the index for that (i), you can use that to separate the linkage from the monosaccharide
      for (let i = 0; i < chnosub.length; i++) {
        if (monos.includes(chnosub.substring(0, (chnosub.length - i))) === true) {
          link = chnosub.substring((chnosub.length - i), chnosub.length);
          linknum = +link.substr(-1)
          mono = chnosub.substring(0, (chnosub.length - i));
          break;
        }
      }

      //special cases
      //Case 1: Neu5,9Ac
      if (ch.search(/Neu5\,9Ac2?/g) > -1) {
        mono = "Neu5Ac";
        sub = '[9Ac]';
        link = ch.replace(/Neu5\,9Ac2?/g, '');
        linknum = +link.substr(-1);
      }

      if (ch.search(/(GlcNGc)|(GalNGc)|(ManNGc)/g) > -1) {
        mono = mono.replace(/Gc/g, '');
        sub = '[2Gc]';
        link = ch.replace(/(GlcNGc)|(GalNGc)|(ManNGc)/g, '');
        linknum = +link.substr(-1);
      }

      //end of special cases

      //add default values
      if (link == undefined) { link = ""; }
      if (mono == undefined) { mono = ""; }
      if (sub == undefined) { sub = ""; }
      if (linknum == undefined) { linknum = 0; }

      var anomer = link.charAt(0);
      if (/^\d+$/.test(anomer)) {
        // anomer is a digit
        anomer = '?';
      }
      if (/\-$/.test(link)) {
        // link has hyphen at the end
        link = link.replace(/\-$/, '');
      }

      // push the node in the array stack
      array.push({
        name: ch, // name
        linkage: link, //add the linkage information
        monosaccharide: mono, //monosaccharide
        substituent: sub, //substituent
        linknum: linknum, //linkage number
        anomer: anomer, //anomeric configuration of sugar
        uniqueNodeID: idx, //use the parsetreereducer index as the uniqueNodeID

        // ensure that we only get the nodes that are after the
        // last open bracket from the array stack and remove them.
        // These removed nodes will be assigned as children for
        // this current node
        children: array
          .splice(
            // make sure we don't delete the open bracket
            indexBracket + 1,
            // only remove items beyond the open bracket index
            array.length - indexBracket - 1
          )
          .reverse(), // reverse to represent the expected output (optional!)
      });
    }
    // return the array stack
    return array;
  }

  // console.log(glyjson); //logs the entire glycan as json
  return glyjson;
}