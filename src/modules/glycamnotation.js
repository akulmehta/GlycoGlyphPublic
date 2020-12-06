import { monosDict } from './monoslist';
import { glycantojson } from './glycantoJSON.js';

// takes the glycan sequence in CFG format and converts it to glycam sequence.
// returns an object with {name : 'Glycam Name' , errors: [array of errors]}
export function sequenceToGlycam(sequence, {suffix = '-OH', linkerToReplace = ''} = {}) {
  if (linkerToReplace != '') {
    sequence = sequence.replace(linkerToReplace, '');
  }
  let glycanObj = d3.hierarchy(JSON.parse(glycantojson(sequence)));
  let glycam = objectToGlycam(glycanObj);
  glycam.name = glycam.name + suffix;
  return glycam;
}


// recursive function to go through a glycan tree hierarchy and produce the name using the monosDict.
// returns an object with the glycam name for the tree and any errors encountered
export function objectToGlycam(obj, bindex) {
  let output = {
    name: '',
    errors: []
  };

  if (!obj.data.monosaccharide) {
    output.errors.push('Undefined monosaccharide');
  }
  if (obj.data.linkage == '') {
    output.errors.push('Undefined linkage');
  }

  
  let dictionaryMono = monosDict.find(f => f.abbreviation === obj.data.monosaccharide);
  if (!dictionaryMono || !dictionaryMono.glycam) {
    output.errors.push('Undefined monosaccharide');
  }else {
    if (obj.data.monosaccharide != "" && obj.data.linkage != "") { //ideal conditions both mono and linkage present
      if (obj.data.linkage && obj.data.linkage.search('-') === -1 && obj.depth > 0) {
      }
      output.name = dictionaryMono.glycam + obj.data.linkage + output.name;
      
    } else if (obj.data.linkage == "" && obj.parent == null) { //condition for root node
      output.name = dictionaryMono.glycam + output.name;
    } else if (obj.data.linkage == "" && obj.parent.monosaccharide == null) {
      output.name = dictionaryMono.glycam + output.name;
    }
    else { //condition for all other nodes without linkage information
      output.errors.push('Undefined Linkage');
    }
  }
  
  
  //if the index of the childnode is >1 then put a bracket for the branch
  if (bindex > 1) {
    output.name = output.name + ']';
  }

  if (obj.data.children && obj.data.children.length > 0) {
    obj.children.forEach((e, i) => {
      let childOutput = objectToGlycam(e, obj.children.length - i)
      output.name = childOutput.name + output.name;
      output.errors = [...output.errors, ...childOutput.errors];
    });
  }
  
  //if the index of the childnode is >1 then put a closing bracket for the branch
  if (bindex > 1) {
    output.name = '[' + output.name;
  }
  
  return output;
}