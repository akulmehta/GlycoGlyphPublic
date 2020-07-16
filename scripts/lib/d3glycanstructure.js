//Draws the structure
function d3glycanstructure(glycanname, options) {
  //MOD: this version of d3glycanstructure is incapable of drawing glycopeptides
  // // aminoacids.some(function (v) { return glycanname.search(v) > -1 }) // check for aminoacids
  // if (glycanname.search(/(\{)|(\})/g) > -1) {
  //   gpdraw(glycanname, drawdivID);
  //   return;
  // }

  //default configurations for drawing
  let configuration = {
    width: 360,
    height: 520,
    orientation: 'bottom-to-top',
    drawdivID: 'd3glycanstruc',
    symbsize: 30,
    drawingareachoice: 'fixglycansize',
    fucopt: 'fucdown',
    linkageVisible: true,
    linkRotate: false,
    linkAbbr: false,
    linkFontSize: 16,
    margin: {
      top: 50,
      right: 50,
      bottom: 50,
      left: 50,
    },
    drawingSettingsDivID: 'drawsetting',
    userOverrideOptions: true
  }

  //Put all of the options into a variable called configuration
  if ('undefined' !== typeof options) {
    for (var i in options) {
      if ('undefined' !== typeof options[i]) { configuration[i] = options[i]; }
    }//for i
  }//if

  if (configuration.userOverrideOptions === true) {
    configuration = getUserDrawingOptions(configuration);
  }

  if (configuration.orientation === 'right-to-left') {
    let height = configuration.width;
    configuration.width = configuration.height;
    configuration.height = height;
  }


  // console.log(configuration);


  // if (configuration.orientation === "right-to-left") {
  //   configuration.margin.right = configuration.margin.right + 20;
  // }


  drawersize = 400;
  if (glyd3render === true) {
    $('#slideout').css('width', drawersize + 'px');
    $('#slideout').animate({ right: '0px' }, { queue: false, duration: 500 });
  }


  //convert the glycanname to json
  var glycanjson = glycantojson(glycanname);

  var data = JSON.parse(glycanjson);
  // console.log(data);

  var depth = getDepth(data); //using the depth you can set different dimensions for the SVG images
  //allowing for better visibility of larger structures

  var margin = configuration.margin;

  let height, width;
  if (configuration.orientation == 'right-to-left') {
    height = configuration.height - margin.top - margin.bottom;
  } else {
    width = configuration.width - margin.left - margin.right;
  }
  //if fixed drawing area height:
  if (configuration.drawingareachoice === 'fixdrawingarea') {
    if (configuration.orientation == 'right-to-left') {
      width = configuration.width - margin.left - margin.right;
    } else {
      height = configuration.height - margin.top - margin.bottom;
    }
  } else if (configuration.drawingareachoice === 'fixglycansize' && depth <= 2) {
    if (configuration.orientation == 'right-to-left') {
      width = 50 * depth;
    } else {
      height = 50 * depth;
    }
  } else if (configuration.drawingareachoice === 'fixglycansize' && depth < 10) {
    if (configuration.orientation == 'right-to-left') {
      width = 50 * depth;
    } else {
      height = 50 * depth;
    }
  } else if (configuration.drawingareachoice === 'fixglycansize' && depth >= 10) {
    if (configuration.orientation == 'right-to-left') {
      width = configuration.width - margin.top - margin.bottom;
    } else {
      height = configuration.height - margin.top - margin.bottom;
    }

  }

  var orientations = {
    "right-to-left": {
      size: [height, width],
      x: function (d) { return width - d.y; },
      y: function (d) { return d.x; }
    },
    "bottom-to-top": {
      size: [width, height],
      x: function (d) {
        return d.x;
      },
      y: function (d) {
        return height - d.y;
      },
    }

  };//rotates the glycan to vertical drawing from bottom to top

  //only refresh for mouseover type of drawings not for the ctrl+click type
  if (configuration.drawdivID == 'd3glycanstruc') {
    d3.select('#d3glycanstrucsub' + configuration.drawdivID).remove();
    //    d3.select('#' + drawdivID).select('.refreshremove').remove();
  }

  if (configuration.orientation === "bottom-to-top") {
    d3.select(`#${configuration.drawdivID}`)
      .style('flex-direction', 'column-reverse')
  } else {
    d3.select(`#${configuration.drawdivID}`)
      .style('flex-direction', 'row-reverse')
  }

  //create a div to draw the glycans
  var div = d3
    .select('#' + configuration.drawdivID)
    .append('div')
    .attr('id', 'd3glycanstrucsub' + configuration.drawdivID);



  var svg = d3
    .select('#d3glycanstrucsub' + configuration.drawdivID)
    .append('svg')
    .attr('id', configuration.drawdivID + 'SVG')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('id', 'glycang')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');



  var o = orientations[configuration.orientation];

  // Compute the layout.
  var treemap = d3.tree().size(o.size);

  var nodes = d3.hierarchy(data);


  if (configuration.orientation == 'right-to-left') {
    nodes = sortchildren(nodes, true);
  }


  nodes = treemap(nodes);

  // oxford = true;
  // if (oxford === true) {
  //   nodes = getoxfordcoords(nodes, width, height, symbsize);
  // }

  fixfucers(nodes, configuration);

  //adjust to keep root node at the same position.
  if (configuration.orientation == 'right-to-left') {
    var dxg = nodes.x - height / 2;
    if (dxg != 0) {
      if (depth < 10) {
        d3.select('#glycang')
          .attr('transform', 'translate(' + (width + margin.left - 50 * depth) + ',' + (margin.top - dxg) + ')');
      } else {
        d3.select('#glycang')
          .attr('transform', 'translate(' + margin.left + ',' + (margin.top - dxg) + ')');
      }
    }
  } else {
    var dxg = nodes.x - width / 2;
    if (dxg != 0) {
      d3.select('#glycang')
        .attr('transform', 'translate(' + (margin.left - dxg) + ',' + margin.top + ')');
    }
  }



  var links = nodes.descendants().slice(1);

  // Create the link lines.
  svg
    .selectAll('.glyd3link')
    .data(links)
    .enter()
    .append('path')
    .attr('class', 'glyd3link')
    .attr('d', function (d) {
      return (
        'M' + o.x(d) + ',' + o.y(d) + 'L' + o.x(d.parent) + ',' + o.y(d.parent)
      );
    })
    .attr('stroke-width', 2);

  // Create the node groups.
  var node = svg
    .selectAll('.node')
    .data(nodes.descendants())
    .enter()
    .append('g')
    .attr('transform', function (d) {
      return rotateFuc(d, o, configuration);
    });


  node
    .append('use')
    .attr('xlink:href', function (d, i) { return drawsymbol(d, i, 'glycan') })
    .attr('x', -configuration.symbsize / 2)
    .attr('y', -configuration.symbsize / 2)
    .attr('height', configuration.symbsize) //important for firefox
    .attr('width', configuration.symbsize)
    .attr('class', 'symbol')
    .on('click', function (d) {
      var path = nodes.path(d);
      var modelist = Array.from(document.querySelectorAll('#modelist input'));
      var mode = modelist.length && modelist.find(r => r.checked).value;
      if (mode === "add") {
        if (multimode) { //check if multimode is on from initialize.js
          addmono(path, true);
        } else {
          addmono(path, false);
        }
      } else if (mode === "replace") {
        if (multimode) {
          replacemono(path, true);
        } else {
          replacemono(path, false);
        }
      } else if (mode === "delete") {
        deletemono(path);
      }
    })
    .on('mouseover', function (d) {
      d3.select(this.parentElement).append('circle')
        .attr('class', 'highlightnode')
        .attr('r', (configuration.symbsize / 2) + 10)
        .attr('fill', function (d) {
          var modelist = Array.from(document.querySelectorAll('#modelist input'));
          var mode = modelist.length && modelist.find(r => r.checked).value;
          if (mode === "add") {
            d3.select(this.parentElement).selectAll('.symbol').classed('addcursor', true).classed('replacecursor', false).classed('deletecursor', false);
            return "#227093";
          } else if (mode === "replace") {
            d3.select(this.parentElement).selectAll('.symbol').classed('replacecursor', true).classed('addcursor', false).classed('deletecursor', false);
            return "#FFBA3B";
          } else if (mode === "delete") {
            d3.select(this.parentElement).selectAll('.symbol').classed('deletecursor', true).classed('addcursor', false).classed('replacecursor', false);
            return "#7D1515";
          }
        })
        .attr('fill-opacity', 0.4)
        .lower(); //lower makes the circle append before the node in the parent so that the mouseout function can work

      $(document).bind("keyup", (f) => {
        if (f.originalEvent.key == "Delete" || f.originalEvent.key == "d") {
          $.when($(document).unbind("keyup")).then((g) => {
            var path = nodes.path(d);
            deletemono(path);
          });
        }
      })
    })
    .on('mouseout', function (d) {
      $(document).unbind("keyup"); //remove the keyup event for checking to delete
      d3.selectAll('.highlightnode').remove();
    });


  if (configuration.linkageVisible === true) {
    //append linkage text
    node
      .append('text')
      .attr('transform', function (d, i) {
        return transformlinkText(d, i, configuration);
      })
      .text(function (d) {
        return linkageText(d, i, configuration)
      })
      .attr('font-size', configuration.linkFontSize)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Arial,Sans');
  }

  //append substitution text
  let subtext = node
    .append('text')
    .text(function (d) { return subText(d); })
    .attr('font-size', configuration.linkFontSize)
    .style('font-family', 'Arial,Sans');

  if (configuration.orientation === 'bottom-to-top') {
    subtext.attr('x', -configuration.linkFontSize - 3)
      .attr('y', 3)
      .attr('text-anchor', 'end');
  } else {
    subtext.attr('x', 3)
      .attr('y', configuration.linkFontSize + configuration.symbsize / 2)
      .attr('text-anchor', 'middle');
  }
  //  console.log(glycanname);
  //  console.log('drawing finished');
}

