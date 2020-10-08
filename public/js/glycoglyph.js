//  v2.1.3 Copyright 2020 Akul Mehta
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.glycoglyph = {}));
}(this, (function (exports) { 'use strict';

  // This file is a dictionary of all monosaccharides with default configurations
  // TODO: check https://www.genome.jp/kegg/catalog/codes2.html to make sure the configuration and rings are correct
  let monosDict = [
    {
      "abbreviation": "Glc",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Man",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Gal",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Gul",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Alt",
      "configuration": "l",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "All",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Tal",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Ido",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "GlcNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "ManNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "GalNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "GulNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "AltNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "AllNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "TalNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "IdoNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 221.089937
    },
    {
      "abbreviation": "GlcN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "ManN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "GalN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "GulN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "AltN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "AllN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "TalN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "IdoN",
      "configuration": "d",
      "ring": "p",
      "mass": 179.079373
    },
    {
      "abbreviation": "GlcA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "ManA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "GalA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "GulA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "AltA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "AllA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "TalA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "IdoA",
      "configuration": "d",
      "ring": "p",
      "mass": 194.042653
    },
    {
      "abbreviation": "Qui",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "Rha",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "6dGul",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "6dAlt",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "6dTal",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "Fuc",
      "configuration": "d",
      "ring": "p",
      "mass": 164.068473
    },
    {
      "abbreviation": "QuiNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 205.095023
    },
    {
      "abbreviation": "RhaNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 205.095023
    },
    {
      "abbreviation": "6dAltNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 205.095023
    },
    {
      "abbreviation": "6dTalNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 205.095023
    },
    {
      "abbreviation": "FucNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 205.095023
    },
    {
      "abbreviation": "Oli",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Tyv",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Abe",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Par",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Dig",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Col",
      "configuration": "d",
      "ring": "p",
      "mass": 148.073559
    },
    {
      "abbreviation": "Ara",
      "configuration": "d",
      "ring": "p",
      "mass": 150.052823
    },
    {
      "abbreviation": "Lyx",
      "configuration": "d",
      "ring": "p",
      "mass": 150.052823
    },
    {
      "abbreviation": "Xyl",
      "configuration": "d",
      "ring": "p",
      "mass": 150.052823
    },
    {
      "abbreviation": "Rib",
      "configuration": "d",
      "ring": "p",
      "mass": 150.052823
    },
    {
      "abbreviation": "Kdn",
      "configuration": "d",
      "ring": "p",
      "mass": 268.079432
    },
    {
      "abbreviation": "Neu5Ac",
      "configuration": "d",
      "ring": "p",
      "mass": 309.105981
    },
    {
      "abbreviation": "Neu5Gc",
      "configuration": "d",
      "ring": "p",
      "mass": 325.100896
    },
    {
      "abbreviation": "Neu",
      "configuration": "d",
      "ring": "p",
      "mass": 267.095417
    },
    {
      "abbreviation": "Sia",
      "configuration": "d",
      "ring": "p"
    },
    {
      "abbreviation": "Pse",
      "configuration": "d",
      "ring": "p",
      "mass": 250.116486
    },
    {
      "abbreviation": "Leg",
      "configuration": "d",
      "ring": "p",
      "mass": 250.116486
    },
    {
      "abbreviation": "Aci",
      "configuration": "d",
      "ring": "p",
      "mass": 250.116486
    },
    {
      "abbreviation": "4eLeg",
      "configuration": "d",
      "ring": "p",
      "mass": 250.116486
    },
    {
      "abbreviation": "Bac",
      "configuration": "d",
      "ring": "p",
      "mass": 162.100442
    },
    {
      "abbreviation": "LDmanHep",
      "configuration": "d",
      "ring": "p",
      "mass": 210.073953
    },
    {
      "abbreviation": "Kdo",
      "configuration": "d",
      "ring": "p",
      "mass": 238.068867
    },
    {
      "abbreviation": "Dha",
      "configuration": "d",
      "ring": "p",
      "mass": 222.037567
    },
    {
      "abbreviation": "DDmanHep",
      "configuration": "d",
      "ring": "p",
      "mass": 210.073953
    },
    {
      "abbreviation": "MurNAc",
      "configuration": "d",
      "ring": "p",
      "mass": 293.111067
    },
    {
      "abbreviation": "MurNGc",
      "configuration": "d",
      "ring": "p",
      "mass": 309.105981
    },
    {
      "abbreviation": "Mur",
      "configuration": "d",
      "ring": "p",
      "mass": 251.100502
    },
    {
      "abbreviation": "Api",
      "configuration": "d",
      "ring": "p",
      "mass": 150.052823
    },
    {
      "abbreviation": "Fru",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Tag",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Sor",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Psi",
      "configuration": "d",
      "ring": "p",
      "mass": 180.063388
    },
    {
      "abbreviation": "Hex",
      "configuration": "d",
      "ring": "p"
    },
    {
      "abbreviation": "HexN",
      "configuration": "d",
      "ring": "p"
    },
    {
      "abbreviation": "HexNAc",
      "configuration": "d",
      "ring": "p"
    },
    {
      "abbreviation": "HexA",
      "configuration": "d",
      "ring": "p"
    }
  ];

  var domElements = {
    nameInputID: 'cfg_name',
    glycoCTID: 'glycoCT',
    preparedSubstituentSpan: 'subscheck',
    preparedMonosaccharideSpan: 'monocheck',
    preparedLinkageSpan: 'linkagecheck',
    undodiv: 'undodiv',
    redodiv: 'redodiv',
    multimode: 'multimode',
    glytoucanTableDiv: 'gtcid',
    commonMonoList: 'commonmonolist',
    fullMonoList: 'fullmonolist',
    parametersdiv: 'calculated_parametersdiv'
  };

  var filePaths = {
    monosSVG: `${window.location.protocol}//${window.location.host}/assets/images/monos.svg`,
    css: `${window.location.protocol}//${window.location.host}/css/glycoglyph.css`,
    images: `${window.location.protocol}//${window.location.host}/assets/images/`
  };


  //declare a global variable to store the child information
  var childglycan = {
    child: {
      "name": "",
      "linkage": "",
      "monosaccharide": "",
      "linknum": 0,
      "substituent": "",
      "children": []
    }
  };


  let drawingSettings = {
    width: 320,
    height: 465,
    editingMode: true,
    orientation: 'bottom-to-top',
    drawdivID: 'd3glycanstruc',
    symbsize: 25,
    drawingareachoice: 'fixglycansize',
    fucopt: 'fucdown',
    linkageVisible: true,
    linkRotate: true,
    linkAbbr: false,
    linkFontSize: 12,
    margin: {
      top: 40,
      right: 40,
      bottom: 40,
      left: 40,
    },
    drawingSettingsDivID: 'glycoglyphDrawingSettings',
    userOverrideOptions: true,
    
  };

  var dynamicDrawingSettings = {
    multimode: false
  };

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
    'Hex', 'HexN', 'HexNAc', 'HexA'
  ];

  //list of commonly used monosaccharides
  var commonMonos = ["Glc", "Man", "Gal", "GlcNAc", "GalNAc", "Fuc", "Neu5Ac", "Neu5Gc", "Neu", "Xyl", "IdoA", "GlcA", "Unknown"];

  //templates holds the starter templates 
  // these can be directly added as names so it is easy
  var templates = [
    //N-glycans
    {
      name: "Chitobiose-core",
      structure: "GlcNAcb1-4GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core",
      structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core-fuc",
      structure: "Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core-bis",
      structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core-bis-fuc",
      structure: "Mana1-6(GlcNAcb1-4)(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core-hyb",
      structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-core-hyb-fuc",
      structure: "Mana1-6(Mana1-3)Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4(Fuca1-6)GlcNAcb1",
      type: "starter",
      subtype: "N"
    },
    {
      name: "N-oligoman",
      structure: "Mana1-2Mana1-6(Mana1-2Mana1-3)Mana1-6(Mana1-2Mana1-2Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1",
      type: "starter",
      subtype: "N"
    },

    //O-glycans
    {
      name: "Core-1",
      structure: "Galb1-3GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-2",
      structure: "GlcNAcb1-6(Galb1-3)GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-3",
      structure: "GlcNAcb1-3GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-4",
      structure: "GlcNAcb1-6(GlcNAcb1-3)GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-5",
      structure: "GalNAca1-3GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-6",
      structure: "GlcNAcb1-6GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-7",
      structure: "GalNAca1-6GalNAca1",
      type: "starter",
      subtype: "O"
    },
    {
      name: "Core-8",
      structure: "Gala1-3GalNAca1",
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
  ];




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
      transform: "-1:5|6:d",
      configdefault: "l",
    },

    "6dAlt": {
      glycoct: "alt-HEX",
      transform: "-1:5|6:d",
      configdefault: "l",
    },

    "6dTal": {
      glycoct: "tal-HEX",
      transform: "-1:5|6:d",
      configdefault: "d",
    },

    "6dGul": {
      glycoct: "gul-HEX",
      transform: "-1:5|6:d",
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

  async function setMonosSVGPath(newPath, pathType) {
    filePaths.monosSVG = setPath(newPath,pathType);
    return
  }

  async function setCSSPath(newPath, pathType) {
    filePaths.css = setPath(newPath,pathType);
    return;
  }

  async function setImagesPath(newPath, pathType) {
    filePaths.images = setPath(newPath,pathType);
    return;
  }

  function setPath (newPath, pathType) {
    if (!pathType || pathType === "absolute") {
      return `${window.location.protocol}//${window.location.host}${newPath}`;
    }
    if (pathType === "relative") {
      return newPath;
    }
  }

  //takes the CFG glycan name and converts it into a glycan tree object and returns it as json
  function glycantojson(glycanname) {
    // console.clear();
    // MOD because this is a a builder we do not just say NoGlycan
    //check if glycanname has any monosaccharides
    // if (!monos.some(function (v) { return glycanname.search(v) > -1 })) {
    //   glycanname = 'NoGlycan';
    // }

    //remove whitespace between string if any
    glycanname = glycanname.replace(/ /g, '');

    //replace sulfated position brackets
    glycanname = glycanname.replace(/\((?=\d[a-zA-Z]\))/g, '[');
    glycanname = glycanname.replace(/(\[\d[a-zA-Z])\)/g, '$1]');

    //clean up GlcN(Gc)
    if (glycanname.indexOf('GlcN(Gc)') > -1) {
      glycanname = glycanname.replace(/GlcN\(Gc\)/, 'GlcNGc');
    }

    var glynamearray = glystrtoarray(glycanname);

    function glystrtoarray(str) {
      //split the glycannamenow to the array
      var arr = str.split(/(\)|\(|-[\d,\?]|-(?=[a-zA-z]))/g).filter(function (n) {
        return n !== '';
      });

      //clean up the array to add the linkages back to the glycan
      var newarr = [];
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1].search(/\-[\d,\?]/) > -1) {
          newarr.push(arr[i] + arr[i + 1]);
        } else if (arr[i].search(/\-/) < 0) {
          newarr.push(arr[i]);
        }
      }
      //push the last value of arr
      newarr.push(arr[arr.length - 1]);
      return newarr;
    }


    var glyjson = JSON.stringify(parseTree(glynamearray), 0, 2);

    // Answer from stackoverflow question answered by ryeballar modified for performance
    // https://stackoverflow.com/questions/50673284/delimited-text-to-nested-javascript-object-json
    function parseTree(arr) {
      return arr.reduce(parseTreeReducer, [])[0];
    }

    function parseTreeReducer(array, ch, idx, src) {
      // console.log({array, ch, src, idx});
      let indexBracket = array.lastIndexOf('(');
      if (ch === `(`) {
        // is it an open bracket?
        // store it in the array stack!

        array.push(ch);
      } else if (ch === `)`) {
        // is it a close bracket?
        // remove the last open bracket
        // this prepares the nodes after the open bracket index
        // to be the children of the next node

        array.splice(indexBracket, 1);
      } else if (ch !== '-') {
        // make sure to ignore '-' key

        // separate the linkage, monosaccharide, subsituents information
        var link, mono, sub, linknum;
        var chnosub = ch.substring(ch.lastIndexOf(']') + 1, ch.length); //name without substituents like sulfates
        if (chnosub != ch) {
          sub = ch.replace(chnosub, ''); //get the substituent information
        }
        //to get linkage information countdown from the length of the chnosub till the string matches to one of the monos
        //when you have the index for that (i), you can use that to separate the linkage from the monosaccharide
        for (let i = 0; i < chnosub.length; i++) {
          if (monos.includes(chnosub.substring(0, (chnosub.length - i))) === true) {
            link = chnosub.substring((chnosub.length - i), chnosub.length);
            linknum = +link.substr(-1);
            mono = chnosub.substring(0, (chnosub.length - i));
            break;
          }
        }

        //special cases
        //Case 1: Neu5,9Ac
        if (ch.search(/Neu5\,9Ac2?/g) > -1) {
          mono = "Neu5Ac";
          sub = '[9Ac]';
          link = ch.replace(/Neu5\,9Ac2?/g, '');
          linknum = +link.substr(-1);
        }

        if (ch.search(/(GlcNGc)|(GalNGc)|(ManNGc)/g) > -1) {
          mono = ch.replace(/Gc/g, '');
          sub = '[2Gc]';
          link = ch.replace(/(GlcNGc)|(GalNGc)|(ManNGc)/g, '');
          linknum = +link.substr(-1);
        }

        //end of special cases

        //add default values
        if (link == undefined) { link = ""; }
        if (mono == undefined) { mono = ""; }
        if (sub == undefined) { sub = ""; }
        if (linknum == undefined) { linknum = 0; }

        var anomer = link.charAt(0);
        if (/^\d+$/.test(anomer)) {
          // anomer is a digit
          anomer = '?';
        }
        if (/\-$/.test(link)) {
          // link has hyphen at the end
          link = link.replace(/\-$/, '');
        }

        // push the node in the array stack
        array.push({
          name: ch, // name
          linkage: link, //add the linkage information
          monosaccharide: mono, //monosaccharide
          substituent: sub, //substituent
          linknum: linknum, //linkage number
          anomer: anomer, //anomeric configuration of sugar
          uniqueNodeID: idx, //use the parsetreereducer index as the uniqueNodeID

          // ensure that we only get the nodes that are after the
          // last open bracket from the array stack and remove them.
          // These removed nodes will be assigned as children for
          // this current node
          children: array
            .splice(
              // make sure we don't delete the open bracket
              indexBracket + 1,
              // only remove items beyond the open bracket index
              array.length - indexBracket - 1
            )
            .reverse(), // reverse to represent the expected output (optional!)
        });
      }
      // return the array stack
      return array;
    }

    // console.log(glyjson); //logs the entire glycan as json
    return glyjson;
  }

  //function fixes order of children based on linker
  function sortchildren(obj, reverse = false) {
    if (obj.children && obj.data.children.length > 0) {

      if (reverse) {
        obj.children.sort(function (x, y) {
          return d3.descending(x.data.linknum, y.data.linknum);
        });
      } else {
        obj.children.sort(function (x, y) {
          return d3.ascending(x.data.linknum, y.data.linknum);
        });
      }
      

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
        obj.children.sort ((x,y) => x.data.monosaccharide == "Fuc" ? -1 : y.data.monosaccharide == "Fuc" ? 1 : 0);
      }

      //recurse all children
      obj.children.forEach(e => {
        sortchildren(e, reverse);
      });
    }

    return obj;
  }

  //This file contains code which will add the information to an object to be appended to the parent node
  //It takes user input for processing

  //function to reset the childglycan
  function resetchildglycan() {
    childglycan.child = {
      "name": "",
      "linkage": "",
      "monosaccharide": "",
      "linknum": 0,
      "substituent": "",
      "children": []
    };

    //clear out the monosachharide selection information from the DOM
    $('#' + domElements.preparedSubstituentSpan).empty();
    $('#' + domElements.preparedMonosaccharideSpan).empty();
    $('#' + domElements.preparedLinkageSpan).empty();
  }


  function addSub() {
    //get details from the forms
    var subposlist = Array.from(document.querySelectorAll('#subposlist input'));
    var subpos = subposlist.length && subposlist.find(r => r.checked).value;

    var subtypelist = Array.from(document.querySelectorAll('#subtypelist input'));
    var subtype = subtypelist.length && subtypelist.find(r => r.checked).value;
    if (subtype === "other") {
      subtype = document.getElementById("substituentother").value;
    }
    var subvalue = subpos + subtype;
    var sub = '[' + subvalue + ']';
    
    $('#' + domElements.preparedSubstituentSpan).append(sub); // add linkage to the childglycan object
    childglycan.child.substituent = childglycan.child.substituent + sub; //because more than one substituent can be added
    makechildglycanname();
  }

  function clearSub() {
    $('#' + domElements.preparedSubstituentSpan).empty();
    childglycan.child.substituent = "";
    makechildglycanname();
  }


  //function on what to do when monosaccharide is selected
  function monoselect(mono) {
    if (mono === "Unknown") {
      var node = prompt("Please enter name for the node", "");
      if (node != null) {
        mono = node;
      }
      else {
        alert('Error: Name for the node was blank - did not add the node');
        return;
      }
    }
    childglycan.child.monosaccharide = mono;  // add/overwrite monosaccharide to the childglycan object
    childglycan.child.children = [];
    $('#' + domElements.preparedMonosaccharideSpan).empty().append(mono);
    makechildglycanname();
  }

  function addLinkage() {
    //get details from the forms
    var orientlist = Array.from(document.querySelectorAll('#orientlist input'));
    var orient = orientlist.length && orientlist.find(r => r.checked).value;

    var anoposlist = Array.from(document.querySelectorAll('#anoposlist input'));
    var anopos = anoposlist.length && anoposlist.find(r => r.checked).value;

    var acclist = Array.from(document.querySelectorAll('#acclist input'));
    var acc = acclist.length && acclist.find(r => r.checked).value;

    if (acc == '?') {
      childglycan.child.linknum = 0;
    } else {
      childglycan.child.linknum = +acc;
    }
    var linkage = orient + anopos + '-' + acc;

    $('#' + domElements.preparedLinkageSpan).empty().append(linkage);
    childglycan.child.linkage = linkage; // add/overwrite linkage to the childglycan object
    makechildglycanname();

  }

  function makechildglycanname() {

    childglycan.child.name = childglycan.child.substituent + childglycan.child.monosaccharide + childglycan.child.linkage;
    // console.log(childglycan);

  }

  //Function takes glycantojson like object passed into d3.hierarchy
  function objecttoname(obj, bindex) {

    //write down the name
    var name = '';
    //console.log(obj);
    if (obj.data.monosaccharide != "" && obj.data.linkage != "") { //ideal conditions both mono and linkage present
      if (obj.data.substituent === undefined || obj.data.substituent === "[]") { obj.data.substituent = "";}
      if (obj.data.linkage && obj.data.linkage.search('-') === -1 && obj.depth > 0) {
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
    
    if (obj.data.children && obj.data.children.length > 0) {
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

  //function takes the cfg name from the input field and outputs the GlycoCT
  function cfgToGlycoCT() {
    var cfgname = document.getElementById(domElements.nameInputID).value;
    if (cfgname === '') {
      alert('No name typed. Please check Name above.');
      return;
    }
    var glycanjson = glycantojson(cfgname);
    var glycoCT = jsonToGlycoCT(glycanjson).replace(/\n/g, "<br>");

    document.getElementById(domElements.glycoCTID).innerHTML = glycoCT;
  }

  //takes the glycan tree JSON and converts it to GlycoCT
  function jsonToGlycoCT(json) {
    var glycoCT = 'Hello';
    var glycan = JSON.parse(json); //parse the json into the glycan obj.
    glycan = d3.hierarchy(glycan);
    var RES = 'RES\n';
    var REScount = 1;
    var LIN = 'LIN\n';
    var LINcount = 1;
    // console.log(glycan);

    // This function recurses through the glycan object to mutate the RES and LIN variables above
    // to generate the RES and LIN fields of the GlycoCT
    function recurseToGlycoCT(obj, parentRES = 1) {

      var data = obj.data;
      var thismono = data.monosaccharide;
      var parentCount = REScount; //This keeps a track of the parent residue for linkages.
      // Passing in the parentCount into the recursive function as parentRES helps to keep track of what is attached
      // to what in case of branching.
      var subs = splitSubs(data.substituent).pop();

      //assign anomeric assignment for the basetype
      var thisanomer = "";
      // console.log(data.anomer);
      if (data.anomer == undefined) {
        thisanomer = "x";
      } else if (data.anomer === "" || data.anomer === "-") {
        thisanomer = "o";
      } else if (data.anomer == "?") {
        thisanomer = "x";
      } else {
        thisanomer = data.anomer;
      }

      // Add the residue and substituents
      var strippedmono = '';

      if (thismono.indexOf('NAc') > -1) {
        strippedmono = thismono.split('NAc')[0];
        subs.unshift("NAc");
      } else if (thismono.indexOf('NGc') > -1) {
        strippedmono = thismono.split('NGc')[0];
        subs.unshift("NGc");
      } else if (thismono === 'Neu5Ac') {
        strippedmono = "Kdn";
        subs.unshift("5Ac");
      } else if (thismono === 'Neu5Gc') {
        strippedmono = "Kdn";
        subs.unshift("5Gc");
      } 
      else if (thismono.indexOf('N') > -1 && gctMonoList.hasOwnProperty(thismono.replace(/N/g, ''))) {
        //special case for GlcNGc/GalNGc/ManNGc
        if (thismono.search(/(GlcN)|(GalN)|(ManN)/g) > -1 && subs.includes('2Gc')) {
          strippedmono = thismono.replace(/N/g, '');
          subs = subs.map(m => {
            if (m == "2Gc") {
              m = "NGc";
            }
            return m;
          }
          );
        } else {
          strippedmono = thismono.replace(/N/g, '');
          subs.unshift("N");
        }

      } // add other conditions to strip the substituents from the base sugar
      else {
        strippedmono = thismono;
      }


      var type = getRingType(thismono, thisanomer);

      // start writing out the name
      //console.log(strippedmono);
      // Start with the RES portion of the parent monosaccharide
      if (gctMonoList.hasOwnProperty(strippedmono)) {
        //Check if gct stripped mono has a transform, if not append the type and append to RES                                                                                        
        if (gctMonoList[strippedmono].transform == "") {
          RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + '-' + type + gctMonoList[strippedmono].transform;
          // //concatenate the ring begin and end values to the RES
          // RES += type
          if (thisanomer === "o") {
            RES += '|1:aldi';
          }
        }
        //for cases with transforms in the gctMonoList
        else {
          if (thisanomer == "o"
            //&& gctMonoList[strippedmono].transform.search(/\-\d\:\d\|\d\:\w/g) > -1
          ) {
            RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct;
            RES += '-0:0' + gctMonoList[strippedmono].transform.replace(/\-\d\:\d/g, '') + '|1:aldi';
          } else {
            RES += REScount + 'b:' + thisanomer + "-" + gctMonoList[strippedmono].configdefault + gctMonoList[strippedmono].glycoct + gctMonoList[strippedmono].transform;
          }
        }

        RES += "\n";
        REScount++;
      }


      // Add the Linkage of the node to the parentRes
      if (data.linkage !== '' && data.linkage !== "?" && parentCount !== 1) {
        var link = data.linkage;
        //e.g. for a1-3 for RES 1 and 2:     1:1o(3+1)2d
        var parentAttachmentPos = link.charAt(link.length - 1),
          childAttachmentPos = link.charAt(link.indexOf('-') - 1);

        if (parentAttachmentPos === "?") { parentAttachmentPos = "-1"; }      if (childAttachmentPos === "?") { childAttachmentPos = "1"; }      LIN += `${LINcount}:${parentRES}o(${parentAttachmentPos}+${childAttachmentPos})${parentCount}d\n`;
        LINcount++;
      }


      //Add substituents
      subs = subs.filter(f => f !== "");
      subs.forEach((s) => {
        // console.log(s);
        var position, substituent;
        switch (true) {
          case (s === "NAc"):
            position = 2;
            substituent = "n-acetyl";
            break;
          case (s === "NGc"):
            position = 2;
            substituent = "n-glycolyl";
            break;
          case (s.indexOf("Ac") > -1):
            position = s.split(/(?!\d)/g)[0];
            // console.log(position);
            substituent = "acetyl";
            //special case
            if (thismono === "Neu5Ac" && position == 5) { substituent = "n-acetyl"; }          break;
          case (s.indexOf("Gc") > -1):
            position = s.split(/(?!\d)/g)[0];
            substituent = "glycolyl";
            //special case
            if (thismono === "Neu5Gc") { substituent = "n-glycolyl"; }          break;
          case (s.indexOf("Me") > -1):
            position = s.split(/(?!\d)/g)[0];
            substituent = "methyl";
            break;
          case (s.indexOf("N") > -1):
            position = 2;
            substituent = "amino";
            break;
          case (s.indexOf("S") > -1):
            position = s.split(/(?!\d)/g)[0];
            substituent = "sulfate";
            break;
          case (s.indexOf("P") > -1):
            position = s.split(/(?!\d)/g)[0];
            substituent = "phosphate";
            break;
          default:
            position = s.charAt(0);
            substituent = s.split(/(?!\d)/g)[1];
        }
        RES += `${REScount}s:${substituent}\n`;
        LIN += `${LINcount}:${parentCount}d(${position}+1)${REScount}n\n`;
        LINcount++;
        REScount++;
      });

      //all counters must move before this

      if (obj.data.children.length > 0) {
        obj.children.forEach(a => recurseToGlycoCT(a, parentCount)); //pass the REScount as the parent sugar number for the LIN
      }


      return obj;
    }

    recurseToGlycoCT(glycan);

    if (LIN !== "LIN\n") {
      glycoCT = RES + LIN;
    } else {
      glycoCT = RES;
    }

    glycoCT = glycoCT.trim();
    return glycoCT;
  }




  function splitSubs(str) {
    if (subs === "") return [];
    var subs = [];
    //replace the brackets with "," and then split it
    subs = str.replace(/\[(?=[0-9a-zA-Z])/g, '').replace(/\](?=[0-9a-zA-Z])/g, ',').replace(']', '');
    subs = subs.split(/,/g);
    if (typeof subs === "object") {
      subs = [subs];
    }
    return subs;

  }


  //function decides whether ring is pyranose, furanose or open
  function getRingType(mono, anomer) {
    // if ring is open then just return open
    if (anomer === "o") {
      return "0:0";
    }

    //list of pyranose type 
    var pyranose = `Gal,Glc,Man,GalNAc,GlcNAc,ManNAc,Fuc,Neu5Ac,Neu5Gc,Neu,Sia,Xyl,IdoA,GlcA,
  GalA,GlcA,ManA,GlcN,GalN,ManN,Hex,HexNAc,HexA,HexN,Rha
  `;
    var furanose = `Rib,Api,Ara`;

    pyranose = pyranose.split(/,/g);
    furanose = furanose.split(/,/g);

    if (pyranose.includes(mono)) {
      return '1:5'
    }

    if (furanose.includes(mono)) {
      return '1:4'
    }

    return 'x:x'
  }

  exports.tracknum = -1;
  exports.trackname = []; //array which tracks the names for undo/redo

  function tracknames(name) {
    if (exports.tracknum > -1) {
      $(`#${domElements.undodiv}`).removeClass('hide').addClass('show');
    }
    if (exports.trackname[exports.tracknum] == name) {
      return;
    }
    exports.tracknum++;
    exports.trackname[exports.tracknum] = name; //push new name in position of the tracknum
    exports.trackname = exports.trackname.filter((d,i) => i <= exports.tracknum);

    //hide the redo button 
    if (exports.tracknum < exports.trackname.length){
      $(`#${domElements.redodiv}`).addClass('hide').removeClass('show');
    }

  }

  function undo() {
    if (exports.tracknum == 0) {
      return;
    }
    var nameinput = document.getElementById(domElements.nameInputID);
    exports.tracknum--;
    if (exports.trackname[exports.tracknum] != undefined) {
      nameinput.value = exports.trackname[exports.tracknum];
      if (nameinput.value != "") {
        d3glycanstructure(nameinput.value);
        cfgToGlycoCT();
      } else {
        $(`#${drawingSettings.drawdivID}`).empty();
        document.getElementById(domElements.glycoCTID).innerHTML = '';
      }
    }
    if (exports.tracknum === 0) {
      //hide the undo button
      $(`#${domElements.undodiv}`).addClass('hide').removeClass('show');
    }
    if (exports.tracknum < exports.trackname.length) {
      $(`#${domElements.redodiv}`).removeClass('hide').addClass('show');
    }

  }

  function redo() {
    exports.tracknum++;
    if (exports.tracknum == exports.trackname.length) { 
      return;}
    var nameinput = document.getElementById(domElements.nameInputID);

    if (exports.trackname[exports.tracknum] != undefined) {
      nameinput.value = exports.trackname[exports.tracknum];
      if (nameinput.value != "") {
        d3glycanstructure(nameinput.value);
        cfgToGlycoCT();
      } else {
        $(`#${drawingSettings.drawdivID}`).empty();
        document.getElementById(domElements.glycoCTID).innerHTML = '';
      }
    }
    if (exports.tracknum === exports.trackname.length-1){
      $(`#${domElements.redodiv}`).addClass('hide').removeClass('show');
    }
    if (exports.tracknum < exports.trackname.length) {
      $(`#${domElements.undodiv}`).removeClass('hide').addClass('show');
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
    document.getElementById(domElements.nameInputID).value = newname; // output the name to the input field
    d3glycanstructure(newname);

    //update glycoCT
    cfgToGlycoCT();
  }

  function addmono(path, multiple) {
    // check for childglycan having sufficient information
    if (childglycan.child.monosaccharide == "") {
      alert('No monosaccharide selected. \n\nPlease select a monosaccharide to add.');
      resetchildglycan();
      $(`#${domElements.multimode}`).empty(); // remove message that multimode is on
      return;
    }
    if (childglycan.child.linkage === "") {
      childglycan.child.linkage = "??-?";
      // alert("Linkage information for the monosaccharide has not been added. \n\nPlease Add Linkage information.");
      // return;
    }

    //get the name from the name div and create the object
    var name = document.getElementById(domElements.nameInputID).value;
    var nameobj = JSON.parse(glycantojson(name));

    //create a recursive function to traverse into the nameobj to the parentnode using the path
    var pathcount = 0;
    var duplicatelinknum = false;
    var overrideduplicate = false;
    function recurse(obj) {
      if (obj.name === path[pathcount].data.name) {
        if (pathcount < path.length - 1) {
          pathcount++;
          var index = obj.children.findIndex((e) => (e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID));
          recurse(obj.children[index]);
        } else {

          //check if child glycan has same linkage as another sibling and if so warn the user.
          obj.children.forEach(a => {
            if (a.linknum == childglycan.child.linknum) {
              duplicatelinknum = true;
              alert('You are trying to add a node to a position which is occupied. \nTwo nodes cannot have same linkage acceptor position. \nPlease check the linkages.');

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
            obj.children.push(childglycan.child);
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

  function addfirstmono() {
    let nameobj = childglycan.child;
    //
    if (nameobj.linkage === "") {
      let link = prompt(`You have not added any linkage for the first monosaccharide.
    \nThis will be treated as an open ring. If this is what you desire leave the field below blank and press OK.
    \nTo indicate a closed ring please type in the linkage information: 
    \nFor example:
    \n"??" if linkage position is unknown in both anomeric configuratio and position or 
    \n"?1" where 1 indicates the position number and can be replaced with the position you desire.  or
    \n"b1" where b indicates the anomeric configuration and 1 indicates the position.
    `, "");
      if (link == null || link == "") {
        nameobj.linkage = "";
      } else {
        nameobj.linkage = link;
      }
    }else {
      nameobj.linkage = nameobj.linkage.split(/\-/g)[0];
    }
    nameobj.name = nameobj.substituent + nameobj.monosaccharide + nameobj.linkage; //recreate the name
    outputname(nameobj);
    //at the end reset the global variable childglycan if it was pushed
    if (!drawingSettings.multimode) {
      resetchildglycan(); //function from addinfo.js
    }
  }

  function replacemono(path, multiple) {
    //if first node just remove the svg to start fresh
    if (path.length == 1) {
      outputname(childglycan.child);
      resetchildglycan();
      return;
    }

    if (childglycan.child.monosaccharide == "" && childglycan.child.linkage == "" && childglycan.child.substituent == ""){
      alert("No replacement criteria selected. Please select what would you like to replace with.");
      return;
    }
    //get the name from the name div and create the object
    var name = document.getElementById(domElements.nameInputID).value;
    var nameobj = JSON.parse(glycantojson(name));

    //create a recursive function to traverse into the nameobj to the parentnode using the path
    var pathcount = 0;
    function recurse(obj) {
      if (obj.name === path[pathcount].data.name) {
        if (pathcount < path.length - 2) {
          pathcount++;
          var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID);
          recurse(obj.children[index]);
        } else {
          var index = obj.children.findIndex((e) => e.name === path[pathcount + 1].data.name);
          if (childglycan.child.linkage != "") {
            var linkindex = obj.children.findIndex((e) => e.linknum === childglycan.child.linknum);
            if (linkindex > -1 && linkindex != index) {
              alert ("Two nodes cannot have same linkage position. Please check linkages.");
                return;
            }
            obj.children[index].linkage = childglycan.child.linkage;
            obj.children[index].linknum = childglycan.child.linknum;
          }
          if (childglycan.child.monosaccharide != "") {
            obj.children[index].monosaccharide = childglycan.child.monosaccharide;
          }
          if (childglycan.child.substituent != "") {
            obj.children[index].substituent = childglycan.child.substituent;
          }else if (childglycan.child.substituent == "[]") {
            obj.children[index].substituent = "";
          }

          obj.children[index].name = obj.children[index].substituent + obj.children[index].monosaccharide + obj.children[index].linkage;


        }
      }
      return obj;
    }

    //use above recursive function to go to the parentnode selected and delete the childglycan there
    recurse(nameobj);

    outputname(nameobj); //function from addmono.js

    if (multiple === false){
      resetchildglycan(); //function from addinfo.js
    }

  }

  function deletemono(path) {
    //if first node just remove the svg to start fresh
    if (path.length == 1) {
      document.getElementById(domElements.nameInputID).value = "";
      $("#d3glycanstruc").empty();
      $("#glycoCT").html("");
      return;
    }
    //get the name from the name div and create the object
    var name = document.getElementById(domElements.nameInputID).value;
    var nameobj = JSON.parse(glycantojson(name));

    //create a recursive function to traverse into the nameobj to the parentnode using the path
    var pathcount = 0;
    function recurse(obj) {
      if (obj.name === path[pathcount].data.name) {
        if (pathcount < path.length - 2) {
          pathcount++;
          var index = obj.children.findIndex((e) => e.name === path[pathcount].data.name && e.uniqueNodeID === path[pathcount].data.uniqueNodeID);
          recurse(obj.children[index]);
        } else {
          var index = obj.children.findIndex((e) => e.name === path[pathcount+1].data.name && e.uniqueNodeID === path[pathcount+1].data.uniqueNodeID);
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

  //Draws the structure
  function d3glycanstructure(glycanname, options) {
    //MOD: this version of d3glycanstructure is incapable of drawing glycopeptides
    // // aminoacids.some(function (v) { return glycanname.search(v) > -1 }) // check for aminoacids
    // if (glycanname.search(/(\{)|(\})/g) > -1) {
    //   gpdraw(glycanname, drawdivID);
    //   return;
    // }

    //default configurations for drawing
    let configuration = JSON.parse(JSON.stringify(drawingSettings)); //deep copy the object so as to not mutate parent drawingSettings

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
    } else if (configuration.drawingareachoice === 'fixglycansize' && depth < 9) {
      if (configuration.orientation == 'right-to-left') {
        width = 50 * depth;
      } else {
        height = 50 * depth;
      }
    } else if (configuration.drawingareachoice === 'fixglycansize' && depth >= 9) {
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
    d3.select(`#${configuration.drawdivID}sub`).remove();
    //    d3.select('#' + drawdivID).select('.refreshremove').remove();

    if (configuration.orientation === "bottom-to-top") {
      d3.select(`#${configuration.drawdivID}`)
        .style('flex-direction', 'column-reverse');
    } else {
      d3.select(`#${configuration.drawdivID}`)
        .style('flex-direction', 'row-reverse');
    }

    //create a div to draw the glycans
    var div = d3
      .select('#' + configuration.drawdivID)
      .append('div')
      .attr('id', `${configuration.drawdivID}sub`);



    var svg = d3
      .select(`#${configuration.drawdivID}sub`)
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
      .attr('d', function (d) {
        return (
          'M' + o.x(d) + ',' + o.y(d) + 'L' + o.x(d.parent) + ',' + o.y(d.parent)
        );
      })
      .attr('stroke-width', 2)
      .attr('stroke', 'black');

    // Create the node groups.
    var node = svg
      .selectAll('.node')
      .data(nodes.descendants())
      .enter()
      .append('g')
      .attr('transform', function (d) {
        return rotateFuc(d, o, configuration);
      });


    let symbol = node
      .append('use')
      .attr('xlink:href', function (d, i) { return drawsymbol(d, i, 'glycan') })
      .attr('x', -configuration.symbsize / 2)
      .attr('y', -configuration.symbsize / 2)
      .attr('height', configuration.symbsize) //important for firefox
      .attr('width', configuration.symbsize)
      .attr('class', 'symbol');

    if (configuration.editingMode === true) {
      symbol.on('click', function (d) {
        var path = nodes.path(d);
        var modelist = Array.from(document.querySelectorAll('#modelist input'));
        var mode = modelist.length && modelist.find(r => r.checked).value;
        if (mode === "add") {
          if (dynamicDrawingSettings.multimode) { //check if multimode is on
            addmono(path, true);
          } else {
            addmono(path, false);
          }
        } else if (mode === "replace") {
          if (dynamicDrawingSettings.multimode) {
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
          });
        })
        .on('mouseout', function (d) {
          $(document).unbind("keyup"); //remove the keyup event for checking to delete
          d3.selectAll('.highlightnode').remove();
        });

    }



    if (configuration.linkageVisible === true) {
      //append linkage text
      node
        .append('text')
        .attr('transform', function (d, i) {
          return transformlinkText(d, i, configuration);
        })
        .text(function (d, i) {
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
    }  let inputs = settingsForm.querySelectorAll('input, select, checkbox');

    inputs.forEach(f => {
      if (f.type === 'checkbox') {
        options[f.id] = f.checked;
      } else if (f.type === 'number') {
        options[f.id] = +f.value;
      } else {
        options[f.id] = f.value;
      }
    });

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
  }
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
            });
          }
        });
      }
    });
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
          angle = 30; //to the left
        } else {
          angle = 150; //to the right
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
      return `${filePaths.monosSVG}#${str.toLowerCase()}`;
    } else {
      return `${filePaths.monosSVG}#unknown`;
    }
  }


  //returns the linkage text after replacing the a to alpha and b to beta
  function linkageText(d, i, options) {
    var str = d.data.linkage;
    if (str == '') { return }
    if (i == 0) {
      str = str.replace('a', '\u03B1').replace('b', '\u03B2');
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
      str = str.replace(/a(?=[\d\?]?\-[\d\?])/g, '\u03B1')
        .replace(/b(?=[\d\?]?\-[\d\?])/, '\u03B2')
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

  //Once all the monosaccharide symbols are fetched start appending the buttons
  async function listMonosaccharides() {

    var svgarr = await d3.xml(filePaths.monosSVG).then(function (data) {
      var arr = [].map.call(data.querySelectorAll("symbol"), function (symbol) {
        return {
          id: symbol.getAttribute("data-abbr"), //use the data-abbr to get id
          viewBox: symbol.getAttribute('viewBox'),
          innerhtml: symbol.innerHTML.replace(/\n|\t/g, '').trim(),
          fullname: symbol.getAttribute("data-shortname") //use the data-shortname to get the shortname
        };
      });
      // console.log(arr);
      return arr;
    });


    svgarr.forEach(mono => {
      appendButton(mono, domElements.fullMonoList);
    });

    commonMonos.forEach(e => {
      //find the common monosaccharides based on the "common" array
      var mono = svgarr.find((m) => {
        return m.id == e;
      });
      appendButton(mono, domElements.commonMonoList);
    });

  }


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
      });

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

  //call appendTerminals in initialize to append the terminals
  function appendTerminals() {
    terminals.forEach((f,i) => {
      $("#terminalslist").append(`
    <li class="template">
    <button class="btn btn-outline-primary btn-sm"
      onclick="glycoglyph.addTerminaltoChild(${i})">${f.name}</button>
    </li>
  `);
    });
  }

  function addTerminaltoChild(i) {
    let terminal = terminals[i].sequence;
    childglycan.child = JSON.parse(glycantojson(terminal));
    $('#monocheck').html(terminal);
    $('#linkagecheck').html("<i>Add Linkage</i>");
  }

  function starttemplate(name) {

    //get the input field for the name
    var nameinput = document.getElementById(domElements.nameInputID);
    if (nameinput.value != ""){
      if(!confirm("This will clear current Name field. Are you sure you would like to continue?")){
        return;
      }
    }
    
    nameinput.value = "";
    var template = templates.filter((e) => e.name == name && e.type ==="starter");
    nameinput.value = template[0].structure;

    tracknames(nameinput.value);
    
    d3glycanstructure(nameinput.value);
    cfgToGlycoCT();
  }

  async function generateGTCIDTable() {
    if ($(`#${domElements.glytoucanTableDiv}`)) {
      $(`#${domElements.glytoucanTableDiv}`).html(`
      Searching...
    `);
    } else {
      console.error('Glytoucan Table Div not found or no name input. Check your code.');
      return;
    }

    if ($(`#${domElements.nameInputID}`)[0].value == '') {
      $(`#${domElements.glytoucanTableDiv}`).html(`
      No structure created. Draw a structure or enter a name and then try again.
    `); 
      return;
    }
    let name = document.getElementById(domElements.nameInputID).value;
    let glytoucanData = await getGTCID(name, true);

    drawGTCIDTable(glytoucanData);
  }

  function drawGTCIDTable(glytoucanData) {

    //Prepare the table for the output
    $(`#${domElements.glytoucanTableDiv}`).html(`
    <table class="table table-sm">
      <thead>
        <tr>
          <th class="">Reducing End Type:</th>
          <th class="alpha" scope="col">&alpha;</th>
          <th class="beta" scope="col">&beta;</th>
          <th class="unknown" scope="col">Unknown (?)</th>
          <th class="open"  scope="col">Open</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>GlyTouCan ID:</th>
          <td class="alpha" id="alphagtcid"></td>
          <td class="beta" id="betagtcid"></td>
          <td class="unknown" id="unknowngtcid"></td>
          <td class="open" id="opengtcid"></td>
        </tr>
        <tr>
          <td>Details:</th>
          <td class="alpha" id="alphadetails"></td>
          <td class="beta" id="betadetails"></td>
          <td class="unknown" id="unknowndetails"></td>
          <td class="open" id="opendetails"></td>
      </tr>
      </tbody>
    </table>
    `);

    glytoucanData.forEach(f => {
      if (f.glytoucan.response == 'Error in Structure') {
        $(`#${f.name}gtcid`).html(`Error in Structure`);
      } else if (f.glytoucan.response == 'Not Available' || f.glytoucan.id == "") {
        $(`#${f.name}gtcid`).html(`Not Available`);
      } else if (f.glytoucan.response == 'Error Connecting') {
        $(`#${f.name}gtcid`).html(`Error Connecting`);
      } else {
        $(`#${f.name}gtcid`).html(`${f.glytoucan.id} 
      <button id="copyGlycoCTBtn" class="btn btn-sm btn-link copybtn" onclick="glycoglyph.copyTextFromElement('${f.name}gtcid')" title="Copy">
        <img src="${filePaths.images}copy.svg" alt="copy" width="20px">
      </button>
      `);
        $(`#${f.name}details`).append(`
      <a href="https://glytoucan.org/Structures/Glycans/${f.glytoucan.id}" target="_blank"
      title="View in GlyTouCan">
      <span class="glytoucan-logo detail-icon"></span></a>`);

        // If Found in GlyGen produce the other DB icons
        if (f.glygenData.glygen.url) {
          $(`#${f.name}details`).append(`
          <a href="${f.glygenData.glygen.url}" target="_blank"
          title="View in GlyGen">
          <span class="glygen-logo detail-icon"></span></a>
          `);

          if (f.glygenData.pubchem) {
            $(`#${f.name}details`).append(` 
            <a href="${f.glygenData.pubchem.url}" target="_blank"
            title="View in PubChem">
            <span class="pubchem-logo detail-icon"></span></a>`);
          }

          if (f.glygenData.chebi) {
            $(`#${f.name}details`).append(` 
            <a href="${f.glygenData.chebi.url}" target="_blank"
            title="View in ChEBI">
            <span class="chebi-logo detail-icon"></span></a>`);
          }
        }
      }
      if (f.primary) {
        d3.selectAll(`.${f.name}`).classed("table-success", true);
      }
    });
  }

  async function fetchGlyTouCan(url) {
    let glytoucan = await fetch(url)
      .then(resp => resp.json())
      .then(data => {
        if (data.id === undefined) { //if undefined it means there was some error in the GlycoCT
          return {
            id: data.id,
            response: 'Error in Structure'
          };
        } else if (data.id === "no accnumber" || data.id === "") { //if No Accession Number 
          return {
            id: data.id,
            response: "Not Available"
          };
        } else { // If successful retrieval of accession number populate the table
          return {
            id: data.id,
            response: "Success"
          };
        }
      })
      .catch(err => {
        console.error(err);
        return {
          id: undefined,
          response: "Error Connecting"
        }
      });
    return glytoucan;
  }

  async function fetchGlyGenData(id) {
    if (id === "") {
      console.log('GlyTouCan ID is missing');
      return {
        glygen: {
          url: undefined,
          response: 'Not Available'
        }
      }
    }
    let glygen = fetch(`https://api.glygen.org/glycan/detail/${id}/`)
      .then(resp => resp.json())
      .then(data => {
        if (data.error_list && data.error_list.some(f => f.error_code === "non-existent-record")) {
          console.log('GlyTouCan ID does not exist in glygen');
          return {
            glygen: {
              url: undefined,
              response: 'Not Available'
            }
          }
        }
        let output = {};
        output.glygen = {
          url: `https://www.glygen.org/glycan/${id}`,
          response: 'Success'
        };
        if (data.crossref) {
          let pubchemURL = data.crossref.find(f => f.database === "PubChem Compound");
          if (pubchemURL) {
            output.pubchem = {
              url: pubchemURL.url,
              response: 'Success'
            };
          }

          let chebiURL = data.crossref.find(f => f.database === "ChEBI");
          if (chebiURL) {
            output.chebi = {
              url: chebiURL.url,
              response: 'Success'
            };
          }

        }

        if (data.enzyme) {
          output.enzymes = data.enzyme;
        }

        return output
      })
      .catch(err => {
        console.error(err);
        if (err.responseJSON && err.err.responseJSON.error_list && err.responseJSON.error_list.some(f => f.error_code === "non-existent-record")) {
          console.log('GlyTouCan ID does not exist in glygen');
          return {
            glygen: {
              url: undefined,
              response: 'Not Available'
            }
          }
        } else if (err.responseJSON && err.err.responseJSON.error_list && err.responseJSON.error_list.some(f => f.error_code === "missing-parameter")) {
          console.log('GlyTouCan ID is missing');
          return {
            glygen: {
              url: undefined,
              response: 'Not Available'
            }
          }
        } else {
          console.log('Failed to connect to GlyGen');
          return {
            glygen: {
              url: undefined,
              response: 'Error in connection'
            }
          };
        }

      });


    return glygen;
  }

  async function getGTCID(name, glygen = false) {
    // define reducing end types
    let types = [
      { anomer: "a", name: "alpha", },
      { anomer: "b", name: "beta", },
      { anomer: "?", name: "unknown" },
      { anomer: "", name: "open" }
    ];

    let glycanobj = JSON.parse(glycantojson(name));

    // Go recursively inside the tree to reach the glycan. 
    // This is done for names with linkers for example: 
    // Mana1-6(Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb1-Sp8
    // because the node Sp8 doesn't have a anomer
    function recursetoglycan(glycan) {
      if (glycan.monosaccharide != "") {
        return glycan;
      } else {
        return recursetoglycan(glycan.children[0])
      }
    }
    glycanobj = recursetoglycan(glycanobj);

    let primaryanomer;
    if (glycanobj.monosaccharide !== "") { primaryanomer = glycanobj.anomer; }

    //for each anomer
    for (let i = 0; i < types.length; i++) {

      glycanobj.anomer = types[i].anomer; //set the anomer type for the glycan
      let glycanjson = JSON.stringify(glycanobj); //recreate the JSON for the glycan
      let glycoCT = jsonToGlycoCT(glycanjson); //get the glycoCT
      // build the url to query GlyTouCan
      let url = "https://api.glycosmos.org/glycanformatconverter/2.5.2/glycoct2wurcs/";
      url += encodeURI(glycoCT);

      types[i].primary = (types[i].anomer == primaryanomer) ? true : false;

      types[i].glytoucan = await fetchGlyTouCan(url);

      if (glygen && types[i].glytoucan.response == 'Success') {
        // console.log('Found Glytoucan ID checking other databases');
        types[i].glygenData = await fetchGlyGenData(types[i].glytoucan.id);
      }


    }

    return types;

  }

  // Replaces the CSS to inline styles using the svgStyle global variable
  async function replacecss(svgid) {

      //load the css file into svgStyle
      var svgStyle = await d3.text(filePaths.css).then(function (d) {
          return d;
      });

      // replace all comments in the svg style
      var allStyle = svgStyle.replace(/\/\*.*\n*\*\//g, '').replace(/\r?\n|\r/g, '').split('}');

      allStyle.forEach(function (el) {
          if (el.trim() != '') {
              var full_rule_string = el.split('{');
              var selector = full_rule_string[0].trim();
              var all_rule = full_rule_string[1].split(';');
              all_rule.forEach(function (elem) {
                  if (elem.trim() != '') {
                      var attr_value = elem.split(':');
                      var prop = attr_value[0].trim();
                      var value = attr_value[1].trim();
                      if (prop == 'font-weight') {
                          d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                              if (!this.getAttribute(prop) && this.style[prop] !== value) {
                                  d3.select(this).style(prop + '', value + '');
                              }
                          });
                      } else {
                          d3.select('#' + svgid).selectAll(selector).each(function (d, i) {
                              if (!this.getAttribute(prop) && !this.style[prop]) {
                                  d3.select(this).style(prop + '', value + '');
                              }
                          });
                      }
                  }
              });
          }
      });
  }


  // Replaces <use> in the svg using the svgarr global
  async function replaceuse(svgid) {
      var svgarr = await d3.xml(filePaths.monosSVG).then(function (data) {
          var arr = [].map.call(data.querySelectorAll("symbol"), function (symbol) {
              return {
                  id: symbol.getAttribute("data-abbr"), //use the data-abbr to get id
                  viewBox: symbol.getAttribute('viewBox'),
                  innerhtml: symbol.innerHTML.replace(/\n|\t/g, '').trim(),
                  fullname: symbol.getAttribute("data-shortname") //use the data-shortname to get the shortname
              };
          });
          return arr;
      });


      var use = $(`#${svgid} use`).each(function (i) {
          var href = this.getAttribute('href');
          if (href === null) { return }
          var obj = {
              id: href.split('#')[1],
              x: this.getAttribute('x'),
              y: this.getAttribute('y'),
              height: this.getAttribute('height'),
              width: this.getAttribute('width')
          };

          //get the viewbox and html from svgarr global variable mapped above
          var mono = svgarr.find(e => {
              return e.id.toLowerCase() == obj.id;
          });

          var s = '<svg id="' + obj.id + '" x="' + obj.x + '" y="' + obj.y + '" height="' + obj.height + '" width="' + obj.width + '" viewBox="' + mono.viewBox + '">';
          s += mono.innerhtml;
          s += '</svg>';
          $(this).parent().prepend(s); //prepend final svg
      }).remove();
  }

  // Function to save SVG
  async function savesvg(svgid) {
      await replacecss(svgid);
      await replaceuse(svgid);
      var svgData = document.getElementById(svgid);
      svgData.setAttribute("xmlns", "http://www.w3.org/2000/svg");
      svgData.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
      svgData = document.getElementById(svgid).outerHTML;
      var svgBlob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
      var svgUrl = URL.createObjectURL(svgBlob);
      var downloadLink = document.createElement("a");
      downloadLink.href = svgUrl;
      downloadLink.download = "Figure.svg";
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      d3glycanstructure(document.getElementById(domElements.nameInputID).value); //redraw glycan
  }

  //If you want to copyText from Element
  function copyTextFromElement(elementID) {
    let element = document.getElementById(elementID); //select the element

    let elementText = element.innerText; //get the text content from the element

    if (element.tagName == 'INPUT' ) {
      elementText = element.value;
    }

    
    elementText = elementText.trim();

    if (elementText != '') {
      copyText(elementText); //use the copyText function below
      alert('Copied: \n' + elementText);
    }else {
      alert('Nothing to copy.');
    }
    
  }

  //If you only want to put some Text in the Clipboard just use this function
  // and pass the string to copied as the argument.
  function copyText(text) {
    navigator.clipboard.writeText(text);
  }

  function cleardrawingarea() {
    document.getElementById(domElements.nameInputID).value = '';
    document.getElementById(domElements.glycoCTID).innerHTML = '';
    tracknames('');
    d3.select(`#${drawingSettings.drawdivID}sub`).remove();
    
  }

  //masses taken from GlycanMass tools ExPASy: https://web.expasy.org/glycomod/glycomod_masses.html
  var residualmass = {
    hexose: 162.0528,
    hexnac: 203.0794,
    deoxyhexose: 146.0579,
    pentose: 132.0423,
    Neu5Ac: 291.0954,
    Neu5Gc: 307.0903,
    KDN: 250.0689,
    hexa: 176.03209,
    sulfate: 79.9568,
    phosphate: 79.9663,
    h2o: 18.010565,
    H: 1.007825,
    Na: 22.989768,
    K: 38.963707,
    acetate: 42.010565,
    tfa: 112.9850391,
    glycolyl: 58.005479,
    methyl: 14.015650,
    amino: -0.984016
  };

  //list of mol weight for all monosaccharides obtained from pubchem via snfg page
  var mwlist = {
    'Neu5,9Ac2': 351.308,
    '4eLeg': 250.116486,
    '6dAlt': 164.068473,
    '6dAltNAc': 205.095023,
    '6dGul': 164.068473,
    '6dTal': 164.068473,
    '6dTalNAc': 205.095023,
    'Abe': 148.073559,
    'Aci': 250.116486,
    'All': 180.063388,
    'AllA': 194.042653,
    'AllN': 179.079373,
    'AllNAc': 221.089937,
    'Alt': 180.063388,
    'AltA': 194.042653,
    'AltN': 179.079373,
    'AltNAc': 221.089937,
    'Api': 150.052823,
    'Ara': 150.052823,
    'Bac': 162.100442,
    'Col': 148.073559,
    'DDmanHep': 210.073953,
    'Dha': 222.037567,
    'Dig': 148.073559,
    'Fru': 180.063388,
    'Fuc': 164.068473,
    'FucNAc': 205.095023,
    'Gal': 180.063388,
    'GalA': 194.042653,
    'GalN': 179.079373,
    'GalNAc': 221.089937,
    'Glc': 180.063388,
    'GlcA': 194.042653,
    'GlcN': 179.079373,
    'GlcNAc': 221.089937,
    'Gul': 180.063388,
    'GulA': 194.042653,
    'GulN': 179.079373,
    'GulNAc': 221.089937,
    'Ido': 180.063388,
    'IdoA': 194.042653,
    'IdoN': 179.079373,
    'IdoNAc': 221.089937,
    'Kdn': 268.079432,
    'Kdo': 238.068867,
    'Leg': 250.116486,
    'LDmanHep': 210.073953,
    'Lyx': 150.052823,
    'Man': 180.063388,
    'ManA': 194.042653,
    'ManN': 179.079373,
    'ManNAc': 221.089937,
    'Mur': 251.100502,
    'MurNAc': 293.111067,
    'MurNGc': 309.105981,
    'Neu': 267.095417,
    'Neu5Ac': 309.105981,
    'Neu5Gc': 325.100896,
    'Oli': 148.073559,
    'Par': 148.073559,
    'Pse': 250.116486,
    'Psi': 180.063388,
    'Qui': 164.068473,
    'QuiNAc': 205.095023,
    'Rha': 164.068473,
    'RhaNAc': 205.095023,
    'Rib': 150.052823,
    'Sor': 180.063388,
    'Tag': 180.063388,
    'Tal': 180.063388,
    'TalA': 194.042653,
    'TalN': 179.079373,
    'TalNAc': 221.089937,
    'Tyv': 148.073559,
    'Xyl': 150.052823,
  };

  function outputParams() {
    var name = document.getElementById(domElements.nameInputID).value;

    let div = document.getElementById(domElements.parametersdiv);
    if (name !== "") {
      let params = calcMassParams(name);
      let output = `Monoisotopic Mass: 
    <a href="#" onclick="glycoglyph.copyTextFromElement('calculatedMonoisotopicMass')" title="Click to Copy">
    <span id="calculatedMonoisotopicMass">${params.monoisotopicMass}</span>
    </a> <br>
    Monosaccharide Count: ${params.monosaccharideCount}`;
      if (params.monosaccharideNotIdentified > 0) {
        output += `<br><span class="text-danger">Unidentified Monosaccharide: ${params.monosaccharideNotIdentified}</span>`;
      }
      if (params.substituentNotIdentified > 0) {
        output += `<br><span class="text-danger">Unidentified Substituents: ${params.substituentNotIdentified}</span>`;
      }
      div.innerHTML = output;
    } else {
      div.innerHTML = `Draw structure first.`;
    }



  }

  function calcMassParams(name) {

    let glycanObj = d3.hierarchy(JSON.parse(glycantojson(name)));

    let glycanArr = glycanObj.descendants();

    let outputobj = {
      monoisotopicMass: 0,
      monosaccharideCount: 0,
      monosaccharideNotIdentified: 0,
      substituentNotIdentified: 0
    };

    glycanArr.forEach((g) => {
      if (mwlist[g.data.monosaccharide] !== undefined) {
        //Add mono mass
        outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass + mwlist[g.data.monosaccharide] - residualmass.h2o);

        //Add substituent mass
        if (g.data.substituent !== "") {
          g.data.substituent.replace(/\[/g, '').split(']').forEach(sub => {
            if (sub == "") {
              return;
            }
            if (sub.indexOf('Ac') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.acetate;
            } else if (sub.indexOf('S') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.sulfate;
            } else if (sub.indexOf('P') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.phosphate;
            } else if (sub.indexOf('Gc') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.glycolyl;
            } else if (sub.indexOf('Me') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.methyl;
            } else if (sub.indexOf('N') > -1) {
              outputobj.monoisotopicMass = outputobj.monoisotopicMass + residualmass.amino;
            } else {
              outputobj.substituentNotIdentified++;
            }
            outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass);
          });
        }

        //Add count 
        outputobj.monosaccharideCount++;
      } else {
        outputobj.monosaccharideNotIdentified++;
      }

    });

    outputobj.monoisotopicMass = precise(outputobj.monoisotopicMass + residualmass.h2o);


    return outputobj;

  }

  function precise(number) {
    let precision = 6; //precision of 6 is used as most of the masses in the mwlist are up to 6 decimal places
    let currentprecision = number.toString().split('.')[0].length + precision;
    return +Number.parseFloat(number).toPrecision(currentprecision);
  }

  let version = 'v2.1.3';


  // even though Rollup is bundling all your files together, errors and
  // logs will still point to your original source modules

  exports.addLinkage = addLinkage;
  exports.addSub = addSub;
  exports.addTerminaltoChild = addTerminaltoChild;
  exports.addfirstmono = addfirstmono;
  exports.addmono = addmono;
  exports.appendTerminals = appendTerminals;
  exports.calcMassParams = calcMassParams;
  exports.cfgToGlycoCT = cfgToGlycoCT;
  exports.childglycan = childglycan;
  exports.clearSub = clearSub;
  exports.cleardrawingarea = cleardrawingarea;
  exports.commonMonos = commonMonos;
  exports.copyTextFromElement = copyTextFromElement;
  exports.d3glycanstructure = d3glycanstructure;
  exports.domElements = domElements;
  exports.drawGTCIDTable = drawGTCIDTable;
  exports.drawingSettings = drawingSettings;
  exports.dynamicDrawingSettings = dynamicDrawingSettings;
  exports.filePaths = filePaths;
  exports.gctMonoList = gctMonoList;
  exports.gctSubList = gctSubList;
  exports.generateGTCIDTable = generateGTCIDTable;
  exports.getGTCID = getGTCID;
  exports.glycantojson = glycantojson;
  exports.jsonToGlycoCT = jsonToGlycoCT;
  exports.listMonosaccharides = listMonosaccharides;
  exports.makechildglycanname = makechildglycanname;
  exports.monos = monos;
  exports.monosDict = monosDict;
  exports.monoselect = monoselect;
  exports.objecttoname = objecttoname;
  exports.outputParams = outputParams;
  exports.outputname = outputname;
  exports.redo = redo;
  exports.replacemono = replacemono;
  exports.resetchildglycan = resetchildglycan;
  exports.savesvg = savesvg;
  exports.setCSSPath = setCSSPath;
  exports.setImagesPath = setImagesPath;
  exports.setMonosSVGPath = setMonosSVGPath;
  exports.sortchildren = sortchildren;
  exports.starttemplate = starttemplate;
  exports.templates = templates;
  exports.terminals = terminals;
  exports.tracknames = tracknames;
  exports.undo = undo;
  exports.version = version;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
