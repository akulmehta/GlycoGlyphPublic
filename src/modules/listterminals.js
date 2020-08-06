import {terminals, childglycan} from './globalvars.js';
import {glycantojson} from './glycantoJSON.js';

//call appendTerminals in initialize to append the terminals
export function appendTerminals() {
  terminals.forEach((f,i) => {
    $("#terminalslist").append(`
    <li class="template">
    <button class="btn btn-outline-primary btn-sm"
      onclick="glycoglyph.addTerminaltoChild(${i})">${f.name}</button>
    </li>
  `)
  })
}

export function addTerminaltoChild(i) {
  let terminal = terminals[i].sequence;
  childglycan.child = JSON.parse(glycantojson(terminal));
  $('#monocheck').html(terminal);
  $('#linkagecheck').html("<i>Add Linkage</i>")
}