//this file stores all the global variables for settings specific to application

var nameid = "cfg_name"; //id of the input field where the name will be written

//declare a global variable to store the child information
var childglycan = {
  "name": "",
  "linkage": "",
  "monosaccharide": "",
  "linknum": 0,
  "substituent": "",
  "children": []
};

glyd3render = false; //setting for d3glycanstructure.js

var trackname = []; //array which tracks the names for undo/redo
var tracknum = -1;

//templates holds the starter templates 
// these can be directly added as names so it is easy
var templates = [
  //N-glycans
  {
    name: "Chitobiose-core",
    structure: "GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core",
    structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-fuc",
    structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-bis",
    structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-bis-fuc",
    structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-hyb",
    structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-core-hyb-fuc",
    structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAc",
    type: "starter",
    subtype: "N"
  },
  {
    name: "N-oligoman",
    structure: "Mana1-2Mana1-6(Mana1-2Mana1-3)Mana1-6(Mana1-2Mana1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAc",
    type: "starter",
    subtype: "N"
  },

  //O-glycans
  {
    name: "Core-1",
    structure: "Galb1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-2",
    structure: "GlcNAcb1-6(Galb1-3)GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-3",
    structure: "GlcNAcb1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-4",
    structure: "GlcNAcb1-6(GlcNAcb1-3)GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-5",
    structure: "GalNAca1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-6",
    structure: "GlcNAcb1-6GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-7",
    structure: "GalNAca1-6GalNAc",
    type: "starter",
    subtype: "O"
  },
  {
    name: "Core-8",
    structure: "Gala1-3GalNAc",
    type: "starter",
    subtype: "O"
  },
  // {
  //   name: "",
  //   structure: "",
  //   type: "starter",
  //   subtype: "O"
  // },
];


var terminals = [
  {
    name: "Blood Group A",
    sequence: "GalNAca1-3(Fuca1-2)Gal",
    type: "antigen",
  },
  {
    name: "Blood Group B",
    sequence: "Galb1-3(Fuca1-2)Gal",
    type: "antigen",
  },
  {
    name: "Blood Group H",
    sequence: "Fuca1-2Gal",
    type: "antigen",
  },
  {
    name: "CAD Antigen",
    sequence: "Neu5Aca2-6(GalNAcb1-4(Neu5Aca2-3)Galb1-3)GalNAc",
    type: "antigen",
  },
  {
    name: "Forsmann Antigen",
    sequence: "GalNAca1-3GalNAcb1-3Gal",
    type: "antigen",
  },
  {
    name: "Galili Antigen",
    sequence: "Gala1-3Galb1-4GlcNAc",
    type: "antigen",
  },
  {
    name: "P antigen",
    sequence: "GalNAcb1-3Gala1-4Galb1-4Glc",
    type: "antigen",
  },
  {
    name: "Pk antigen",
    sequence: "Gala1-4Galb1-4Glc",
    type: "antigen",
  },
  {
    name: "SDA Antigen",
    sequence: "GalNAcb1-4(Neu5Aca2-3)Galb1-4GlcNAcb1-3Gal",
    type: "antigen",
  },
  {
    name: "High Mannose Terminals",
    sequence: "Mana1-2Man",
    type: "mannose",
  },
  {
    name: "LacDiNAc",
    sequence: "GalNAcb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Lactosamine",
    sequence: "Galb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Neo-Lactosamine",
    sequence: "Galb1-3GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Poly-Lactosamine",
    sequence: "Galb1-4GlcNAcb1-3Galb1-4GlcNAc",
    type: "lactosamine",
  },
  {
    name: "Lewis A",
    sequence: "Galb1-3(Fuca1-4)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis B",
    sequence: "Fuca1-2Galb1-3(Fuca1-4)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis C",
    sequence: "Galb1-3GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis D",
    sequence: "Fuca1-2Galb1-3GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis X",
    sequence: "Galb1-4(Fuca1-3)GlcNAc",
    type: "lewis",
  },
  {
    name: "Lewis Y",
    sequence: "Fuca1-2Galb1-4(Fuca1-3)GlcNAc",
    type: "lewis",
  },
  /*Template Object
  {
    name: "",
    sequence: "",
    type: "",
  },
  */
]

//create a list of monosaccharides
var monos = [
  'Glc', 'Man', 'Gal', 'Gul', 'Alt', 'All', 'Tal', 'Ido',
  'GlcNAc', 'ManNAc', 'GalNAc', 'GulNAc', 'AltNAc', 'AllNAc', 'TalNAc', 'IdoNAc',
  'GlcN', 'ManN', 'GalN', 'GulN', 'AltN', 'AllN', 'TalN', 'IdoN',
  'GlcA', 'ManA', 'GalA', 'GulA', 'AltA', 'AllA', 'TalA', 'IdoA',
  'Qui', 'Rha', '6dGul', '6dAlt', '6dTal', 'Fuc',
  'QuiNAc', 'RhaNAc', '6dAltNAc', '6dTalNAc', 'FucNAc',
  'Oli', 'Tyv', 'Abe', 'Par', 'Dig', 'Col',
  'Ara', 'Lyx', 'Xyl', 'Rib',
  'Kdn', 'Neu5Ac', 'Neu5Gc', 'Neu', 'Sia',
  'Pse', 'Leg', 'Aci', '4eLeg',
  'Bac', 'LDmanHep', 'Kdo', 'Dha', 'DDmanHep', 'MurNAc', 'MurNGc', 'Mur',
  'Api', 'Fru', 'Tag', 'Sor', 'Psi',
  'Hex', 'HexN', 'HexNAc'
];