function getUserDrawingOptions(options) {
  let settingsForm = document.querySelector(`#${options.drawingSettingsDivID} form`);
  if (!settingsForm) {
    console.warn('GlycoGlyph: No settings div found, using default options.');
    return options
  };
  let inputs = settingsForm.querySelectorAll('input, select, checkbox');

  inputs.forEach(f => {
    if (f.type === 'checkbox') {
      options[f.id] = f.checked;
    } else if (f.type === 'number') {
      options[f.id] = +f.value;
    } else {
      options[f.id] = f.value;
    }
  })

  //console.log(options);

  return options;
}


//getDepth function gets how deep the data is nested
function getDepth(obj) {
  var depth = 0;
  if (obj.children) {
    obj.children.forEach(function (d) {
      var tmpDepth = getDepth(d);
      if (tmpDepth > depth) {
        depth = tmpDepth;
      }
    });
  }
  return 1 + depth;
};

//fix the fucoses to right angles
function fixfucers(node, options) {
  //try these name 
  //Galb1-4(Galb1-4)GlcNAcb1-3(Fuca1-2)Sp8
  //Galb1-4(Fuca1-3)GlcNAcb1-6(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-3)Galb1-4Glc-Sp21
  //Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb-Sp19
  //Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb-Sp0

  //if original styling then just return and don't modify the values for the fucose
  if (options.fucopt === 'fucoriginal') { return }

  let width = options.width - options.margin.left - options.margin.right;
  if (options.orientation === "right-to-left") {
    width = options.height - options.margin.top - options.margin.bottom;
  }
  //get the center value
  var centerx = node.x;

  //go through each node and check if fucose present.
  node.each((d) => {
    if (d.data.monosaccharide === "Fuc") {
      //get the x-limits for the child nodes of the parent of the fucose
      // if (d.parent.depth === 0) { return; }
      if (d.depth === 0) { return; }
      var xmin = d.parent.children[0].x;
      var xmax = d.parent.children[d.parent.children.length - 1].x;
      //count number of non-fucose children
      var nonfucchild = d.parent.children.filter((e) => { return e.data.name.search('Fuc') === -1 }).length;
      var allchildren = d.parent.children.length;

      //drop the fucose to the level of its parent node
      d.y = d.parent.y;
      //get the parent node x value
      var parentx = d.parent.x;

      if (options.fucopt === 'fucout') {
        //this code puts the fucoses outwards at all times
        if (d.x < centerx) {
          d.x = d.parent.x - (width / 5); //to the left 
        } else if (d.x > centerx) {
          d.x = d.parent.x + (width / 5); //to the right
        } else if (d.x == centerx) {
          if (d.parent.x < centerx) {
            d.x = d.parent.x - (width / 5); //to the left 
          } else if (d.parent.x > centerx) {
            d.x = d.parent.x + (width / 5); //to the left 
          } else {
            d.x = d.parent.x - (width / 5); //to the left as default condition
          }
        } else {
          d.x = d.parent.x - (width / 5); //to the left as default condition
        }
      }

      if (options.fucopt === 'fucdown') {
        //This code can shift fucose either to left or right of parent
        //check if fucose is left or right of parent node and adjust the x-value with respect to the width
        if (d.x < d.parent.x) {
          d.x = d.parent.x - (width / 5); //to the left
        } else {
          d.x = d.parent.x + (width / 5); //to the right
        }
      }

      if (options.fucopt === 'fucleft') {
        //This code is alternative to above to push fucose strictly to the left of the parent
        d.x = d.parent.x - (width / 5); //push to left
      }

      //find the difference in x between the siblings of the fucose and the parent
      var diffx; //the difference in x between parent and siblings
      d.parent.children.forEach((e) => {
        if (e.data.monosaccharide !== "Fuc" && diffx == undefined) {
          diffx = e.x - parentx;
        }
      });

      //go through each sibling of the fucose and adjust the x.
      d.parent.children.forEach((c, i) => {
        if (c.data.monosaccharide !== "Fuc" && c.data.name !== d.parent.data.name) {
          c.each((child) => {
            child.x = child.x - diffx;
          })
        }
      })
    }
  })
}

