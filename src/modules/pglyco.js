import { autoCheckName } from "./autocheck"
import { commonMonosExtended, monos_with_2linkage, linkageSettings } from "./globalvars"


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
        let linkage = "??-?";
        if (linkageSettings.applyAutoChildLinkages && commonMonosExtended.includes(pGlycoDict[code])) {
          if (monos_with_2linkage.includes(pGlycoDict[code])) {
            linkage = "?2-?";
          } else {
            linkage = "?1-?";
          }
        }
        newarr.push(`${pGlycoDict[code]}${linkage}`)
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

export function detectPGlyco(str) {
  let keys = Object.keys(pGlycoDict);
  keys.push('(');
  keys.push(')');
  keys = keys.map(m => m.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')
  let re = new RegExp(`^\((${keys})*\)$`)
  return re.test(str);
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
  'mH' : '[mod]Hex',
  'mN' : '[mod]HexNAc',
}


