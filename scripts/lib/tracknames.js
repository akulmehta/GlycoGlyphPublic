function tracknames(name) {
  if (tracknum > 0) {
    $('#undodiv').removeClass('hide').addClass('show');
  }
  
  trackname[tracknum] = name; //push new name in position of the tracknum
  tracknum++;
  trackname = trackname.filter((d,i) => i < tracknum);

  //hide the redo button 
  if (tracknum === trackname.length){
    $('#redodiv').addClass('hide').removeClass('show');
  }
}

function undo() {
  if (tracknum < 2) {
    return;
  }
  var nameinput = document.getElementById(nameid);
  tracknum--;
  if (trackname[tracknum-1] != undefined) {
    nameinput.value = trackname[tracknum-1];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value, {drawdivID: 'd3glycanstruc'});
    } else {
      $("#d3glycanstruc").empty();
    }
  }
  if (tracknum === 1) {
    //hide the undo button
    $('#undodiv').addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $('#redodiv').removeClass('hide').addClass('show');
  }

}

function redo() {
  if (tracknum >= trackname.length) { return;}
  var nameinput = document.getElementById(nameid);
  tracknum++;
  if (tracknum <= trackname.length){
    nameinput.value = trackname[tracknum-1];
    if (nameinput.value != "") {
      d3glycanstructure(nameinput.value, {drawdivID: 'd3glycanstruc'});
    } else {
      $("#d3glycanstruc").empty();
    }
  }
  if (tracknum === trackname.length){
    $('#redodiv').addClass('hide').removeClass('show');
  }
  if (tracknum < trackname.length) {
    $('#undodiv').removeClass('hide').addClass('show');
  }
}