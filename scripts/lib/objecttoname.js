//Function takes glycantojson like object passed into d3.hierarchy
// and converts it back to the CFG Name by recursion
var bracketcount = 0 //counter to keep a track of brackets opening and closing
function objecttoname(obj, bindex) {

  //write down the name
  var name = '';
  if (obj.data.monosaccharide != "" && obj.data.linkage != "") { //ideal conditions both mono and linkage present
    if (obj.data.substituent === undefined || obj.data.substituent === "[]") { obj.data.substituent = ""}
    if (obj.data.linkage.search('-') === -1 && obj.depth > 0) {
      obj.data.linkage = obj.data.linkage + '-';
    }
    name = obj.data.substituent + obj.data.monosaccharide + obj.data.linkage + name;
  } else if (obj.data.linkage == "" && obj.parent == null) { //condition for root node
    name = obj.data.name + name;
  } 
    else { //condition for all other nodes without linkage information
    name = obj.data.name + "-" + name;
  }

  //if the index of the childnode is >1 then put a bracket for the branch
  if (bindex > 1) {
    name = name + ')';
  }
  
  if (obj.data.children.length > 0) {
    obj.children.forEach((e,i) => {
      name = objecttoname(e, obj.children.length- i) + name;

    });
  }

  //if the index of the childnode is >1 then put a closing bracket for the branch
  if (bindex > 1) {
    name = '(' + name;
  }

  return name;
}