import {domElements, drawingSettings} from './globalvars.js';
import {tracknames} from './tracknames.js';


export function cleardrawingarea() {
  document.getElementById(domElements.nameInputID).value = '';
  document.getElementById(domElements.glycoCTID).innerHTML = '';
  tracknames('');
  d3.select(`#${drawingSettings.drawdivID}sub`).remove();
  
}