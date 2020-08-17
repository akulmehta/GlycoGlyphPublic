import { domElements } from './globalvars.js';
import { glycantojson } from './glycantoJSON';

//masses taken from GlycanMass tools ExPASy: https://web.expasy.org/glycomod/glycomod_masses.html
var residualmass = {
  hexose: 162.0528,
  hexnac: 203.0794,
  deoxyhexose: 146.0579,
  pentose: 132.0423,
  Neu5Ac: 291.0954,
  Neu5Gc: 307.0903,
  KDN: 250.0689,
  hexa: 176.03209,
  sulfate: 79.9568,
  phosphate: 79.9663,
  h2o: 18.010565,
  H: 1.007825,
  Na: 22.989768,
  K: 38.963707,
  acetate: 42.010565,
  tfa: 112.9850391,
  glycolyl: 58.005479,
  methyl: 14.015650,
  amino: -0.984016
}

//list of mol weight for all monosaccharides obtained from pubchem via snfg page
var mwlist = {
  'Neu5,9Ac2': 351.308,
  '4eLeg': 250.116486,
  '6dAlt': 164.068473,
  '6dAltNAc': 205.095023,
  '6dGul': 164.068473,
  '6dTal': 164.068473,
  '6dTalNAc': 205.095023,
  'Abe': 148.073559,
  'Aci': 250.116486,
  'All': 180.063388,
  'AllA': 194.042653,
  'AllN': 179.079373,
  'AllNAc': 221.089937,
  'Alt': 180.063388,
  'AltA': 194.042653,
  'AltN': 179.079373,
  'AltNAc': 221.089937,
  'Api': 150.052823,
  'Ara': 150.052823,
  'Bac': 162.100442,
  'Col': 148.073559,
  'DDmanHep': 210.073953,
  'Dha': 222.037567,
  'Dig': 148.073559,
  'Fru': 180.063388,
  'Fuc': 164.068473,
  'FucNAc': 205.095023,
  'Gal': 180.063388,
  'GalA': 194.042653,
  'GalN': 179.079373,
  'GalNAc': 221.089937,
  'Glc': 180.063388,
  'GlcA': 194.042653,
  'GlcN': 179.079373,
  'GlcNAc': 221.089937,
  'Gul': 180.063388,
  'GulA': 194.042653,
  'GulN': 179.079373,
  'GulNAc': 221.089937,
  'Ido': 180.063388,
  'IdoA': 194.042653,
  'IdoN': 179.079373,
  'IdoNAc': 221.089937,
  'Kdn': 268.079432,
  'Kdo': 238.068867,
  'Leg': 250.116486,
  'LDmanHep': 210.073953,
  'Lyx': 150.052823,
  'Man': 180.063388,
  'ManA': 194.042653,
  'ManN': 179.079373,
  'ManNAc': 221.089937,
  'Mur': 251.100502,
  'MurNAc': 293.111067,
  'MurNGc': 309.105981,
  'Neu': 267.095417,
  'Neu5Ac': 309.105981,
  'Neu5Gc': 325.100896,
  'Oli': 148.073559,
  'Par': 148.073559,
  'Pse': 250.116486,
  'Psi': 180.063388,
  'Qui': 164.068473,
  'QuiNAc': 205.095023,
  'Rha': 164.068473,
  'RhaNAc': 205.095023,
  'Rib': 150.052823,
  'Sor': 180.063388,
  'Tag': 180.063388,
  'Tal': 180.063388,
  'TalA': 194.042653,
  'TalN': 179.079373,
  'TalNAc': 221.089937,
  'Tyv': 148.073559,
  'Xyl': 150.052823,
}

export function outputParams() {
  var name = document.getElementById(domElements.nameInputID).value;

  let div = document.getElementById(domElements.parametersdiv);
  if (name !== "") {
    let params = calcMassParams(name);
    let output = `Monoisotopic Mass: 
    <a href="#" onclick="glycoglyph.copyTextFromElement('calculatedMonoisotopicMass')" title="Click to Copy">
    <span id="calculatedMonoisotopicMass">${params.monoisotopicMass}</span>
    </a> <br>
    Monosaccharide Count: ${params.monosaccharideCount}`;
    if (params.monosaccharideNotIdentified > 0) {
      output += `<br><span class="text-danger">Unidentified Monosaccharide: ${params.monosaccharideNotIdentified}</span>`
    }
    if (params.substituentNotIdentified > 0) {
      output += `<br><span class="text-danger">Unidentified Substituents: ${params.substituentNotIdentified}</span>`
    }
    div.innerHTML = output
  } else {
    div.innerHTML = `Draw structure first.`
  }



}

export function calcMassParams(name) {

  let glycanObj = d3.hierarchy(JSON.parse(glycantojson(name)));

  let glycanArr = glycanObj.descendants()

  let outputobj = {
    monoisotopicMass: 0,
    monosaccharideCount: 0,
    monosaccharideNotIdentified: 0,
    substituentNotIdentified: 0
  }

  glycanArr.forEach((g) => {
    if (mwlist[g.data.monosaccharide] !== undefined) {
      //Add mono mass
      outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass + mwlist[g.data.monosaccharide] - residualmass.h2o);

      //Add substituent mass
      if (g.data.substituent !== "") {
        g.data.substituent.replace(/\[/g, '').split(']').forEach(sub => {
          if (sub == "") {
            return;
          }
          if (sub.indexOf('Ac') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.acetate
          } else if (sub.indexOf('S') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.sulfate
          } else if (sub.indexOf('P') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.phosphate
          } else if (sub.indexOf('Gc') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.glycolyl
          } else if (sub.indexOf('Me') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.methyl
          } else if (sub.indexOf('N') > -1) {
            outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.amino;
          } else {
            outputobj.substituentNotIdentified++
          }
          outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass);
        })
      }

      //Add count 
      outputobj.monosaccharideCount++;
    } else {
      outputobj.monosaccharideNotIdentified++;
    }

  })

  outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass + residualmass.h2o);


  return outputobj;

}

function precise(number) {
  let precision = 6; //precision of 6 is used as most of the masses in the mwlist are up to 6 decimal places
  let currentprecision = number.toString().split('.')[0].length + precision;
  return +Number.parseFloat(number).toPrecision(currentprecision);
}