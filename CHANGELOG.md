All changes to the project will be documented in this file

## 2.1.4 - 2020-10-20
### Fixed
- Issue #21 Blood group B template was wrong

## 2.1.3 - 2020-10-08

### Fixed
- Issue #17 GlcNGc does not render correctly and wrong GlycoCT
- Issue #18 Phosphate GlycoCT wrong
- Issue #19 Glygen link being produced for GlyTouCan IDs not present in Glygen

## 2.1.2 - 2020-10-06

### Fixed
- Issue #14 for wrong GlycoCT for Rhamnose
- Fixed Issue #15 for GlycanFormatConverter API address update 


## 2.1.1 - 2020-08-24

### Changed
- Added `glygen` parameter to function `getGTCID()` so as to separate the fetching from Glygen if required.

### Fixed 
- Issue [#12](https://github.com/akulmehta/GlycoGlyphPublic/issues/12) where the LIN information for certain glycans with hexoses was not working.


## 2.1.0 - 2020-08-17

### Changed
- Version number is now rendered programmatically requiring changes in fewer places in the code.

### Added
- Ability to calculate mass

### Fixed
- Issue [#10](https://github.com/akulmehta/GlycoGlyphPublic/issues/10) where there was some issues adding monosaccharides after adding terminals with multimode.


## 2.0.1 - 2020-08-12

### Fixed
- Issue [#8](https://github.com/akulmehta/GlycoGlyphPublic/issues/8) where icons were generated even if no glytoucan id was retrieved.

## 2.0.0 - 2020-8-06

Version 2.0.0 changes the code to become more modular using Rollup ES6 Imports. This makes glycoglyph into an importable library package, whose features can be accessed under the `glycoglyph` namespace. This provides several improvements in overall code structure and makes maintainability much more easier. It also makes it easier to add new features. 

For example, the public directory contains all the files for anyone who directly wants to use the application, while the src directory contains modular structure of the different components of GlycoGlyph.

Documentation will be updated accordingly to reflect these changes.

### Fixed
- Bug where reducing end anomeric alpha/beta doesn't show greek letters.
- Bug where rotation of glycan changes the width of the drawing.
- Templates now have correct reducing ends for N-glycans (beta) and O-glycans (alpha).

### Added 
- Ability to copy the name and the GlycoCT using a copy button.
- Ability to clear the drawing area and start fresh.

## 1.1.0 - 2020-7-16

### Fixed

- GlycoCT for [9Ac]Neu5Ac fixed to show acetyl instead of n-acetyl at 9-position.
- Temporary fix for Issue [#6](https://github.com/akulmehta/GlycoGlyphPublic/issues/6)

### Added

- Thanks to GlyGen team, added links to Glygen for GlyTouCan IDs and from the Glygen API able to retrieve links to pubchem as well as ChEBI for those which are registered with GlyGen.
- Added ability to rotate the structure and draw from right to left.

### Developer Changes

- Changed `d3glycanstruc` parameters to have an options parameters where you can define multiple things. This will make it easy to override parameters based on application needs for the future.


## 1.0.1 - 2020-03-17

### Fixed

- For fucose on the right, write the linkage text along the bond and reverse it to indicate directionality

## 1.0.0 - 2020-03-14

Initialize

