/* 
This file holds all the initialization of event listeners and resets to make the application 
function reactive.
*/

// Add an event listener to the name input field to draw the structure
$("#" + nameid).on('keyup', function () {
  var name = $(this).val();
  tracknames(name);
  //draw structure based on name
  if (name.length > 0) {
    d3glycanstructure(name, 'd3glycanstruc');
    cfgToGlycoCT();
  }
  //clear drawing area if text is cleared
  if (!this.value) {
    $("#d3glycanstruc").empty();
    $("#glycoCT").html("");
  }
});

//code to redraw on clicking the redraw button in settings
$('#redraw').on('click', function () {
  var name = document.getElementById(nameid).value;
  if (name != "") {
    d3glycanstructure(name, 'd3glycanstruc');
  }
})

//add an event listener to the parent div to start putting the first mono
d3.select("#d3glycanstruc").on("mouseover", () => {
  //change cursor style for first addition
  if ($("#d3glycanstrucSVG").length == 0) {
    d3.select("#d3glycanstruc").classed('addcursor', true);
  } else {
    d3.select("#d3glycanstruc").classed('addcursor', false);
  }
}).on("click", () => {
  //add first mono if nothing is drawn.
  if ($("#d3glycanstrucSVG").length == 0) {
    if (childglycan.name == "") {
      alert('Select a monosaccharide to add and get started.')
    } else {
      addfirstmono();
    }
  }
});

//set subtype to Acetyl as default
document.getElementById("subtype1").checked = true;

//clear the glycoCT
document.getElementById("glycoCT").value = "";

//format the radio buttons on selection
$("input:radio:checked").parent('label').toggleClass("checked");

$("input:radio").on('change', function () {

  $('.checked').toggleClass('checked');
  $("input:radio:checked").parent('label').toggleClass("checked");
})

//////
//Code for multimode event listeners
//clears the multiple add/edit features by reseting child glycan
let multimode = false

const KeyDownListeners = function (e) {
  // console.log(e.which);
  if (e.originalEvent.key === "m") {
    var modelist = Array.from(document.querySelectorAll('#modelist input'));
    var mode = modelist.length && modelist.find(r => r.checked).value;
    if (mode === "add" || mode === "replace") {
      // if ($("#d3glycanstrucSVG").length == 0) {
      //   alert('Multi-mode can only be turned on after first monosaccharide.')
      //   return;
      // }
      if (document.getElementById('multimode').innerHTML == "" && $("#d3glycanstrucSVG").length > 0) {
        $("#multimode").append("Multi-mode On")
          .removeClass('hide').addClass('show');
        multimode = true;
      }
    } else {
      alert('Multi-mode can only be turned on for Add and Replace modes.')
    }
  }
  if (e.ctrlKey && e.originalEvent.key === "z" && tracknum > 0) {
    undo();
  }
  if (e.ctrlKey && e.originalEvent.key === "y" && tracknum <= trackname.length) {
    redo();
  }
};

$(window).keydown(KeyDownListeners);

//attach the keyup listener to remove the multimode
$(window).keyup(function (e) {
  console.log(e);
  if (e.originalEvent.key === "m") {
    // resetchildglycan(); //function from addinfo.js
    $("#multimode").empty().addClass('hide').removeClass('show');
    multimode = false;
  }
})

//////

// after everything is loaded push the name into the trackname to start tracking
// if there was a name left in the field
$(document).ready(() => {
  var name = document.getElementById(nameid).value;
  name = "";
  tracknames(name);
  if (name != "") {
    d3glycanstructure(name, 'd3glycanstruc');
  }

  //preload the cursors
  //use the getUrl from the _gglyphglobals.js to get the base url to load
  $.get(getUrl + 'img/plus-solid.svg', function () {
  });
  $.get(getUrl + 'img/exchange-alt-solid.svg', function () {
  });
  $.get(getUrl + 'img/eraser-solid.svg', function () {
  });
  $.get(getUrl + 'img/monos.svg', function () {
  });

  //append the terminals on ready
  appendTerminals();
});


