import {glycantojson} from './glycantoJSON';
import {sortchildren} from './sortchildren';
import {objecttoname} from './objecttoname';

//autoCheckName sorts branch order, replaces — em dash and en dash 
export function autoCheckName(originalName) {
  let name = originalName;
  name = name.replace(/\u2013|\u2014/g, "-"); //replace en / em dash with hyphen
  name = name.replace(/-\d$/g, ''); //remove any trailing linkage information

  let glycanObj = JSON.parse(glycantojson(name));
  
  glycanObj = checkAcetyls(glycanObj); // fix acetyls from ac --> Ac

  let correctedGlycan = sortchildren(d3.hierarchy(glycanObj)); // sort the glycan tree as per link number

  let correctedSequence = objecttoname(correctedGlycan) // convert fixed glycan to name

  let output = {
    originalName: originalName,
    correctedSequence: correctedSequence,
    error: false
  }
  
  if (correctedSequence !== originalName) {
    output.error = true;
  } 
  return output;
}

// checks if Acetyl containing monosaccharides are mistyped with lowercase ac.
function checkAcetyls(glycanObj) {
  if (glycanObj.linkage.includes('ac')) {
    glycanObj.linkage = glycanObj.linkage.replace(/ac/g,'');
    glycanObj.name = glycanObj.name.replace(/ac/g,'Ac');
    glycanObj.monosaccharide = glycanObj.monosaccharide + 'Ac';
  }


  if (glycanObj.children.length > 0) {
    glycanObj.children.forEach(child => {
      child = checkAcetyls(child);
    });
  }
  
  return glycanObj;
}