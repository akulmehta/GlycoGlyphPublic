import {domElements, drawingSettings} from './globalvars.js';
import {d3glycanstructure} from './d3glycanstruc.js';
import { cfgToGlycoCT } from './glycoct.js';

export var tracknum = -1;
export var trackname = []; //array which tracks the names for undo/redo

export function tracknames(name) {
  if (tracknum > -1) {
    $(`#${domElements.undodiv}`).removeClass('hide').addClass('show');
  }
  if (trackname[tracknum] == name) {
    return;
  }
  tracknum++;
  trackname[tracknum] = name; //push new name in position of the tracknum
  trackname = trackname.filter((d,i) => i <= tracknum);

  //hide the redo button 
  if (tracknum < trackname.length){
    $(`#${domElements.redodiv}`).addClass('hide').removeClass('show');
  }

}

export function undo() {
  if (tracknum == 0) {
    return;
  }
  var nameinput = document.getElementById(domElements.nameInputID);
  tracknum--;
  if (trackname[tracknum] != undefined) {
    nameinput.value = trackname[tracknum];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value);
      cfgToGlycoCT();
    } else {
      $(`#${drawingSettings.drawdivID}`).empty();
      document.getElementById(domElements.glycoCTID).innerHTML = '';
    }
  }
  if (tracknum === 0) {
    //hide the undo button
    $(`#${domElements.undodiv}`).addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $(`#${domElements.redodiv}`).removeClass('hide').addClass('show');
  }

}

export function redo() {
  tracknum++;
  if (tracknum == trackname.length) { 
    return;}
  var nameinput = document.getElementById(domElements.nameInputID);

  if (trackname[tracknum] != undefined) {
    nameinput.value = trackname[tracknum];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value);
      cfgToGlycoCT();
    } else {
      $(`#${drawingSettings.drawdivID}`).empty();
      document.getElementById(domElements.glycoCTID).innerHTML = '';
    }
  }
  if (tracknum === trackname.length-1){
    $(`#${domElements.redodiv}`).addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $(`#${domElements.undodiv}`).removeClass('hide').addClass('show');
  }
}