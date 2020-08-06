import {domElements, childglycan} from './globalvars.js';

//This file contains code which will add the information to an object to be appended to the parent node
//It takes user input for processing

//function to reset the childglycan
export function resetchildglycan() {
  childglycan.child = {
    "name": "",
    "linkage": "",
    "monosaccharide": "",
    "linknum": 0,
    "substituent": "",
    "children": []
  };

  //clear out the monosachharide selection information from the DOM
  $('#' + domElements.preparedSubstituentSpan).empty();
  $('#' + domElements.preparedMonosaccharideSpan).empty();
  $('#' + domElements.preparedLinkageSpan).empty();
}


export function addSub() {
  //get details from the forms
  var subposlist = Array.from(document.querySelectorAll('#subposlist input'));
  var subpos = subposlist.length && subposlist.find(r => r.checked).value;

  var subtypelist = Array.from(document.querySelectorAll('#subtypelist input'));
  var subtype = subtypelist.length && subtypelist.find(r => r.checked).value;
  if (subtype === "other") {
    subtype = document.getElementById("substituentother").value
  }
  var subvalue = subpos + subtype;
  var sub = '[' + subvalue + ']';
  
  $('#' + domElements.preparedSubstituentSpan).append(sub); // add linkage to the childglycan object
  childglycan.child.substituent = childglycan.child.substituent + sub; //because more than one substituent can be added
  makechildglycanname();
}

export function clearSub() {
  $('#' + domElements.preparedSubstituentSpan).empty();
  childglycan.child.substituent = "";
  makechildglycanname();
}
//function on what to do when monosaccharide is selected
export function monoselect(mono) {
  if (mono === "Unknown") {
    var node = prompt("Please enter name for the node", "");
    if (node != null) {
      mono = node;
    }
    else {
      alert('Error: Name for the node was blank - did not add the node');
      return;
    }
  }
  childglycan.child.monosaccharide = mono;  // add/overwrite monosaccharide to the childglycan object
  $('#' + domElements.preparedMonosaccharideSpan).empty().append(mono);
  makechildglycanname();
}

export function addLinkage() {
  //get details from the forms
  var orientlist = Array.from(document.querySelectorAll('#orientlist input'));
  var orient = orientlist.length && orientlist.find(r => r.checked).value;

  var anoposlist = Array.from(document.querySelectorAll('#anoposlist input'));
  var anopos = anoposlist.length && anoposlist.find(r => r.checked).value;

  var acclist = Array.from(document.querySelectorAll('#acclist input'));
  var acc = acclist.length && acclist.find(r => r.checked).value;

  if (acc == '?') {
    childglycan.child.linknum = 0;
  } else {
    childglycan.child.linknum = +acc;
  }
  var linkage = orient + anopos + '-' + acc;

  $('#' + domElements.preparedLinkageSpan).empty().append(linkage);
  childglycan.child.linkage = linkage; // add/overwrite linkage to the childglycan object
  makechildglycanname();

}

export function makechildglycanname() {

  childglycan.child.name = childglycan.child.substituent + childglycan.child.monosaccharide + childglycan.child.linkage;
  // console.log(childglycan);

}