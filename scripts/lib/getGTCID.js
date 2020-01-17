function getGTCID() {
  // define reducing end types
  let types = [
    { anomer: "a", name: "alpha", },
    { anomer: "b", name: "beta", },
    { anomer: "?", name: "unknown" },
    { anomer: "", name: "open" }
  ];

  //Prepare the table for the output
  $("#gtcid").html(`
    <table class="table table-sm">
      <thead>
        <tr>
          <th>Reducing End Type:</th>
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
      </tbody>
    </table>
    `);
  let name = document.getElementById(nameid).value;
  let glycanobj = JSON.parse(glycantojson(name));

  // Go recursively inside the tree to reach the glycan. 
  // This is done for names with linkers for example: 
  // Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1-Sp8
  // because the node Sp8 doesn't have a anomer
  function recursetoglycan(glycan) {
    if (glycan.monosaccharide != "") {
      return glycan;
    }else {
      return recursetoglycan(glycan.children[0])
    }
  }
  glycanobj = recursetoglycan(glycanobj);

  let primaryanomer;
  if (glycanobj.monosaccharide !== "") {primaryanomer = glycanobj.anomer;}

  //for each anomer
  types.forEach((f) => {
    glycanobj.anomer = f.anomer; //set the anomer type for the glycan
    let glycanjson = JSON.stringify(glycanobj); //recreate the JSON for the glycan
    let glycoCT = jsonToGlycoCT(glycanjson); //get the glycoCT
    // build the url to query GlyTouCan
    let url = "https://api.glycosmos.org/glycanformatconverter/2.3.2-snapshot/glycoct2wurcs/"
    url += encodeURI(glycoCT);
    //Query GlyTouCan
    $.get(url).done(function (data) {
      if (data.id === undefined) { //if undefined it means there was some error in the GlycoCT
        $(`#${f.name}gtcid`).html(`Error`);
      } else if (data.id === "no accnumber") { //if No Accession Number 
        $(`#${f.name}gtcid`).html(`Not Available`)
      } else { // If successful retrieval of accession number
        $(`#${f.name}gtcid`).html(`<a href="https://glytoucan.org/Structures/Glycans/${data.id}" target="_blank">${data.id}</a>`)
      };
    }).fail(function () { // if failed to connect to GlyCosmos alert the user
      alert("Error communicating with GlyTouCan.");
    }).done(() => {
      //highlight the column with the set anomer
      let highlight = types.filter(f => f.anomer === primaryanomer);
      highlight.forEach((h) => {
        // console.log(h);
        d3.selectAll(`.${h.name}`).classed("table-success", true);
      })
    });
  });



  // let glycoCT = document.getElementById("glycoCT").value;
  // // build the url
  // let url = "https://api.glycosmos.org/glycanformatconverter/2.3.2-snapshot/glycoct2wurcs/"
  // url += encodeURI(glycoCT);

  // // console.log(url);
  // $.get(url, function (data, status) {
  //   console.log(data.id);
  //   // if (data.id === undefined) {
  //   //   $("#gtcid").html(`Could not obtain GlyTouCan ID for structure. Check GlycoCT`);
  //   // } else if (data.id === "no accnumber") {
  //   //   $("#gtcid").html(`No GlyTouCan ID for given structure. Consider registering structure with GlyTouCan.`)
  //   // } else {
  //   //   $("#gtcid").html(`The GlyTouCan ID is: <a href="https://glytoucan.org/Structures/Glycans/${data.id}" target="_blank">
  //   // ${data.id}</a>`);
  //   //}
  // })
}