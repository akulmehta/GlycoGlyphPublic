import { domElements, filePaths } from './globalvars.js';
import { glycantojson } from './glycantoJSON.js';
import { jsonToGlycoCT } from './glycoct.js';


export async function generateGTCIDTable() {
  if ($(`#${domElements.glytoucanTableDiv}`)) {
    $(`#${domElements.glytoucanTableDiv}`).html(`
      Searching...
    `);
  } else {
    console.error('Glytoucan Table Div not found or no name input. Check your code.');
    return;
  }

  if ($(`#${domElements.nameInputID}`)[0].value == '') {
    $(`#${domElements.glytoucanTableDiv}`).html(`
      No structure created. Draw a structure or enter a name and then try again.
    `); 
    return;
  }
  let name = document.getElementById(domElements.nameInputID).value;
  let glytoucanData = await getGTCID(name);

  drawGTCIDTable(glytoucanData);
}

export function drawGTCIDTable(glytoucanData) {

  //Prepare the table for the output
  $(`#${domElements.glytoucanTableDiv}`).html(`
    <table class="table table-sm">
      <thead>
        <tr>
          <th class="">Reducing End Type:</th>
          <th class="alpha" scope="col">&alpha;</th>
          <th class="beta" scope="col">&beta;</th>
          <th class="unknown" scope="col">Unknown (?)</th>
          <th class="open"  scope="col">Open</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GlyTouCan ID:</th>
          <td class="alpha" id="alphagtcid"></td>
          <td class="beta" id="betagtcid"></td>
          <td class="unknown" id="unknowngtcid"></td>
          <td class="open" id="opengtcid"></td>
        </tr>
        <tr>
          <td>Details:</th>
          <td class="alpha" id="alphadetails"></td>
          <td class="beta" id="betadetails"></td>
          <td class="unknown" id="unknowndetails"></td>
          <td class="open" id="opendetails"></td>
      </tr>
      </tbody>
    </table>
    `);

  glytoucanData.forEach(f => {
    if (f.glytoucan.response == 'Error in Structure') {
      $(`#${f.name}gtcid`).html(`Error in Structure`);
    } else if (f.glytoucan.response == 'Not Available' || f.glytoucan.id == "") {
      $(`#${f.name}gtcid`).html(`Not Available`);
    } else if (f.glytoucan.response == 'Error Connecting') {
      $(`#${f.name}gtcid`).html(`Error Connecting`);
    } else {
      $(`#${f.name}gtcid`).html(`${f.glytoucan.id} 
      <button id="copyGlycoCTBtn" class="btn btn-sm btn-link copybtn" onclick="glycoglyph.copyTextFromElement('${f.name}gtcid')" title="Copy">
        <img src="${filePaths.images}copy.svg" alt="copy" width="20px">
      </button>
      `)
      $(`#${f.name}details`).append(`
      <a href="https://glytoucan.org/Structures/Glycans/${f.glytoucan.id}" target="_blank"
      title="View in GlyTouCan">
      <span class="glytoucan-logo detail-icon"></span></a>`);

      // If Found in GlyGen produce the other DB icons
      if (f.glygenData.glygen.url) {
        $(`#${f.name}details`).append(`
          <a href="${f.glygenData.glygen.url}" target="_blank"
          title="View in GlyGen">
          <span class="glygen-logo detail-icon"></span></a>
          `);

        if (f.glygenData.pubchem) {
          $(`#${f.name}details`).append(` 
            <a href="${f.glygenData.pubchem.url}" target="_blank"
            title="View in PubChem">
            <span class="pubchem-logo detail-icon"></span></a>`);
        }

        if (f.glygenData.chebi) {
          $(`#${f.name}details`).append(` 
            <a href="${f.glygenData.chebi.url}" target="_blank"
            title="View in ChEBI">
            <span class="chebi-logo detail-icon"></span></a>`);
        }
      }
    }
    if (f.primary) {
      d3.selectAll(`.${f.name}`).classed("table-success", true);
    }
  })
}

