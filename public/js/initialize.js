/* 
This file holds all the initialization of event listeners and resets to make the application 
function reactive.
*/

// Add an event listener to the name input field to draw the structure
$("#" + glycoglyph.domElements.nameInputID).on('keyup', function () {
  var name = $(this).val();
  glycoglyph.tracknames(name);

  //draw structure based on name
  if (name.length > 0) {
    glycoglyph.d3glycanstructure(name);
    glycoglyph.cfgToGlycoCT();
  }
  //clear drawing area if text is cleared
  if (!this.value) {
    $(`#${glycoglyph.drawingSettings.drawdivID}`).empty();
    $(`#${glycoglyph.domElements.glycoCTID}`).html("");
  }
});

//code to redraw on clicking the redraw button in settings
$('#redraw').on('click', function () {
  var name = document.getElementById(glycoglyph.domElements.nameInputID).value;
  if (name != "") {
    glycoglyph.d3glycanstructure(name);
  }
})

//add an event listener to the parent div to start putting the first mono
d3.select(`#${glycoglyph.drawingSettings.drawdivID}`).on("mouseover", () => {
  //change cursor style for first addition
  if ($(`#${glycoglyph.drawingSettings.drawdivID}SVG`).length == 0) {
    d3.select(`#${glycoglyph.drawingSettings.drawdivID}`).classed('addcursor', true);
  } else {
    d3.select(`#${glycoglyph.drawingSettings.drawdivID}`).classed('addcursor', false);
  }
}).on("mouseup", () => {
  var modelist = Array.from(document.querySelectorAll('#modelist input'));
  var mode = modelist.length && modelist.find(r => r.checked).value;
  //add first mono if nothing is drawn.
  if ($(`#${glycoglyph.drawingSettings.drawdivID}SVG`).length == 0) {
    if (glycoglyph.childglycan.name == "" && mode == 'add') {
      alert('Select a monosaccharide to add and get started.')
    } else if (mode === 'delete' || mode === 'replace') {
      alert('Switch to add mode to start.')
    }
    else {
      glycoglyph.addfirstmono();
    }
  }
});

//set subtype to Acetyl as default
document.getElementById("subtype1").checked = true;

//clear the glycoCT
document.getElementById(glycoglyph.domElements.glycoCTID).value = "";

//format the radio buttons on selection
$("input:radio:checked").parent('label').toggleClass("checked");

$("input:radio").on('change', function () {

  $('.checked').toggleClass('checked');
  $("input:radio:checked").parent('label').toggleClass("checked");
})

//////
//Code for multimode event listeners
//clears the multiple add/edit features by reseting child glycan
glycoglyph.multimode = false

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
      if (document.getElementById('multimode').innerHTML == "") {
        $(`#${glycoglyph.domElements.multimode}`).append("Multi-mode On")
          .removeClass('hide').addClass('show');
        glycoglyph.dynamicDrawingSettings.multimode = true;
      }
    } else {
      alert('Multi-mode can only be turned on for Add and Replace modes.')
    }
  }
  if (e.ctrlKey && e.originalEvent.key === "z" && glycoglyph.tracknum > 0) {
    glycoglyph.undo();
  }
  if (e.ctrlKey && e.originalEvent.key === "y" && glycoglyph.tracknum <= glycoglyph.trackname.length) {
    glycoglyph.redo();
  }
};

$(window).keydown(KeyDownListeners);

//attach the keyup listener to remove the multimode
$(window).keyup(function (e) {
  // console.log(e);
  if (e.originalEvent.key === "m") {
    // resetchildglycan(); //function from addinfo.js
    $(`#${glycoglyph.domElements.multimode}`).empty().addClass('hide').removeClass('show');
    glycoglyph.dynamicDrawingSettings.multimode = false;
  }
})

//////

// after everything is loaded push the name into the trackname to start tracking
// if there was a name left in the field
$(document).ready(async () => {
  var name = document.getElementById(glycoglyph.domElements.nameInputID).value;
  name = "";
  glycoglyph.tracknames(name);

  // if you need to set a custom file path, just await here before proceeding.
  // await glycoglyph.setMonosSVGPath('/testin/assets/images/monos.svg', 'absolute');
  // await glycoglyph.setCSSPath('../testin/css/glycoglyph.css', 'relative');

  // await glycoglyph.setMonosSVGPath('../assets/images/monos.svg', 'relative');
  // await glycoglyph.setCSSPath('../css/glycoglyph.css', 'relative');

  glycoglyph.listMonosaccharides();


  //append the terminals on ready
  glycoglyph.appendTerminals();
});


