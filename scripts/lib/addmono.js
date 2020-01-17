function addmono(path, multiple) {
  // check for childglycan having sufficient information
  if (childglycan.monosaccharide == "") {
    alert('No monosaccharide selected. \n\nPlease select a monosaccharide to add.');
    resetchildglycan();
    $("#multimode").empty(); // remove message that multimode is on
    return;
  }
  if (childglycan.linkage === "") {
    childglycan.linkage = "??-?";
    // alert("Linkage information for the monosaccharide has not been added. \n\nPlease Add Linkage information.");
    // return;
  }

  //get the name from the name div and create the object
  var name = document.getElementById(nameid).value;
  var nameobj = JSON.parse(glycantojson(name));

  //create a recursive function to traverse into the nameobj to the parentnode using the path
  var pathcount = 0;
  var duplicatelinknum = false;
  var overrideduplicate = false;
  function recurse(obj) {
    if (obj.name === path[pathcount].data.name) {
      if (pathcount < path.length - 1) {
        pathcount++;
        var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name)
        recurse(obj.children[index]);
      } else {

        //check if child glycan has same linkage as another sibling and if so warn the user.
        obj.children.forEach(a => {
          if (a.linknum == childglycan.linknum) {
            duplicatelinknum = true;
            alert('You are trying to add a node to a position which is occupied. \nTwo nodes cannot have same linkage acceptor position. \nPlease check the linkages.')

            //NOTE- the option to override is not allowed as it can cause downstream errors in naming if user decides to edit the name themselves
            //user is allowed to override if necessary
            // if (confirm("Two nodes cannot have same linkage position. Are you sure you would like to continue?")) {
            //   overrideduplicate = true;
            // } else {
            //   overrideduplicate = false;
            // }

          }
        });


        //push the childglycan once the parent node is reached
        if (duplicatelinknum === false) {
          obj.children.push(childglycan);
        }
      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and push the childglycan there
  recurse(nameobj);

  // console.log(nameobj);

  outputname(nameobj);

  //at the end reset the global variable childglycan if it was pushed
  if ((duplicatelinknum === false || overrideduplicate === true) && multiple == false) {
    resetchildglycan(); //function from addinfo.js
  }

}

function outputname(nameobj) {
  // console.log(nameobj);
  var struc = d3.hierarchy(nameobj); //call d3 hierarchy on structure obj
  // console.log(struc);
  var structure = sortchildren(struc); //sort the structure
  // console.log(structure);
  var newname = objecttoname(structure);
  tracknames(newname); //push new name

  // console.log(trackname);
  document.getElementById(nameid).value = newname; // output the name to the input field
  d3glycanstructure(newname, 'd3glycanstruc');

  //update glycoCT
  cfgToGlycoCT();
}


function addfirstmono() {
  nameobj = childglycan;
  //
  if (nameobj.linkage === "") {
    let link = prompt(`You have not added any linkage for the first monosaccharide.
    \nThis will be treated as an open ring. If this is what you desire leave the field below blank and press OK.
    \nTo indicate a closed ring please type in the linkage information: 
    \nFor example:
    \n"??" if linkage position is unknown in both anomeric configuratio and position or 
    \n"?1" where 1 indicates the position number and can be replaced with the position you desire.  or
    \n"b1" where b indicates the anomeric configuration and 1 indicates the position.
    `, "")
    if (link == null || link == "") {
      nameobj.linkage = "";
    } else {
      nameobj.linkage = link;
    }
  }else{
    nameobj.linkage = nameobj.linkage.split(/\-/g)[0];
  }
  nameobj.name = nameobj.substituent + nameobj.monosaccharide + nameobj.linkage //recreate the name
  outputname(nameobj);
  resetchildglycan();
}