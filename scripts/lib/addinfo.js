//This file contains code which will add the information to an object to be appended to the parent node
//It takes user input for processing

//function to reset the childglycan
function resetchildglycan() {
  childglycan = {
    "name": "",
    "linkage": "",
    "monosaccharide": "",
    "linknum": 0,
    "substituent": "",
    "children": []
  };
  //clear out the monosachharide selection information from the DOM
  $('#subscheck').empty();
  $('#monocheck').empty();
  $('#linkagecheck').empty();
}


function addSub() {
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
  $('#subscheck').append(sub); // add linkage to the childglycan object
  childglycan.substituent = childglycan.substituent + sub; //because more than one substituent can be added
  makechildglycanname();
}

function clearSub() {
  $('#subscheck').empty();
  childglycan.substituent = "";
  makechildglycanname();
}
//function on what to do when monosaccharide is selected
function monoselect(mono) {
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
  childglycan.monosaccharide = mono;  // add/overwrite monosaccharide to the childglycan object
  $('#monocheck').empty().append(mono);
  makechildglycanname();
}

function addLinkage() {
  //get details from the forms
  var orientlist = Array.from(document.querySelectorAll('#orientlist input'));
  var orient = orientlist.length && orientlist.find(r => r.checked).value;

  var anoposlist = Array.from(document.querySelectorAll('#anoposlist input'));
  var anopos = anoposlist.length && anoposlist.find(r => r.checked).value;

  var acclist = Array.from(document.querySelectorAll('#acclist input'));
  var acc = acclist.length && acclist.find(r => r.checked).value;

  if (acc == '?') {
    childglycan.linknum = 0;
  } else {
    childglycan.linknum = +acc;
  }
  var linkage = orient + anopos + '-' + acc;

  $('#linkagecheck').empty().append(linkage);
  childglycan.linkage = linkage; // add/overwrite linkage to the childglycan object
  makechildglycanname();

}

function makechildglycanname() {

  childglycan.name = childglycan.substituent + childglycan.monosaccharide + childglycan.linkage;
  // console.log(childglycan);

}