async function fetchGlyTouCan(url) {
  let glytoucan = await fetch(url)
    .then(resp => resp.json())
    .then(data => {
      if (data.id === undefined) { //if undefined it means there was some error in the GlycoCT
        return {
          id: data.id,
          response: 'Error in Structure'
        };
      } else if (data.id === "no accnumber" || data.id === "") { //if No Accession Number 
        return {
          id: data.id,
          response: "Not Available"
        };
      } else { // If successful retrieval of accession number populate the table
        return {
          id: data.id,
          response: "Success"
        };
      }
    })
    .catch(err => {
      console.error(err);
      return {
        id: undefined,
        response: "Error Connecting"
      }
    });
  return glytoucan;
}

async function fetchGlyGenData(id) {
  if (id === "") {
    console.log('GlyTouCan ID is missing');
    return {
      glygen: {
        url: undefined,
        response: 'Not Available'
      }
    }
  }
  let glygen = fetch(`https://api.glygen.org/glycan/detail/${id}/`)
    .then(resp => resp.json())
    .then(data => {
      let output = {};
      output.glygen = {
        url: `https://www.glygen.org/glycan/${id}`,
        response: 'Success'
      }
      if (data.crossref) {
        let pubchemURL = data.crossref.find(f => f.database === "PubChem Compound");
        if (pubchemURL) {
          output.pubchem = {
            url: pubchemURL.url,
            response: 'Success'
          };
        }

        let chebiURL = data.crossref.find(f => f.database === "ChEBI");
        if (chebiURL) {
          output.chebi = {
            url: chebiURL.url,
            response: 'Success'
          };
        }

      }

      return output
    })
    .catch(err => {
      console.error(err);
      if (err.responseJSON.error_list.some(f => f.error_code === "non-existent-record")) {
        console.log('GlyTouCan ID does not exist in glygen');
        return {
          glygen: {
            url: undefined,
            response: 'Not Available'
          }
        }
      } else if (err.responseJSON.error_list.some(f => f.error_code === "missing-parameter")) {
        console.log('GlyTouCan ID is missing');
        return {
          glygen: {
            url: undefined,
            response: 'Not Available'
          }
        }
      } else {
        console.log('Failed to connect to GlyGen');
        return {
          glygen: {
            url: undefined,
            response: 'Error in connection'
          }
        };
      }

    })


  return glygen;
}

export async function getGTCID(name) {
  // define reducing end types
  let types = [
    { anomer: "a", name: "alpha", },
    { anomer: "b", name: "beta", },
    { anomer: "?", name: "unknown" },
    { anomer: "", name: "open" }
  ];

  let glycanobj = JSON.parse(glycantojson(name));

  // Go recursively inside the tree to reach the glycan. 
  // This is done for names with linkers for example: 
  // Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1-Sp8
  // because the node Sp8 doesn't have a anomer
  function recursetoglycan(glycan) {
    if (glycan.monosaccharide != "") {
      return glycan;
    } else {
      return recursetoglycan(glycan.children[0])
    }
  }
  glycanobj = recursetoglycan(glycanobj);

  let primaryanomer;
  if (glycanobj.monosaccharide !== "") { primaryanomer = glycanobj.anomer; }

  //for each anomer
  for (let i = 0; i < types.length; i++) {

    glycanobj.anomer = types[i].anomer; //set the anomer type for the glycan
    let glycanjson = JSON.stringify(glycanobj); //recreate the JSON for the glycan
    let glycoCT = jsonToGlycoCT(glycanjson); //get the glycoCT
    // build the url to query GlyTouCan
    let url = "https://api.glycosmos.org/glycanformatconverter/2.3.2-snapshot/glycoct2wurcs/"
    url += encodeURI(glycoCT);

    types[i].primary = (types[i].anomer == primaryanomer) ? true : false;

    types[i].glytoucan = await fetchGlyTouCan(url);

    if (types[i].glytoucan.response == 'Success') {
      // console.log('Found Glytoucan ID checking other databases');
      types[i].glygenData = await fetchGlyGenData(types[i].glytoucan.id);
    }


  }

  return types;

}