var aminoacids = ['A', 'G', 'I', 'L', 'P', 'V', 'F', 'W', 'Y', 'D', 'E', 'R', 'H', 'K', 'S', 'T', 'C', 'M', 'N', 'Q'];



// variable holds GlycoCT monosaccharides list
// Adapted from SugarSketcher by Author:  Davide Alocci and Renaud Costa
// https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/io/glycoCT/MonosaccharideGlycoCT.js
var gctMonoList = {
  Hex: {
    glycoct: "HEX",
    transform: "",
    configdefault: "",
  },

  Glc: {
    glycoct: "glc-HEX",
    transform: "",
    configdefault: "d",
  },

  Man: {
    glycoct: "man-HEX",
    transform: "",
    configdefault: "d",
  },

  Gal: {
    glycoct: "gal-HEX",
    transform: "",
    configdefault: "d",
  },

  Gul: {
    glycoct: "gul-HEX",
    transform: "",
    configdefault: "d",
  },

  Alt: {
    glycoct: "alt-HEX",
    transform: "",
    configdefault: "l",
  },

  All: {
    glycoct: "all-HEX",
    transform: "",
    configdefault: "d",
  },

  Tal: {
    glycoct: "tal-HEX",
    transform: "",
    configdefault: "d",
  },

  Ara: {
    glycoct: "ara-PEN",
    transform: "",
    configdefault: "l",
  },

  Lyx: {
    glycoct: "lyx-PEN",
    transform: "",
    configdefault: "d",
  },

  Rib: {
    glycoct: "rib-PEN",
    transform: "",
    configdefault: "d",
  },

  Bac: {
    glycoct: "glc-HEX",
    transform: "|2:d|4:d|6:d",
    configdefault: "d",
  },

  Fuc: {
    glycoct: "gal-HEX",
    transform: "-1:5|6:d",
    configdefault: "l",
  },

  HexA: {
    glycoct: "HEX",
    transform: "|6:a",
    configdefault: "",
  },

  GlcA: {
    glycoct: "glc-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  ManA: {
    glycoct: "man-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  GalA: {
    glycoct: "gal-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  GulA: {
    glycoct: "gul-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  AltA: {
    glycoct: "alt-HEX",
    transform: "-1:5|6:a",
    configdefault: "l",
  },

  AllA: {
    glycoct: "all-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  TalA: {
    glycoct: "tal-HEX",
    transform: "-1:5|6:a",
    configdefault: "d",
  },

  Qui: {
    glycoct: "glc-HEX",
    transform: "-1:5|6:d",
    configdefault: "d",
  },

  dHex: {
    glycoct: "HEX",
    transform: "|6:d",
    configdefault: "",
  },

  Ido: {
    glycoct: "ido-HEX",
    transform: "",
    configdefault: "l",
  },

  IdoA: {
    glycoct: "ido-HEX",
    transform: "-1:5|6:a",
    configdefault: "l",
  },

  Pen: {
    glycoct: "PEN-1:4",
    transform: "",
    configdefault: "",
  },

  Rha: {
    glycoct: "man-HEX",
    transform: "|6:d",
    configdefault: "l",
  },

  SixdAlt: {
    glycoct: "alt-HEX",
    transform: "|6:d",
    configdefault: "l",
  },

  SixdTal: {
    glycoct: "tal-HEX",
    transform: "|6:d",
    configdefault: "d",
  },

  Xyl: {
    glycoct: "xyl-PEN",
    transform: "",
    configdefault: "d",
  },

  ddHex: {
    glycoct: "HEX",
    transform: "|2:d|6:d",
    configdefault: "",
  },

  Unknown: {
    glycoct: "unknown",
    transform: "",
    configdefault: "",
  },

  Oli: {
    glycoct: "PEN",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Tyv: {
    glycoct: "ara-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Abe: {
    glycoct: "dxyl-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Par: {
    glycoct: "rib-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Col: {
    glycoct: "lxyl-HEX",
    transform: "|3:d|6:d",
    configdefault: "",
  },

  Dig: {
    glycoct: "rib-HEX",
    transform: "|2:d|6:d",
    configdefault: "d",
  },

  Nonu: {
    glycoct: "NON",
    transform: "",
    configdefault: "",
  },

  Kdn: {
    glycoct: "gro-dgal-NON-2:6",
    transform: "|1:a|2:keto|3:d",
    configdefault: "d",
  },

  Kdo: {
    glycoct: "man-OCT-2:6",
    transform: "|1:a|2:keto|3:d",
    configdefault: "d",
  },

  Fru: {
    glycoct: "ara-HEX-2:5",
    transform: "|2:keto",
    configdefault: "d",
  },

  // GlycoCT not found
  Assigned: {
    glycoct: "assigned-PEN",
    transform: "",
    configdefault: "",
  },
  LDManHep: {
    glycoct: "ldmanhep-HEX",
    transform: "",
    configdefault: "",
  },

  DDManHep: {
    glycoct: "ddmanhep-HEX",
    transform: "",
    configdefault: "",
  },

  Dha: {
    glycoct: "dha-HEX",
    transform: "",
    configdefault: "",
  },

  Mur: {
    glycoct: "mur-HEX",
    transform: "",
    configdefault: "",
  },

  Sia: {
    glycoct: "sia-NON",
    transform: "",
    configdefault: "",
  },

  Api: {
    glycoct: "api-PEN",
    transform: "",
    configdefault: "l",
  },

  Tag: {
    glycoct: "tag-PEN",
    transform: "",
    configdefault: "d",
  },

  Sor: {
    glycoct: "sor-PEN",
    transform: "",
    configdefault: "l",
  },

  Psi: {
    glycoct: "psi-PEN",
    transform: "",
    configdefault: "d",
  }

};


// variable holds GlycoCT substituents
// Adapted from SugarSketcher by Author:  Davide Alocci
// https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/glycomics/dictionary/SubstituentType.js
var gctSubList = {
  NAcetyl: {
    glycoct: "n-acetyl"
  },
  Amino: {
    glycoct: "amino"
  },
  NGlycolyl: {
    glycoct: "n-glycolyl"
  },
  Methyl: {
    glycoct: "methyl"
  },
  Acetyl: {
    glycoct: "acetyl"
  },
  Sulfate: {
    glycoct: "sulfate"
  },
  Phosphate: {
    glycoct: "phosphate"
  },
  Bromo: {
    glycoct: 'bromo'
  },
  Chloro: {
    glycoct: 'chloro'
  },
  Ethyl: {
    glycoct: 'ethyl'
  },
  Ethanolamine: {
    glycoct: 'ethanolamine'
  },
  Fluoro: {
    glycoct: 'fluoro'
  },
  Formyl: {
    glycoct: 'formyl'
  },
  Hydroxymethyl: {
    glycoct: 'hydroxymethyl'
  },
  Imino: {
    glycoct: 'imino'
  },
  RLactate1: {
    glycoct: '(r)-lactate'
  },
  SLactate1: {
    glycoct: '(s)-lactate'
  },
  NAlanine: {
    glycoct: 'n-alanine'
  },
  NFormyl: {
    glycoct: 'n-formyl'
  },
  NMethyl: {
    glycoct: 'n-methyl'
  },
  NSuccinate: {
    glycoct: 'n-succinate'
  },
  NSulfate: {
    glycoct: 'n-sulfate'
  },
  NTrifluoroacetyl: {
    glycoct: 'n-trifluoroacetyl'
  },
  Nitrate: {
    glycoct: 'nitrate'
  },
  Pyruvate: {
    glycoct: 'pyruvate'
  },
  Thio: {
    glycoct: 'thio'
  },
  RPyruvate: {
    glycoct: '(r)-pyruvate'
  },
  SPyruvate: {
    glycoct: '(s)-pyruvate'
  },
  RLactate2: {
    glycoct: '(r)-lactate2'
  },
  SLactate2: {
    glycoct: '(s)-lactate2'
  },
  Unknown: {
    glycoct: 'unknown'
  }
};

//list of commonly used monosaccharides
var commonMonos = ["Glc", "Man", "Gal", "GlcNAc", "GalNAc", "Fuc", "Neu5Ac", "Neu5Gc", "Neu", "Xyl", "IdoA", "GlcA", "Unknown"];


// URL of the current application
var getUrl = window.location.href.split('/').slice(0,-1).join('/') + '/';

//load the css file into svgStyle
var svgStyle = '';
let fetchCSS = d3.text('/css/styles.css').then(function (d) {
    svgStyle = d;
});

// Get list of monosaccharides for which symbols are available
var svgarr = [];
let fetchSVG = d3.xml('/img/monos.svg').then(function (data) {
    svgarr = [].map.call(data.querySelectorAll("symbol"), function (symbol) {
        return {
            id: symbol.getAttribute("data-abbr"), //use the data-abbr to get id
            viewBox: symbol.getAttribute('viewBox'),
            innerhtml: symbol.innerHTML.replace(/\n|\t/g, '').trim(),
            fullname: symbol.getAttribute("data-shortname") //use the data-shortname to get the shortname
        };
    });
    // console.log(svgarr);
    return svgarr;
});