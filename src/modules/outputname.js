import { domElements } from './globalvars.js';
import { sortchildren } from './sortchildren.js';
import { objecttoname } from './objecttoname.js';
import { tracknames } from './tracknames.js';
import { d3glycanstructure } from './d3glycanstruc.js';
import { cfgToGlycoCT } from './glycoct.js';

export function outputname(nameobj) {
  // console.log(nameobj);
  var struc = d3.hierarchy(nameobj); //call d3 hierarchy on structure obj

  // console.log(struc);
  var structure = sortchildren(struc); //sort the structure

  // console.log(structure);
  var newname = objecttoname(structure);
  tracknames(newname); //push new name


  // console.log(trackname);
  document.getElementById(domElements.nameInputID).value = newname; // output the name to the input field
  d3glycanstructure(newname);

  //update glycoCT
  cfgToGlycoCT();
}
