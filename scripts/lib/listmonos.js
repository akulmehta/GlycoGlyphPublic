//Once all the monosaccharide symbols are fetched start appending the buttons
fetchSVG.then(function (svg) {
  // console.log(svgarr);
  svgarr.forEach(mono => {
    appendButton(mono, 'fulllist');
  })

  commonMonos.forEach(e => {
    //find the common monosaccharides based on the "common" array
    var mono = svgarr.find((m) => {
      return m.id == e;
    });
    appendButton(mono, 'commonlist');
  })

});


//funciton appends button for monosaccharide in a given div id.
function appendButton(mono, divid) {
  const div = d3.select('#' + divid)
    .append('div')
    .attr('class', 'monodiv');

  const btn = div.append('div')
    .attr('id', (divid + 'btn' + mono.id))
    .attr('class', 'monobtndiv')
    .attr('title', mono.id + " OR " + mono.fullname)
    .attr('data-abbr', mono.id)
    .on('mouseup', function () {
      monoselect(this.dataset.abbr);
    })

  const svg = btn.append('svg')
    .attr('id', 'mono' + mono.id)
    .attr('viewBox', mono.viewBox)
    .attr('xmlns', 'http://www.w3.org/2000/svg')
    .attr('width', '55')
    .attr('height', '35');



  let g = svg.append('g').attr("transform", "scale(0.5 0.5) translate(25,0)");

  g.html(mono.innerhtml);

  let name = svg.append("g")
    .attr("transform", "translate(50%,50)")
    .append("text")
    .text(mono.id)
    .attr("text-anchor", "middle")
    .attr("x", "50%")
    .attr("y", "90%")
    .attr("font-size", "1em")
    // .attr("font-weight", "bold")
    ;

}



