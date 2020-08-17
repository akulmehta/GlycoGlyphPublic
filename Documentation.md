## Documentation

This documentation is for v2.0.0

The Documentation is split by files to make it easier to locate different functions.
- [HTML](#html)

- [Images](#images)

- [CSS](#css)

- [JavaScript](#javascript)

---

### HTML

The html is located in the _public_ folder._index.html_


This page contains the code to load the minified version of GlycoGlyph. The `<head>` contains the code for all libraries which need to be imported and the styles.

The entire GlycoGlyph GUI is located in the `<div>` with the `id="glycoglyphdiv"` including the scripts for GlycoGlyph located at the bottom of the `<div>`.


_index-min.html_


This page contains the code to load the individual components required for GlycoGlyph from the `scripts\lib\*.js`. The purpose of this page is for anyone who wants to customize the code for their own use. They can modify each component and use this page to see the changes. The `<head>` contains the code for all libraries which need to be imported and the styles. The entire GlycoGlyph GUI is located in the `<div>` with the `id="glycoglyphdiv"` including the scripts for GlycoGlyph located at the bottom of the `<div>`.


---


### Images

All images to be used by GlycoGlyph are located in the _assets\images_ folder.

#### Icons

GlycoGlyph uses the following icons for different parts of the application:
- _images\camera.svg_

- _images\cog.svg_

- _images\copy.svg_

- _images\eraser-solid.svg_

- _images\exchange-alt-solid.svg_

- _images\new.svg_

- _images\plus-solid.svg_

- _images\redo.svg_

- _images\undo.svg_

- _images\undo.svg_

In addition icons for various databases such as GlyGen and GlyTouCan can be found in the `images\icons` folder.

#### Monosaccharides
_images\monos.svg_

In this file, each monosaccharide is defined as a `<symbol>` and the `id` for each uses the abbreviation to make it easy to identify and find. The symbol also defines the `data-abbr` attribute and the `data-shortname` attribute which is used to list the monosaccharides using the _glycoglyph.listmonos()_ method.

---

### CSS

The CSS used by GlycoGlyph is located in the _public\css_ folder._glycoglyph.css_

Holds all the stylesheets needed for GlycoGlyph interface to display properly.---

---

### JavaScript

#### Production files
_public\js\glycoglyph.min.js_

Minified full compilation of all files in the _src\modules\_ folder. The documents from the _src\modules\_ folder are manually combined using command line and minified using Closure Compiler. There is probably a better way to do this but this is what I was doing.

_public\js\glycoglyph.js_

Compiled un-minified version of _glycoglyph.min.js_

_public\js\initialize.js_

Contains all scripts required to render the interface as well as add event listeners to different GUI elements.

_public\js\introtut.js_

Contains the code for the tutorials.

- `tutorialsteps` : Array. Constant that holds all the steps for the tutorial.

- `startTutorial()`: Function. Starts the tutorial and controls each step.

- `endTutorial()`: Function. Stops the tutorial.

 #### Source Modules 

The `src` directory contains all source code files which are only required for development. The files in the `modules` directory of the `src` folder is compiled into one using Rollup.js. To see a sample of how this is done you can check [RollupES6Template](https://github.com/akulmehta/RollupES6Template).

 
The following files contain all the modules for development
 
 _src\modules\globalvars.js_

Contains global variables for settings etc.

- `domElements`: Object. Contains the id of the elements used by GlycoGlyph for e.g. the `nameInputID` is where the CFG name will be typed.

- `filePaths`: Object. Contains the paths to the `monos.svg` file and the CSS file. Can be set using the functions in _setfilepaths.js_.

- `childglycan`: Object. Contains the information for the prepared structure to be added. The childglycan holds a `child` object with all the information about the child.

- `drawingSettings`: Object. Contains parameters to control the default drawing settings for GlycoGlyph and is used by _glycoglyph.d3glycanstructure_ function and is described in the documentation for that file.

- `dynamicDrawingSettings`: Object. Contains settings which change based on user drawing situation. e.g. `multimode` toggle. 

- `templates`: Array. Holds the information for the starter templates for N-Glycans and O-Glycans.

- `terminals`: Array. Holds the information for all terminals to be used as templates.

- `monos`: Array. Holds a list of monosaccharides used by _glycoglyph.glycantojson_.

- `aminoacids`: Array. Holds a list of amino acid letter codes. Not currently used in code.

- `gctMonoList`: Object. Holds dictionaries for various monosaccharides to help produce the GlycoCT in _glycoct.js_. Adapted from [SugarSketcher by Author: Davide Alocci and Renaud Costa](https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/io/glycoCT/MonosaccharideGlycoCT.js).

- `gctSubList`: Object. Holds dictionaries for substituents to help produce the GlycoCT in _glycoct.js_. Adapted from [SugarSketcher by Author: Davide Alocci](https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/glycomics/dictionary/SubstituentType.js).

- `commonMonos`: Array. Contains an array of commonly used monosaccharides.

- `svgStyle`: String. Contains entire _glycoglyph.css_ as text.

- `fetchCSS`: Promise state. Uses `d3.text` to retrieve the entire _glycoglyph.css_ file as a text to be parsed for _glycoglyph.savesvg_ functions.

- `svgarr`: Array. Contains data for all the monosaccharide symbols from the _monos.svg_ which is fetched using `fetchSVG` below. The data can be used by the _glycoglyph.savesvg_ functions.

- `fetchSVG`: Promise state. Uses `d3.xml` to fetch information for the symbols from _monos.svg_ such as the id, the paths and innerhtml and the fullname of the monosaccharide. The promise state can then be used to trigger drawing of the buttons for the GUI in _glycoglyph.listMonosaccharides_ function.


_src\modules\addinfo.js_


Contains functions for steps to add info to prepare a structure.


- `resetchildglycan()`: Function. Resets the `childglycan` global variable and clears the GUI.

- `addSub()`: Function. Gets the substituent information selected in the GUI and adds it to the prepared `childglycan`.

- `clearSub()`: Function. Clears the substituent information for the prepared `childglycan`

- `monoselect(mono)`: Function. Accepts argument of `mono` as string. Gets the monosaccharide selected and adds it to the prepared `childglycan`.

- `addLinkage()`: Function. Gets the linkage information selected in the GUI and adds it to the prepared `childglycan`.

- `makechildglycanname()`: Function. Appends the value for the `name` field for the `childglycan` by combining the `substituent`, `monosaccharide`,`linkage`.


_src\modules\addmono.js_

Contains functions to add monosaccharide to the glycan object and output new name.

- `addmono(path, multiple)`: Function. Accepts arguments `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click, and `multiple` as a boolean if multimode is on. Function recursively traverses the glycan object comparing the `path` and pushes the child glycan at the appropriate level. After this it calls the `outputname(nameobj)` and passes the updated glycan object.

- `outputname(nameobj)`: Function. Accepts `nameobj` as an object. Converts the glycan object `nameobj` using `d3.hierarchy`, sorts the children by link number using `sortchildren(struc)` produces the name using `objecttoname(structure)`.

- `addfirstmono()`: Function. Special case, while adding the first monosaccharide, since there is no path a special function is called.


_src\modules\calcmassparams.js_

Contains functions to calculate the mass parameters of a glycan

- `outputParams()`: Function. Retrieves the name from the DOM. Checks if name is present. If it is present calls the `calcMassParams()` function with the name.
- `calcMassParams(name)`: Function. Accepts the name as an argument. uses the `glycantojson()` function and `d3.hierarchy` to produce the list of monosaccharides and calculates the monoisotopic mass, along with the monosaccharide count. If any monosaccharides or substituents are not identified, they are counted separately. Function returns an object with the information.


_src\modules\d3glycanstructure.js_


Contains functions to draw the glycan in selected div.


- `d3glycanstructure(glycanname, options)`: Function. Accepts `glycanname` as a string with the CFG name and `options` as an object in which you can specify a number of parameters for drawing including. By default `drawingSettings` global variable is used.

  - `width`: width of the drawing area. Number.

  - `height`: height of the drawing area. Number.

  - `editingMode`: whether editing mode is turned on (`true`) or off (`false`).
  
  - `orientation`: drawing orientation of the glycan. String as `bottom-to-top` or `right-to-left`
  
  - `drawdivID`: ID of the div in which the glycan is to be drawn. String without the # for the ID.
  
  - `symbsize`: size of the SNFG symbols. Number.
  
  - `drawingareachoice`: whether to draw to fit the box or adjust box size as per glycan. String as `fixglycansize` or `fixdrawingarea`
  
  - `fucopt`: option to choose how the fucose is oriented. String as `fucout`, `fucleft`, `fucdown` or `fucoriginal`
  
  - `linkageVisible`: option to toggle whether linkage is visible. Boolean.
  
  - `linkRotate`: option to toggle whether linkage is rotated along the bond. Boolean.
  
  - `linkAbbr`: option to toggle whether linkage text should be abbreviated. Boolean.
  
  - `linkFontSize`: option to set the font size of the linkage text. Number
  
  - `margin`: option to set the margins of the drawing area. Object with keys `top`, `right`, `bottom`, `left`.
  
  - `drawingSettingsDivID`: the Div ID where the form for the drawing settings exists. The id of the input elements within such a div must match the   options above so as to override the defaults. String without the # for the ID.
  
  - `userOverrideOptions`: option to let user override the default options using the GUI form with settings in the `drawSettingsDivID`
  
The defaults for these can be found as the `glycoglyph.drawingSettings` or in the `globalvars.js` file. This function utilizes D3.js extensively along with the other functions below to draw the glycan depending upon some of the settings selected by the user. Hence it uses some information obtained by form fields in the GUI.

- `getUserDrawingOptions(options)`: Function to get all the user options from the GUI and override the configuration options which are passed in as the `options`.

- `getDepth(obj)`: Function. Accepts `obj` as object. This is to get the total depth of the glycan tree. This is used to calculate the node separation and dimensions.

- `fixfucers(node,width)`: Function. Accepts `node` as object with the glycan object and `width` as a number for the width of the glycan drawing. This function is used to convert the fucose to right angles or depending upon what type of fucose drawing option is selected in the GUI.

- `transformlinkText(d, i, options)`: Function. Accepts `d` as the data object for the glycan, `i` for the index of the node, and the configuration as `options` for the `linkRotate` as boolean for if rotation of link is required, `linkAbbr` as boolean if linkage is abbreviated, `symbsize` as a number for the size of the symbols. This function rotates the link text according to user option selection.

- `rotateFuc(d,o, options)`: Function. Accepts `d` as object for monosaccharide and `o` as object for orientation and the `configuration` as `options` for the `fucopt`. This function rotates the fucose symbol so that the apex of the triangle connects to the link.


_src\modules\deletemono.js_


Contains function to delete monosaccharide


- `deletemono(path)`: Function. Accepts `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click. This function recursively traverses to the selected node in the glycan tree comparing the `path` and deletes the children.


_src\modules\getGTCID.js_


Contains function to get the GlyTouCan ID from api.glycosmos.org

- `generateGTCIDTable()`: Function. Uses `getGTCID` and `drawGTCIDTable` (below) to get and draw the glytoucan ID table.

- `getGTCID()`: Function. Fetches the GlyTouCan ID from api.glycosmos.org by using the `glycoct2wurcs` api and retrieves Glygen data.

- `drawGTCIDTable(glytoucanData)`: Function. Produced the Glytoucan ID table. Accepts the output of the `getGTCID` method as `glytoucanData`.


_src\modules\glycantoJSON.js_


Contains function to take a CFG name and convert it to a glycan tree JSON data structure.


- `glycantojson(glycanname)`: Function. Accepts `glycanname` as a string for the CFG name. The function first uses `bracketify()` function which produces a more balanced bracketing structure using `{`curly brackets`}`. It then uses a `parseTree()` function to produce a javascript object which is stringified and returned as JSON.


_src\modules\glycoct.js_


Contains functions to produce the GlycoCT from a CFG name.


- `cfgToGlycoCT()`: Function. Gets the name from the CFG name input field. Calls `glycantojson()` to convert the name. Calls `jsonToGlycoCT()`to produce the GlycoCT. Outputs the GlycoCT to the GUI.

- `jsonToGlycoCT(json)`: Function. Accepts `json` as JSON for the glycan tree produced by `glycantojson()`. Converts the glycan tree JSON to GlycoCT.



_src\modules\listmonos.js_

Contains functions to list monosaccharides for the GUI. 

- `listMonosaccharides`: Function. Load the symbols for all monosaccharides in the GUI. Once all the monosaccharide symbols are fetched using `fetchSVG` global, and the `svgarr` is populated, it starts appending the monosaccharide buttons. It appends buttons for each monosaccharide in either the common monosaccharides region (`commonmonolist`) if they are in the `commonMonos` global array, or it appends all the symbols as buttons in the full list.


- `appendbutton(mono, divid)`: Function. Accepts `mono` as a string for monosaccharide type and `divid` as a string for the `<div>`  `id` where you would like to append the button.


_src\modules\listterminals.js_


Contains functions to append list of terminals in GUI and to add terminal templates to the prepared structure `childglycan` object.


- `appendTerminals()`: Function. Appends list of buttons for the terminal templates.

- `addTerminaltoChild(i)`: Function. Accepts `i` as a number for index. Retrieves the sequence from the `terminals` global array using the index `i`, converts to JSON and parses it and then adds it to the `childglycan`. Gives GUI output of the terminal sequence added.


_src\modules\objecttoname.js_


Contains functions to convert a glycan tree object to a glycan name in CFG format.


- `objecttoname(obj,bindex,depth)`: Function. Accepts `obj` as object for the glycan tree object, `bindex` as number for the index of the child node. This function, takes the glycan tree object, and recursively generates the CFG name from it, applying appropriate branches. It is advisable to call `sortchildren()` on the glycan tree before this function to get the correct name output with appropriately ordered child nodes.


_src\modules\replacemono.js_:


Contains functions for replacing a structure component such as monosaccharide, or linkage.


- `replacemono(path, multiple)`: Function. Accepts arguments `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click, and `multiple` as a boolean if multimode is on. Function recursively traverses the glycan object comparing the `path` and modifies the glycan at appropriate level. After this it calls the `outputname(nameobj)` and passes the updated glycan object.


_src\modules\savesvg.js_


Contains functions to save the svg.


- `savesvg(svgid)`: Function. Accepts arguments `svgid` which is the ID for the SVG to be saved. This function calls `replacecss()` and `replaceuse()` in the `svgid` and then creates a new `Blob` for the SVG to be saved. At the end it redraws the glycan so that the user may still interact with it.


_src\modules\setfilepaths.js_

Contains async functions to set the file paths for the SVG and CSS files.

- `setMonosSVGPath(newPath, pathType)`: Function. Accepts `newPath` as string to set the new path. The `pathType` is a string and can be set to `absolute` (default) or `relative` depending on the path you would like to pass into the project.

- `setCSSPath(newPath, pathType)`: Function. Accepts `newPath` as string to set the new path. The `pathType` is a string and can be set to `absolute` (default) or `relative` depending on the path you would like to pass into the project.

- `setImagesPath(newPath, pathType)`: Function. Accepts `newPath` as string to set the new path. The `pathType` is a string and can be set to `absolute` (default) or `relative` depending on the path you would like to pass into the project.


_src\modules\sortchildren.js_


Contains functions to sort the children based on the link number


- `sortchildren(obj)`: Function. Accepts `obj` as an object for the glycan tree object. This function recursively traverses the glycan tree and sorts the children in the proper order of linkage. It returns the correctly sorted object.


_src\modules\startertemplates.js_


Contains functions to display the start templates.


- `starttemplate(name)`: Function. Accepts `name` as a string for the sequence of the starter template. This function is called if the user uses the starter templates for N- and O- Glycans. It appends the appropriate starter template sequence to the name input element to produce the structure.


_src\modules\tracknames.js_


Contains functions to track CFG names and enables undo and redo.

- `tracknames(name)`: Function. Accepts arguments of `name` as a string which is the name to be tracked. This function pushes the name to the `trackname` global array, and increments the `tracknum` to keep a count of the tracking number.

- `undo()`: Function. This function allows users to undo changes to the structure by moving appropriately backwards in the `trackname` global array using the `tracknum` to keep track of where to go in the index.

- `redo()`: Function. This function allows users to redo changes to the structure by moving appropriately forwards in the `trackname` global array using the `tracknum` to keep track of where to go in the index.
