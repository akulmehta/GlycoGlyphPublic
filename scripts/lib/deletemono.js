function deletemono(path) {
  //if first node just remove the svg to start fresh
  if (path.length == 1) {
    document.getElementById(nameid).value = "";
    $("#d3glycanstruc").empty();
    $("#glycoCT").html("");
    return;
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
      if (pathcount < path.length - 2) {
        pathcount++;
        var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name)
        recurse(obj.children[index]);
      } else {
        var index = obj.children.findIndex((e) => e.name === path[pathcount+1].data.name)
        obj.children.splice(index, 1); //delete the mono
      }
    }
    return obj;
  }

  //use above recursive function to go to the parentnode selected and delete the childglycan there
  recurse(nameobj);

  outputname(nameobj); //function from addmono.js

  resetchildglycan(); //function from addinfo.js


}