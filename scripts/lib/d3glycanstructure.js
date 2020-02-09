//Draws the structure
function d3glycanstructure(glycanname, drawdivID) {
  //MOD: this version of d3glycanstructure is incapable of drawing glycopeptides
  // // aminoacids.some(function (v) { return glycanname.search(v) > -1 }) // check for aminoacids
  // if (glycanname.search(/(\{)|(\})/g) > -1) {
  //   gpdraw(glycanname, drawdivID);
  //   return;
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

  var margin = {
    top: 50,
    right: 50,
    bottom: 50,
    left: 50,
  },
    width = 360 - margin.left - margin.right;
  //if fixed drawing area height:
  var drawingareachoice = document.getElementById('drawingchoice').value;
  if (drawingareachoice === 'fixdrawingarea') {
    height = 520 - margin.top - margin.bottom;
  } else if (drawingareachoice === 'fixglycansize' && depth <= 2) {
    height = 50 * depth;
  } else if (drawingareachoice === 'fixglycansize' && depth < 10) {
    height = 50 * depth;
  } else if (drawingareachoice === 'fixglycansize' && depth >= 10) {
    height = 520 - margin.top - margin.bottom;
  }

  var orientations = {

    size: [width, height],
    x: function (d) {
      return d.x;
    },
    y: function (d) {
      return height - d.y;
    },

  };//rotates the glycan to vertical drawing from bottom to top

  //only refresh for mouseover type of drawings not for the ctrl+click type
  if (drawdivID == 'd3glycanstruc') {
    d3.select('#d3glycanstrucsub' + drawdivID).remove();
    //    d3.select('#' + drawdivID).select('.refreshremove').remove();
  }

  //create a div to draw the glycans
  var div = d3
    .select('#' + drawdivID)
    .append('div')
    .attr('id', 'd3glycanstrucsub' + drawdivID);
  //push the div to the bottom if it is in the drawer
  if (drawdivID == 'd3glycanstruc') {
    div.style('position', 'absolute')
      .style('bottom', '10px');
  }

  var svg = d3
    .select('#d3glycanstrucsub' + drawdivID)
    .append('svg')
    .attr('id', drawdivID + 'SVG')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('id', 'glycang')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');


  //adjust the symbol size depending on the depth
  var symbsize = document.getElementById('symbolsize').value;


  var o = orientations;


  // Compute the layout.
  var treemap = d3.tree().size(o.size);

  var nodes = d3.hierarchy(data);


  nodes = treemap(nodes);

  fixfucers(nodes, width);

  //adjust to keep root node at the same position.
  var dxg = nodes.x - width / 2;
  if (dxg != 0) {
    d3.select('#glycang')
      .attr('transform', 'translate(' + (margin.left - dxg) + ',' + margin.top + ')');
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
        'M' + d.x + ',' + o.y(d) + 'L' + d.parent.x + ',' + o.y(d.parent)
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
      return rotateFuc(d, o);
    });


  node
    .append('use')
    .attr('xlink:href', function (d, i) { return drawsymbol(d, i, 'glycan') })
    .attr('x', -symbsize / 2)
    .attr('y', -symbsize / 2)
    .attr('height', symbsize) //important for firefox
    .attr('width', symbsize)
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
        .attr('r', (symbsize/2)+10)
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

  // //get the linkage drawing settings;
  var linkVisible, linkRotate, linkAbbr, linkFontSize;
  (document.getElementById('linkagevisible') != null) ? linkVisible = document.getElementById('linkagevisible').checked : linkVisible = true;
  (document.getElementById('linkagerotate') != null) ? linkRotate = document.getElementById('linkagerotate').checked : linkRotate = true;
  (document.getElementById('linkageabbr') != null) ? linkAbbr = document.getElementById('linkageabbr').checked : linkAbbr = false;
  (document.getElementById('linkFontSize') != null) ? linkFontSize = document.getElementById('linkFontSize').value : linkFontSize = 14;


  if (linkVisible === true) {
    //append linkage text
    node
      .append('text')
      .attr('transform', function (d, i) {
        return transformlinkText(d, i, linkRotate, linkFontSize, linkAbbr,symbsize);
      })
      .text(function (d) { 
        // console.log(linkageText(d, linkAbbr));
        return linkageText(d, linkAbbr) })
      .attr('font-size', linkFontSize)
      .attr('text-anchor', 'middle')
      .style('font-family', 'Arial,Sans');
  }

  //append substitution text
  node
    .append('text')
    .text(function (d) { return subText(d); })
    .attr('font-size', linkFontSize)
    .style('font-family', 'Arial,Sans')
    .attr('x', -linkFontSize - 3)
    .attr('y', 3)
    .attr('text-anchor', 'end');
  //  console.log(glycanname);
  //  console.log('drawing finished');
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
function fixfucers(node, width) {
  //try these name 
  //Galb1-4(Galb1-4)GlcNAcb1-3(Fuca1-2)Sp8
  //Galb1-4(Fuca1-3)GlcNAcb1-6(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-3)Galb1-4Glc-Sp21
  //Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3(Fuca1-4(Fuca1-2Galb1-3)GlcNAcb1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb-Sp19
  //Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb1-3Galb1-4(Fuca1-3)GlcNAcb-Sp0

  //get the option for the fucose
  var fucopt = document.getElementById('fucoseopt').value;
  //if original styling then just return and don't modify the values for the fucose
  if (fucopt === 'fucoriginal') { return }

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

      if (fucopt === 'fucout') {
        //this code puts the fucoses outwards at all times
        if (d.x < centerx) {
          d.x = d.parent.x - (width / 4); //to the left 
        } else if (d.x > centerx) {
          d.x = d.parent.x + (width / 4); //to the right
        } else if (d.x == centerx) {
          if (d.parent.x < centerx) {
            d.x = d.parent.x - (width / 4); //to the left 
          } else if (d.parent.x > centerx) {
            d.x = d.parent.x + (width / 4); //to the left 
          } else {
            d.x = d.parent.x - (width / 4); //to the left as default condition
          }
        } else {
          d.x = d.parent.x - (width / 4); //to the left as default condition
        }
      }

      if (fucopt === 'fucdown') {
        //This code can shift fucose either to left or right of parent
        //check if fucose is left or right of parent node and adjust the x-value with respect to the width
        if (d.x < d.parent.x) {
          d.x = d.parent.x - (width / 4); //to the left
        } else {
          d.x = d.parent.x + (width / 4); //to the right
        }
      }

      if (fucopt === 'fucleft') {
        //This code is alternative to above to push fucose strictly to the left of the parent
        d.x = d.parent.x - (width / 4); //push to left
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
function transformlinkText(d, i, linkRotate, fontSize, linkAbbr,symbsize) {
  // console.log(d);
  if (i > 0) { //ignores the first sugar as that is the root
    //calculate the angle between this node and the parent node
    var angle = Math.atan2((d.y - d.parent.y), (d.parent.x - d.x)) * 180 / Math.PI;
    //adjust angle for fucose if not using classical drawing
    var fuctype = document.getElementById('fucoseopt').value;
    if (d.data.monosaccharide === "Fuc" && fuctype != 'fucoriginal' && d.depth > 0) {

      if (d.x < d.parent.x) {
        angle = 30 //to the left
      } else {
        angle = 150 //to the right
      }
    }
    if (d.data.monosaccharide === "Fuc" && fuctype != 'fucoriginal') {
      if (angle <= 45) {
        return 'translate(' + (d.parent.x - d.x - 10) / 2 + ',' + (d.y - d.parent.y + 25) / 2 + ') rotate(' + angle + ')';
      } else {
        return 'translate(' + (d.parent.x - d.x + 10) / 2 + ',' + (d.y - d.parent.y + 46) / 2 + ') rotate(' + angle + ')';
      }
    }
    if (linkRotate == false) {
      var n;
      linkAbbr ? n = 2 : n = 4;
      switch (true) {
        case (d.x < d.parent.x):
          return 'translate(' + (d.parent.x - d.x - (fontSize * 6) + (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x === d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (fontSize * 6) + (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
        case (d.x > d.parent.x):
          return 'translate(' + (d.parent.x - d.x + (fontSize * 6) - (fontSize * n)) / (fontSize / 2) + ',' + (d.y - d.parent.y + 5) / 2 + ')';
      }
    }
    return 'translate(' + (d.parent.x + 10 - d.x) / 2 + ',' + (d.y - d.parent.y) / 2 + ') rotate(' + angle + ')';


  }else {
    return `translate(${symbsize/4},${symbsize})`
  }
}

function rotateFuc(d, o) {
  // console.log(d.depth);
  // if (d.depth === 1) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  if (d.depth === 0) { return 'translate(' + o.x(d) + ',' + o.y(d) + ')'; }
  //do not rotate if classical styling for fucose
  var fuctype = document.getElementById('fucoseopt').value;
  if (fuctype === 'fucoriginal') {
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
function linkageText(d, abbr) {
  var str = d.data.linkage;
  if (abbr == true) {
    str = str.replace(/a(?=[\d\?]\-[\d\?])/g, '\u03B1')
      .replace(/b(?=[\d\?]\-[\d\?])/, '\u03B2')
      .replace(/[\d|\?]\-/g, '');
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
    }else {
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