//returns coordinates for transform for linkage text
function transformlinkText(d, i, options) {
  // console.log(d);
  if (i > 0) { //ignores the first sugar as that is the root
    //calculate the angle between this node and the parent node
    var angle = Math.atan2((d.y - d.parent.y), (d.parent.x - d.x)) * 180 / Math.PI;
    // console.log(angle)
    // console.log(d.data.name);

    if (options.orientation === "right-to-left") {
      //enter special logic to calculate the text angles for right to left type orientation

      var n;
      options.linkAbbr ? n = 2 : n = 4;

      if (d.data.monosaccharide === "Fuc" && options.fuctype != 'fucoriginal') {
        if (angle <= 45) {
          angle = 90;
          return `translate(${(d.y - d.parent.y) / 2 + options.linkFontSize / 2},${(d.parent.x - d.x) / 2}) rotate(${angle})`;
        } else {
          angle = -90;
          return `translate(${(d.y - d.parent.y) / 2 - options.linkFontSize / 2},${(d.parent.x - d.x) / 2}) rotate(${angle})`;

        }
      }

      if (options.linkRotate == false) {
        switch (true) {
          case (d.x < d.parent.x):
            return `translate(${(d.y - d.parent.y) / 2 + options.linkFontSize},${(d.parent.x - d.x) / 2 - options.linkFontSize})`;
          case (d.x === d.parent.x):
            return `translate(${(d.y - d.parent.y) / 2},${(d.parent.x - d.x) / 2 - options.linkFontSize / 2})`;
          case (d.x > d.parent.x):
            return `translate(${(d.y - d.parent.y) / 2 + options.linkFontSize},${(d.parent.x - d.x) / 2 + options.linkFontSize})`;
        }
      }

      angle = Math.atan2((d.parent.x - d.x), (d.y - d.parent.y)) * 180 / Math.PI;
      // console.log(`new angle: ${angle}`)
      // console.log(`dy = ${d.y} \t dparenty = ${d.parent.y} \t dx = ${d.x} \t dparentx = ${d.parent.x}\n
      //   x = ${Math.abs(d.parent.x - d.x) / 2} \t , \t y = ${Math.abs(d.parent.y - d.y) / 2}
      //   `);

      return `translate(${(d.y - d.parent.y) / 2},${(d.parent.x - d.x) / 2 - options.linkFontSize / 2}) rotate(${angle})`;

      // end right-to-left block
    }

    //adjust angle for fucose if not using classical drawing
    if (d.data.monosaccharide === "Fuc" && options.fuctype != 'fucoriginal' && d.depth > 0) {

      if (d.x < d.parent.x) {
        angle = 30 //to the left
      } else {
        angle = 150 //to the right
      }
    }
    if (d.data.monosaccharide === "Fuc" && options.fuctype != 'fucoriginal') {
      if (angle <= 45) {
        return 'translate(' + (d.parent.x - d.x - 10) / 2 + ',' + (d.y - d.parent.y + 25) / 2 + ') rotate(' + angle + ')';
      } else {
        angle = -30;
        return 'translate(' + (d.parent.x - d.x + 10) / 2 + ',' + (d.y - d.parent.y + 30) / 2 + ') rotate(' + angle + ')';
      }
    }
    if (options.linkRotate == false) {
      var n;
      options.linkAbbr ? n = 2 : n = 4;
      switch (true) {
        case (d.x < d.parent.x):
          return 'translate(' + (d.parent.x - d.x - (options.linkFontSize * 6) + (options.linkFontSize * n)) / (options.linkFontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x === d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (options.linkFontSize * 6) + (options.linkFontSize * n)) / (options.linkFontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x > d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (options.linkFontSize * 6) - (options.linkFontSize * n)) / (options.linkFontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
      }
    }
    return 'translate(' + (d.parent.x + 10 - d.x) / 2 + ',' + (d.y - d.parent.y) / 2 + ') rotate(' + angle + ')';


  } else {
    return `translate(${options.symbsize / 4},${options.symbsize})`
  }
}

function rotateFuc(d, o, options) {
  // console.log(d.depth);
  // if (d.depth === 1) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  if (d.depth === 0) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  //do not rotate if classical styling for fucose

  if (options.orientation === "right-to-left") {
    return 'translate(' + o.x(d) + ',' + o.y(d) + ')';
  }
  if (options.fuctype === 'fucoriginal') {
    return 'translate(' + o.x(d) + ',' + o.y(d) + ')';
  } else if (d.data.monosaccharide !== "Fuc") {
    return 'translate(' + o.x(d) + ',' + o.y(d) + ')';
  }
  else {
    d.y = d.y + 4;
    if (d.x < d.parent.x) {
      return 'translate(' + o.x(d) + ',' + o.y(d) + ') rotate(-30)';
    } else {
      return 'translate(' + o.x(d) + ',' + o.y(d) + ') rotate(30)';
    }
  }
}



//find the symbol to draw in the monos.svg
function drawsymbol(d, i, type) {
  if (type === "gp" && i === 0) { return; } //do not draw first residue in glycopeptides
  if (d.data.monosaccharide != undefined) {
    var str = d.data.monosaccharide;
  } else {
    var str = d.data.name;
  }
  if (str != "") {
    return 'img/monos.svg#' + str.toLowerCase();
  } else {
    return 'img/monos.svg#unknown'
  }
}


//returns the linkage text after replacing the a to alpha and b to beta
function linkageText(d, i, options) {
  var str = d.data.linkage;
  if (str == '') { return }
  if (i===0) {
    str = str.replace('a', '\u03B1').replace('b', '\u03B2')
    return str;
  }

  // console.log(d);
  let abbr = options.linkAbbr;
  //special case for fucose to the right this turns the linkage reverse
  if (options.orientation === "bottom-to-top" && d.data.monosaccharide === "Fuc" && d.x > d.parent.x) {
    if (abbr == true) {
      str = str.replace(/[\d\?]\-/g, '');
    }
    str = str.split("").reverse().join("");
    str = str.replace(/a/gi, '\u03B1').replace(/b/gi, '\u03B2');
    //console.log(str);
    return str;
  }

  if (abbr == true) {
    str = str.replace(/a(?=[\d\?]\-[\d\?])/g, '\u03B1')
      .replace(/b(?=[\d\?]\-[\d\?])/, '\u03B2')
      .replace(/[\d\?]\-/g, '');
    return str;
  }
  if (str.search(/[a,b,\?][\d,\?]\-[\d,\?]/) > -1) {

    if (str.search(/a[\d,\?]\-[\d,\?]/) > -1) {
      str = str.replace(/a(?=[\d\?]\-[\d\?])/, '\u03B1'); //replaces a to alphas
    } else if (str.search(/b[\d\?]\-[\d\?]/) > -1) {
      str = str.replace(/b(?=[\d\?]\-[\d\?])/, '\u03B2'); //replaces b to beta
    }
    return str.substr(str.indexOf('-') - 2);
  } else if (str.search(/[a,b,\?]\-/) > -1) {
    return str.substr(str.indexOf('-') - 1);
  }
  // if partial linkage information
  else if (str.search(/[a,b,\?][\d,\?]/) > -1) {
    if (str.charAt(str.length - 2) === 'a') {
      return '\u03B1' + str.charAt(str.length - 1);
    } else if (str.charAt(str.length - 2) === 'b') {
      return '\u03B2' + str.charAt(str.length - 1);
    } else {
      return str;
    }
  }
  else if (str === "a") {
    return '\u03B1';
  }
  else if (str === 'b') {
    return '\u03B2';
  }
  else {
    return str;
  }
}

//returns the substituent text
function subText(d) {
  if (d.data.substituent != undefined) {
    var str = d.data.substituent;
  } else {
    var str = "";
    return;
  }

  //replace the brackets with "," to create the output string
  str = str.replace(/\[(?=[0-9a-zA-Z])/g, '').replace(/\](?=[0-9a-zA-Z])/g, ',').replace(']', '');

  return str;

}