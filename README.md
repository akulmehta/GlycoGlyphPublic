# GlycoGlyph

## Description

GlycoGlyph provides an interface to draw glycan structures with [SNFG (Symbol Nomenclature For Glycans)](https://www.ncbi.nlm.nih.gov/glycans/snfg.html) symbols using a Graphical User Interface (GUI) and produce appropriate names according to CFG naming convention (modified condensed IUPAC nomenclature). Alternatively, it also allows you to type in the names and see the structure of the glycan. It therefore allows the seamless interconversion of name and structure.

## Tool Page

You can use GlycoGlyph at [https://glycotoolkit.com/Tools/GlycoGlyph/](https://glycotoolkit.com/Tools/GlycoGlyph/)

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

The public directory contains files to implement GlycoGlyph on a website.

Use either:
1. The minified glycoglyph.min.js with index-min.html
```
public
└─ index-min.html
└─ assets\*.*
└─ css\*.*
└─ js
    └─ glycoglyph.min.js
    └─ initialize.js
    └─ introtut.js
```

2. The non-minified glycoglyph.js with index.html
```
public
└─ index.html
└─ assets\*.*
└─ css\*.*
└─ js
    └─ glycoglyph.js
    └─ initialize.js
    └─ introtut.js
```

3. The minified glycoglyph.js with index_relative.html using relative file paths
```
public
└─ index_relative.html
└─ assets\*.*
└─ css\*.*
└─ js
    └─ glycoglyph.js
    └─ initialize_relative.js
    └─ introtut.js
```

The `src` directory contains all source code files which are only required for development. The files in the `modules` directory of the `src` folder is compiled into one using Rollup.js.

## Full Documentation
[Full Documentation Here.](Documentation.md)

## Contact
[Twitter @akulmehta](https://twitter.com/akulmehta)