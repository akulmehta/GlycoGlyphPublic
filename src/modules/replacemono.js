import {childglycan, domElements} from './globalvars.js';
import {resetchildglycan} from './addinfo.js';
import {glycantojson} from './glycantoJSON.js';
import { outputname } from './outputname.js';

export function replacemono(path, multiple) {
  //if first node just remove the svg to start fresh
  if (path.length == 1) {
    outputname(childglycan.child);
    resetchildglycan();
    return;
  }

  if (childglycan.child.monosaccharide == "" && childglycan.child.linkage == "" && childglycan.child.substituent == ""){
    alert("No replacement criteria selected. Please select what would you like to replace with.")
    return;
  }
  //get the name from the name div and create the object
  var name = document.getElementById(domElements.nameInputID).value;
  var nameobj = JSON.parse(glycantojson(name));

  //create a recursive function to traverse into the nameobj to the parentnode using the path
  var pathcount = 0;
  var duplicatelinknum = false;
  var overrideduplicate = false;
  function recurse(obj) {
    if (obj.name === path[pathcount].data.name) {
      if (pathcount < path.length - 2) {
        pathcount++;
        var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID)
        recurse(obj.children[index]);
      } else {
        var index = obj.children.findIndex((e) => e.name === path[pathcount + 1].data.name)
        if (childglycan.child.linkage != "") {
          var linkindex = obj.children.findIndex((e) => e.linknum === childglycan.child.linknum);
          if (linkindex > -1 && linkindex != index) {
            alert ("Two nodes cannot have same linkage position. Please check linkages.")
              return;
          }
          obj.children[index].linkage = childglycan.child.linkage;
          obj.children[index].linknum = childglycan.child.linknum;
        }
        if (childglycan.child.monosaccharide != "") {
          obj.children[index].monosaccharide = childglycan.child.monosaccharide;
        }
        if (childglycan.child.substituent != "") {
          obj.children[index].substituent = childglycan.child.substituent;
        }else if (childglycan.child.substituent == "[]") {
          obj.children[index].substituent = "";
        }

        obj.children[index].name = obj.children[index].substituent + obj.children[index].monosaccharide + obj.children[index].linkage;


      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and delete the childglycan there
  recurse(nameobj);

  outputname(nameobj); //function from addmono.js

  if (multiple === false){
    resetchildglycan(); //function from addinfo.js
  }

}