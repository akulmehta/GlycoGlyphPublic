
function starttemplate(name) {

  //get the input field for the name
  var nameinput = document.getElementById(nameid);
  if (nameinput.value != ""){
    if(!confirm("This will clear current Name field. Are you sure you would like to continue?")){
      return;
    }
  }
  
  nameinput.value = "";
  var template = templates.filter((e) => e.name == name && e.type ==="starter");
  nameinput.value = template[0].structure;

  tracknames(nameinput.value);
  
  d3glycanstructure(nameinput.value, {drawdivID: 'd3glycanstruc'});
  cfgToGlycoCT();
}