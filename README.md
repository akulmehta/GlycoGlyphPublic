
# GlycoGlyph

## Description

GlycoGlyph provides an interface to draw glycan structures using a Graphical User Interface (GUI) and produce appropriate names according to CFG naming convention (modified condensed IUPAC nomenclature). Alternatively, it also allows you to type in the names and see the structure of the glycan. It therefore allows the seamless interconversion of name and structure.

## Video Tutorial

https://www.youtube.com/watch?v=Z1zEZGO_wKY

## Overview of How GlycoGlyph Works

![Overview of how GlycoGlyph Works](https://glycotoolkit.com/wp-content/uploads/2019/11/Figure1@4x-100.png)At the core of GlycoGlyph is the ability to create the Glycan Tree JSON. This tree JSON can be created from the CFG Linear Nomenclature. The tree can then be used by D3.js hierarchy module to generate the structure. The tree json can also be parsed to produce the name, allowing seemless name and structure interconversion. A user can therefore either write the name or input the structure using the GUI to generate the structure.
In the figure above, the steps are highlighted to walk through what steps would be involved when a user tries to build a structure either using the GUI, or using the name.

## Please Cite

If you use GlycoGlyph, please cite: [https://doi.org/10.1093/bioinformatics/btaa190](https://doi.org/10.1093/bioinformatics/btaa190)

# For Developers


## License
GlycoGlyph is released under MIT license. Please see [LICENSE.md](LICENSE) for details.

## Requirements
GlycoGlyph uses the following: 
- JS Libraries:
	- D3.js v5
	- jQuery v3.4.1
	- Bootstrap components:
		- Popper.js v1.12.9
		- Bootstrap v4.0.0-alpha.6 js
		- Tether v1.4.0
- CSS
	- Bootstrap v4.0.0-alpha.6 css

## Getting Started
Use either:
1. The minified glycoglyph-min.js with index.html
```
GlycoGlyph
└─ index.html
└─ img\*.*
└─ css\*.*
└─ scripts
    └─ glycoglyph-min.js
    └─ initialize.js
    └─ introtut.js
```
3. Use individual js components from the lib folder with the index.1.html file.
```
GlycoGlyph
└─ index.1.html
└─ img\*.*
└─ css\*.*
└─ scripts
    └─ lib\*.js
    └─ initialize.js
    └─ introtut.js
```

## Full Documentation
[Full Documentation Here.](Documentation.md)

