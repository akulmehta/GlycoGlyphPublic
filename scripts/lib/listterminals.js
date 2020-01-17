
//call appendTerminals in initialize to append the terminals
function appendTerminals() {
  terminals.forEach((f,i) => {
    $("#terminalslist").append(`
    <li class="template">
    <button class="btn btn-outline-primary btn-sm"
      onclick="addTerminaltoChild(${i})">${f.name}</button>
    </li>
  `)
  })
}

function addTerminaltoChild(i) {
  let terminal = terminals[i].sequence;
  childglycan = JSON.parse(glycantojson(terminal));
  $('#monocheck').html(terminal);
  $('#linkagecheck').html("<i>Add Linkage</i>")
}