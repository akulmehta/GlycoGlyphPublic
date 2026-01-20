All changes to the project will be documented in this file

## 2.3.0 - 2026-01-20

### Added
- **Auto Child Linkages toggle**: Added a new "Auto Child Linkages" toggle in the header (default: ON) that gives users control over linkage behavior when linkage information is unknown
  - When enabled: automatically applies smart default child linkage positions (e.g., ?1-? for most monosaccharides, ?2-? for sialic acids)
  - When disabled: uses conservative ??-? for all unknown linkages
- **Linkage Warning System**: Added warning message that appears when structures contain ??-? linkages, explaining implications for database compatibility
  - Warning provides examples of standard linkage positions for common monosaccharides
  - "Apply Auto Child Linkages" button in warning allows users to convert existing ??-? to standard positions
  - "Dismiss" option to hide warning for current session
- Extended list of common monosaccharides (`commonMonosExtended`) including generic types like Hex, HexNAc, dHex, Sia, Pent, HexA, and HexN for linkage determination
- New `linkageSettings` object to track user preferences for linkage behavior and warning dismissal state
- New module `linkagewarning.js` containing functions to manage the linkage warning system

## 2.2.0 - 2025-10-09
### Fixed
- Fixed issue [#41](https://github.com/akulmehta/GlycoGlyphPublic/issues/41) related to GlycoCT generation
- Fixed errors in output to better indicate when GlyTouCan ID is not available
- Fixed API calls to Glycosmos to updated API version.

### Changed
- Updated README.md with improved developer documentation and setup instructions
- Updated version number to 2.2.0

## 2.1.9 - 2022-04-22
- Fixed several issues with external APIs and links.
- Fixed issues #34 and #35
- Github repository restructured to have 2.x branch for current stable version fixes and 3.x branch for next version.

## 2.1.8 - 2021-10-19
- Added ability to convert pGlyco3 plausible structure to glycoglyph compatible name. Enter name in pGlyco3 format and click on check name and it will prompt you to convert the name to valid format.
  - Example: `(N(N(H(H(H)(H))(H(mN(H))))))` converts pGlyco3 single-letter codes (N=HexNAc, A=Neu5Ac, H=Hex, F=Fuc) to GlycoGlyph linear nomenclature

## 2.1.7 - 2021-01-13
### Added
- Added index_relative.html for relative file paths and initialize_relative.js for relative file paths to the project. This should help address issue #30.

## 2.1.6 - 2020-12-10
### Added
- Ability to get name in Glycam compatible format which links to the glycam.org carbohydrate builder directly.

## 2.1.5 - 2020-12-03
### Added
- Ability to check name and automatically correct names. Specifically checks for wrong branch orders, replaces any long or short dashes (em-dash / en-dash) with regular hyphens (-), replaces any mistakes in capitalization of A in acetyls for HexNAc (e.g. GlcNac), and remove any trailing linkage information.
- Fixed some fucose labels were cut by the linkage
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

