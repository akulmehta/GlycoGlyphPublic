
//function fixes order of children based on linker
function sortchildren(obj) {
  if (obj.data.children.length > 0) {

    obj.children.sort(function (x, y) {
      return d3.ascending(x.data.linknum, y.data.linknum);
    });

    // to check for core fucose 
    //    1. One Child Monosaccharide is "Fuc"
    //    2. The depth of the parent should be 0 (if linker not present) or 1 (if linker is present)
    //    3. The parent mono is GlcNAc
    //    4. There is a sibling child mono is also GlcNAc                      
    // check parent depth   && parent mono is GlcNAc                     && sibling mono is GlcNAc     
    if (obj.children.findIndex((e) => e.data.monosaccharide == "Fuc") > -1 &&
        obj.depth <= 1 &&
        obj.data.monosaccharide === "GlcNAc" &&
        obj.children.findIndex((e) => e.data.monosaccharide == "GlcNAc") > -1) {
      // console.log("Found core fucose");
      // when core fucose found sort differently
      obj.children.sort ((x,y) => x.data.monosaccharide == "Fuc" ? -1 : y.data.monosaccharide == "Fuc" ? 1 : 0)
    }

    //recurse all children
    obj.children.forEach(e => {
      sortchildren(e);
    });
  }

  return obj;
}