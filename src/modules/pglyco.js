import { autoCheckName } from "./autocheck"


/**
 * Converts pGlyco 3.0 Plausible Structure to GlycoGlyph Compatible Structure
 * @param {any} str
 * @returns {any}
 */
export function pGlycoToGlycoGlyph(str) {
  let arr = str.split('')
  let newarr = []
  let temp = [];
  for (let i = arr.length; i >= 0; i--) {
    if (arr[i] != '(' && arr[i] != ')') {
      temp.push(arr[i]);
    }
    else {
      let code = temp.reverse().join('');
      if (code in pGlycoDict) {
        newarr.push(`${pGlycoDict[code]}??-?`)
      }else if (code != '') {
        newarr.push(`${code}??-?`);
      }
      
      if (arr[i] == ')') {
        newarr.push('(')
      }else if (arr[i] == '(') {
        newarr.push(')');
      }
      temp = []
    }
  }

  let newSequence = newarr.join('');

  let checkedSequence = autoCheckName(newSequence);

  let sequence = checkedSequence.correctedSequence;

  if (sequence.endsWith('-?')) {
    sequence = sequence.slice(0, -2)
  }

  return sequence;
}


export let pGlycoDict = {
  'H' : 'Hex',
  'N' : 'HexNAc',
  'A' : 'Neu5Ac',
  'G' : 'Neu5Gc',
  'F' : 'Fuc',
  'X' : 'Xyl',
  'HA' : 'HexA',
  'HS' : 'HexN',
  'MN' : 'MurNAc',
  'KDN' : 'Kdn',
  'pH' : '[P]Hex',
  'aH' : '[+17]Hex',
  'PG' : '[pr]Gal',
  'sH' : '[S]Hex',
  'S' : '[5Az]Neu',
  'mN' : '[mod]HexNAc',
  'mH' : '[mod]Hex',
}