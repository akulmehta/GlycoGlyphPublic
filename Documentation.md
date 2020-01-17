## Documentation

The Documentation is split by files to make it easier to locate different functions. 

- [HTML](#html)
- [Images](#images)
- [CSS](#css)
- [JavaScript](#javascript)


---
### HTML

The html is located in the *root* folder.

*index.html*

This page contains the code to load the minified version of GlycoGlyph. The `<head>` contains the code for all libraries which need to be imported and the styles. 
The entire GlycoGlyph GUI is located in the `<div>` with the `id="glycoglyphdiv"` including the scripts for GlycoGlyph located at the bottom of the `<div>`.

*index.1.html*

This page contains the code to load the individual components required for GlycoGlyph from the `scripts\lib\*.js`. The purpose of this page is for anyone who wants to customize the code for their own use. They can modify each component and use this page to see the changes. The `<head>` contains the code for all libraries which need to be imported and the styles. The entire GlycoGlyph GUI is located in the `<div>` with the `id="glycoglyphdiv"` including the scripts for GlycoGlyph located at the bottom of the `<div>`.

---
### Images

All images to be used by GlycoGlyph are located in the *img* folder.

#### Icons

GlycoGlyph uses the following icons for different parts of the application:

- *img\camera.svg*
- *img\cog.svg*
- *img\eraser-solid.svg*
- *img\exchange-alt-solid.svg*
- *img\plus-solid.svg*
- *img\redo.svg*
- *img\undo.svg*

#### Monosaccharides
 *img\monos.svg*

 In this file, each monosaccharide is defined as a `<symbol>` and the `id` for each uses the abbreviation to make it easy to identify and find. The symbol also defines the `data-abbr` attribute and the `data-shortname` attribute which is used to list the monosaccharides using the *listmonos.js*. 


---
### CSS

The CSS used by GlycoGlyph is located in the *css* folder.  

*styles.css*

Holds all the stylesheets needed for GlycoGlyph to display properly.

---
### JavaScript

*glycoglyph-min.js*

Minified full compilation of all files in the *lib* folder. The documents from the *lib* folder are manually combined using command line and minified using Closure Compiler. There is probably a better way to do this but this is what I was doing.


*glycoglyph.js*

Compiled un-minified version of *glycoglyph-min.js*


*initialize.js*

Contains all scripts required to render the interface as well as add event listeners to different GUI elements. 


*introtut.js*

Contains the code for the tutorials.
- `tutorialsteps` : Array. Constant that holds all the steps for the tutorial.
- `startTutorial()`: Function. Starts the tutorial and controls each step.
- `endTutorial()`: Function. Stops the tutorial.


*lib\\_gglyphglobals.js*

Contains global variables for settings etc.
- `nameid`: String. Contains the id of the element where the CFG name will be typed.
- `childglycan`: Object. Contains the information for the prepared structure to be added. 
- `glyd3render`: Boolean. Setting for *d3glycanstructure.js*.
- `trackname`: Array. Stores the names for undo/redo
- `tracknum`: Number. Used to track the number for the undo/redo steps.
- `templates`: Array. Holds the information for the starter templates for N-Glycans and O-Glycans.
- `terminals`: Array. Holds the information for all terminals to be used as templates.
- `monos`: Array. Holds a list of monosaccharides used by *glycantoJSON.js*.
- `aminoacids`: Array. Holds a list of amino acid letter codes. Not currently used in code.
- `gctMonoList`: Object. Holds dictionaries for various monosaccharides to help produce the GlycoCT in *glycoct.js*. Adapted from [SugarSketcher by Author: Davide Alocci and Renaud Costa](https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/io/glycoCT/MonosaccharideGlycoCT.js).
- `gctSubList`: Object. Holds dictionaries for substituents to help produce the GlycoCT in *glycoct.js*. Adapted from [SugarSketcher by Author: Davide Alocci](https://github.com/alodavide/sugarSketcher/blob/master/src/js/models/glycomics/dictionary/SubstituentType.js).
- `commonMonos`: Array. Contains an array of commonly used monosaccharides.
- `getUrl`: String. URL of the current application. Used to fetch files such as *monos.svg* and *styles.css*.
- `svgStyle`: String. Contains entire *styles.css* as text.
- `fetchCSS`: Promise state. Uses `d3.text` to retrieve the entire *styles.css* file as a text to be parsed for *savesvg.js* functions.
- `svgarr`: Array. Contains data for all the monosaccharide symbols from the *monos.svg* which is fetched using `fetchSVG` below. The data can be used by the *savesvg.js* functions.
- `fetchSVG`: Promise state. Uses `d3.xml` to fetch information for the symbols from *monos.svg* such as the id, the paths and innerhtml and the fullname of the monosaccharide. The promise state can then be used to trigger drawing of the buttons for the GUI in *listmonos.js*.


*lib\addinfo.js*

Contains functions for steps to add info to prepare a structure.
- `resetchildglycan()`: Function. Resets the `childglycan` global variable and clears the GUI.
- `addSub()`: Function. Gets the substituent information selected in the GUI and adds it to the prepared `childglycan`.
- `clearSub()`: Function. Clears the substituent information for the prepared `childglycan`
- `monoselect(mono)`: Function. Accepts argument of `mono` as string. Gets the monosaccharide selected and adds it to the prepared `childglycan`.
- `addLinkage()`: Function. Gets the linkage information selected in the GUI and adds it to the prepared `childglycan`.
- `makechildglycanname()`: Function. Appends the value for the `name` field for the `childglycan` by combining the `substituent`, `monosaccharide`,`linkage`.


*lib\addmono.js*

Contains functions to add monosaccharide to the glycan object and output new name.

- `addmono(path, multiple)`: Function. Accepts arguments `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click, and `multiple` as a boolean if multimode is on. Function recursively traverses the glycan object comparing the `path` and pushes the child glycan at the appropriate level. After this it calls the `outputname(nameobj)` and passes the updated glycan object.
- `outputname(nameobj)`: Function. Accepts `nameobj` as an object. Converts the glycan object `nameobj` using `d3.hierarchy`, sorts the children by link number using `sortchildren(struc)` produces the name using `objecttoname(structure)`. 
- `addfirstmono()`: Function. Special case, while adding the first monosaccharide, since there is no path a special function is called.


*lib\d3glycanstructure.js*

Contains functions to draw the glycan in selected div.

- `d3glycanstructure(glycanname, drawdivID)`: Function. Accepts `glycanname` as a string with the CFG name and `drawdivID` as the id where you want to draw the glycan. Function utilizes D3.js extensively along with the other functions below to draw the glycan depending upon some of the settings selected by the user. Hence it uses some information obtained by form fields in the GUI.
- `getDepth(obj)`:  Function. Accepts `obj` as object. This is to get the total depth of the glycan tree. This is used to calculate the node separation and dimensions.
- `fixfucers(node,width)`: Function. Accepts `node` as object with the glycan object and `width` as a number for the width of the glycan drawing. This function is used to convert the fucose to right angles or depending upon what type of fucose drawing option is selected in the GUI. 
- `transformlinkText(d, i, linkRotate, fontSize, linkAbbr, symbsize)`: Function. Accepts `d` as the data object for the glycan, `i` for the index of the node, `linkRotate`  as boolean for if rotation of link is required, `linkAbbr` as boolean if linkage is abbreviated, `symbsize` as a number for the size of the symbols. This function rotates the link text according to user option selection. 
- `rotateFuc(d,o)`: Function. Accepts `d` as object for monosaccharide and `o` as object for orientation. This function rotates the fucose symbol so that the apex of the triangle connects to the link. 


*lib\deletemono.js*

Contains function to delete monosaccharide

- `deletemono(path)`: Function. Accepts `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click. This function recursively traverses to the selected node in the glycan tree comparing the `path` and deletes the children.


*lib\getGTCID.js*

Contains function to get the GlyTouCan ID from api.glycosmos.org

- `getGTCID()`: Function. Uses the name in the CFG name input field and generates the GlycoCT for all four reducing end possibilities i.e. alpha, beta, open and unknown. Fetches the GlyTouCan ID from api.glycosmos.org by using the `glycoct2wurcs`  api.


*lib\glycantoJSON.js*

Contains function to take a CFG name and convert it to a glycan tree JSON data structure.

- `glycantojson(glycanname)`: Function. Accepts `glycanname` as a string for the CFG name. The function first uses `bracketify()` function which produces a more balanced bracketing structure using `{`curly brackets`}`. It then uses a `parseTree()` function to produce a javascript object which is stringified and returned as JSON.


*lib\glycoct.js*

Contains functions to produce the GlycoCT from a CFG name.

- `cfgToGlycoCT()`: Function. Gets the name from the CFG name input field. Calls `glycantojson()` to convert the name. Calls `jsonToGlycoCT()`to produce the GlycoCT. Outputs the GlycoCT to the GUI.
- `jsonToGlycoCT(json)`: Function. Accepts `json` as JSON for the glycan tree produced by `glycantojson()`. Converts the glycan tree JSON to GlycoCT.
- `splitSubs(str)`: Function. Accepts `str` as a string for the string of substituents. The function splits the substituents by brackets and returns an array of substituents.


*lib\listmonos.js*

Contains a function to load the symbols for all monosaccharides in the GUI. Once all the monosaccharide symbols are fetched using `fetchSVG` global, and the `svgarr` is populated, it starts appending the monosaccharide buttons. It appends buttons for each monosaccharide in either the common monosaccharides region (`commonlist`) if they are in the `commonMonos` global array, or it appends all the symbols as buttons in the full list.

- `appendbutton(mono, divid)`: Function. Accepts `mono` as a string for monosaccharide type and `divid` as a string for the `<div>` `id` where you would like to append the button. 


*lib\listterminals.js*

Contains functions to append list of terminals in GUI and to add terminal templates to the prepared structure `childglycan` object.

- `appendTerminals()`: Function. Appends list of buttons for the terminal templates.
- `addTerminaltoChild(i)`: Function. Accepts `i` as a number for index. Retrieves the sequence from the `terminals` global array using the index `i`, converts to JSON and parses it and then adds it to the `childglycan`. Gives GUI output of the terminal sequence added.


*lib\objecttoname.js*

Contains functions to convert a glycan tree object to a glycan name in CFG format.

- `bracketcount`: Number. Counter to keep track of brackets opening and closing
- `objecttoname(obj,bindex,depth)`: Function. Accepts `obj` as object for the glycan tree object, `bindex` as number for the index of the child node. This function, takes the glycan tree object, and recursively generates the CFG name from it, applying appropriate branches. It is advisable to call `sortchildren()` on the  glycan tree before this function to get the correct name output with appropriately ordered child nodes.


*lib\replacemono.js*: 

Contains functions for replacing a structure component such as monosaccharide, or linkage.

- `replacemono(path, multiple)`: Function. Accepts arguments `path` as array of paths to the node generated by `d3.hierarchy` using `nodes.path(d)` method on click, and `multiple` as a boolean if multimode is on. Function recursively traverses the glycan object comparing the `path` and modifies the glycan at appropriate level. After this it calls the `outputname(nameobj)` and passes the updated glycan object.


*lib\savesvg.js*

Contains functions to save the svg.

- `replacecss(svgid)`: Function. Accepts arguments `svgid` which is the ID for the SVG to be saved. Replaces CSS using `svgStyle` in the given SVG.
- `replaceuse(svgid)`: Function. Accepts arguments `svgid` which is the ID for the SVG to be saved. Replaces svg `<use>` elements using `svgarr` in the given SVG.
- `savesvg(svgid)`: Function. Accepts arguments `svgid` which is the ID for the SVG to be saved. This function calls `replacecss()` and `replaceuse()` in the `svgid` and then creates a new `Blob` for the SVG to be saved. At the end it redraws the glycan so that the user may still interact with it.


*lib\sortchildren.js*

Contains functions to sort the children based on the link number

- `sortchildren(obj)`: Function. Accepts `obj` as an object for the glycan tree object. This function recursively traverses the glycan tree and sorts the children in the proper order of linkage. It returns the correctly sorted object.


*lib\startertemplates.js*

Contains functions to display the start templates. 

- `starttemplate(name)`: Function. Accepts `name` as a string for the sequence of the starter template. This function is called if the user uses the starter templates for N- and O- Glycans. It appends the appropriate starter template sequence to the name input element to produce the structure.


*lib\tracknames.js*

Contains functions to track CFG names and enables undo and redo.

- `tracknames(name)`: Function. Accepts arguments of `name` as a string which is the name to be tracked. This function pushes the name to the `trackname` global array, and increments the `tracknum` to keep a count of the tracking number. 
- `undo()`: Function. This function allows users to undo changes to the structure by moving appropriately backwards in the `trackname` global array using the `tracknum` to keep track of where to go in the index.
- `redo()`: Function. This function allows users to redo changes to the structure by moving appropriately forwards in the `trackname` global array using the `tracknum` to keep track of where to go in the index.
