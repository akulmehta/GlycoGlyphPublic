const tutorialsteps = [
  {
    "id": "tutorialbtn",
    "html": `Starting Tutorial.
    <br> Press: 
    <br>'Right Arrow' or '&rarr;' to move ahead, 
    <br>'Left Arrow' or '&larr;' to move back 
    <br>'Escape' to get out of tutorial.`,
    "placement": "bottom"
  },
  {
    "id": "cfg_name",
    "html": `GlycoGlyph allows you to write a glycan name to produce a structure. Enter the name in the Modified Condensed IUPAC Nomenclature or CFG Linear Nomenclature here and the structure will be drawn. Alternatively, you can draw the structure using the graphical user interface below. Press '→' to continue.`,
    "placement": "bottom"
  },
  {
    "id": "d3glycanstruc",
    "html": `Once you have prepared your structure on the left and selected a mode, you can click here on a node to draw accordingly.`,
    "placement": "left"
  },
  {
    "id": "templatesdropdown",
    "html": `You can select a starter template or larger terminals from here.`,
    "placement": "top"
  },
  {
    "id": "monosaccharidedropdown",
    "html": `Or you can prepare a monosaccharide to add by selecting a monosaccharide, linkage and substitution`,
    "placement": "bottom"
  },
  {
    "id": "subscheck",
    "html": `The structure prepared to be added will appear here. You can check it before adding/replacing nodes in the structure.`,
    "placement": "right"
  },
  {
    "id": "modelistlabel",
    "html": `You can choose your mode, i.e. whether you would like to add, replace or delete to the structure.`,
    "placement": "right"
  },
  {
    "id": "glycoCT",
    "html": `The GlycoCT gets generated for the name automatically. Note- Currently this only works for the Common Monosaccharides.`,
    "placement": "right"
  },
  {
    "id": "getGTCIDBtn",
    "html": `You can request for the GlyTouCan ID for the structure by clicking this button. It will fetch the GlyTouCan IDs for all possible reducing end anomers, i.e. alpha, beta, unkown and open ring.`,
    "placement": "right"
  },
  {
    "id": "settingscolumn",
    "html": `You can check out some drawing settings to change how your structure looks. For e.g. you can increase/decrease symbol sizes or linkage text font size.`,
    "placement": "left"
  },
  {
    "id": "snapshotcolumn",
    "html": `You can save the structure as a vector SVG file which can be used to edit in any illustration software such as Adobe Illustrator or Inkscape.`,
    "placement": "left"
  }
]


// Tutorials based on bootstrap tooltips
let showtooltip = false;
//enable tooltips
function startTutorial() {
  //if the button is clicked and the tooltips were on toggle off the tooltips and exit the tutorial
  if (showtooltip == true) {
    endTutorial();
    return;
  }

  function showtutstep(stepnum) {
    // get the step data from the tutorialsteps global variable
    let step = tutorialsteps[stepnum];

    //remove any tooltips generated previously
    $('[data-toggle="tooltip"]').tooltip("dispose");

    //generate the tooltip
    $(`#${step.id}`).tooltip({
      html: true,
      title: step.html,
      placement: step.placement,
      template: "<div class='tooltip' role='tooltip'><div class='arrow'></div><div class='tooltip-inner' style='max-width: 300px;'></div></div>",
      trigger: 'manual',
    }).tooltip("show");

    //assign the data-toggle attribute to the specific id so that it can be removed for the next step.
    $(`#${step.id}`).attr("data-toggle", "tooltip");
  }

  //if show tooltip was false toggle it to true and proceed 
  // adding the event listener
  showtooltip = true;

  let tutstepnum = 0;   // keep track of tutorial step number 

  showtutstep(tutstepnum);   //show first step

  //turn off any previous keydowns like the main keydown so that only the 
  $(window).off("keydown");

  //provide the start tutorial notice
  $("#tutorialnotice").toggleClass('hide');

  $(window).keydown(function (e) {
    // console.log(e);
    if (showtooltip == false) { return }
    // get the keycodes to check if forward arrow or back arrow
    let keycode = e.originalEvent.keyCode;
    let key = e.originalEvent.key;

    //do following code if forward arrow
    if (keycode === 39 || key === "ArrowRight") {
      if (tutstepnum > tutorialsteps.length - 2) {
        //finish message
        $("#endtutorialnotice").removeClass('hide');
        $('[data-toggle="tooltip"]').tooltip("dispose");
        return;
      }
      tutstepnum++;
      showtutstep(tutstepnum);
    }

    //do following code if back arrow
    if (keycode === 37 || key === "ArrowLeft") {
      (tutstepnum != 0) ? tutstepnum-- : tutstepnum;
      showtutstep(tutstepnum);
    }

    //quit the tutorial if escape
    if (keycode === 27 || key === "Escape") {
      endTutorial();
    }
  })

  /*
  // The following code helps to get the tutorialsteps array into the console if the
  // tooltip information is written according to traditional Bootstrap 4 syntax 
  let tooltips = []
  $('[data-toggle="tooltip"]').each((e, d) => {
    console.log(d);
    let obj = {
      id: d.id,
      num: +d.dataset.tooltipnum,
      html: d.attributes.title.nodeValue,
      placement: d.dataset.placement
    };
    tooltips.push(obj)
  })
  tooltips.sort((a, b) => a.num - b.num);
  console.log(tooltips);

  */

}


function endTutorial() {
  //remove all tooltips
  $('[data-toggle="tooltip"]').tooltip("dispose");

  //turn off the tutorial notice
  $("#tutorialnotice").addClass('hide');

  //finish message
  $("#endtutorialnotice").addClass('hide');

  //reset showtooltip to false
  showtooltip = false;

  //disable all keydown listeners
  $(window).off("keydown");

  //restore the global keydown listener
  $(window).keydown(KeyDownListeners);
}