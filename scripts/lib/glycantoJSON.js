//takes the CFG glycan name and converts it into a glycan tree object and returns it as json
function glycantojson(glycanname) {

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

  //function to count number of occurances of a string 're' in a string 'str'
  const charcount = (str, re) => {
    return ((str || '').match(re) || []).length;
  };

  //The bracketify function is key. It adds the necessary brackets for perfect nesting of the structure
  glycanname = bracketify(glycanname);

  //bracketify version 2
  // this function basically balances out the bracketing to a more uniform pattern which can 
  // then be parsed into a tree structure
  function bracketify(name) {
    var c = '';
    var output = '';
    // var branchstarted = false;
    var count = 0;
    var branchcount = 0;
    var maxbranchcount = 0;
    var nextcb = 0; //The next closed bracket starting from the right going to the left
    var nextob = 0; //The next open bracket starting from the right going to the left
    var cbcount = 0; //the close bracket count for the branch

    for (i = name.length - 1; i >= 0; i--) {
      //go backwards from the right of the name

      c = name.charAt(i); // char at position i
      var nextcb = name.slice(0, i).lastIndexOf(')'); // position of last closed bracket from point i
      var nextob = name.slice(0, i).lastIndexOf('('); // position of last open bracket from point i
      var prevcb = name.indexOf(')', i + 1); // position of last closed bracket from point i
      var prevob = name.indexOf('(', i + 1); // position of last open bracket from point i


      if (c == ')') {
        //when the loop encounters a ) it starts a bunch of counters below:
        count++; //close brackets increase count // this count measures if open brackets are closed and allows resetting counters on branch end
        branchcount++; //close brackets increase branch counts
        output = ')' + output; //push the ) into the output name;
        if (count > maxbranchcount) {
          maxbranchcount = count; // count the maximum branching for the structure.
        }
        //console.log('pushed a:' + ')'); // what got pushed for debugging

        if (cbcount > 0) {
          cbcount--; // this reduces the cbcount if there is sub-branching within the structure - v.v.imp.
          //for example for: Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-2Mana1-6(Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-4(Fuca1-2Galb1-4(Fuca1-3)GlcNAcb1-2)Mana1-3)Manb1-4GlcNAcb1-4GlcNAcb-Sp12
        }

        //for bisecting glycans when the ) comes right after ( remove the added )
        if (name.charAt(i + 1) == '(') {
          output = output.slice(1); // for bisecting glycans since the ) was added by the )(( previous to it, we remove it.
          // console.log( 'we removed the ) for the bisecting');
        }
      } else if (c == '(') {
        count--; //every cb decreases the count
        branchcount--; //decrease the branchcount
        cbcount++; //increase the close bracket count

        if (c == '(' && prevob > prevcb && nextob > nextcb) {
          output = ')(' + output; // condition above checks if the bracket is a nested () thereby pushing only single )(  for it

        } else if (c == '(') {
          // console.log('condition where c is a (')

          // //following if statement is just for debugging
          // //copy paste it wherever you want to debug the bracketing
          // if (c === ')' || c === '(') {
          //   console.log('char i : \t' + i + '\t|\t the character is : ' + c);
          //   console.log('count : \t' + count + '| \t branchcount: \t' + branchcount + '| char : \t' + c +
          //     '| maxbranchcount : \t' + maxbranchcount);
          //   console.log('next ob ( occurs at : \t' + nextob);
          //   console.log('next cb ) occurs at : \t' + nextcb);
          //   console.log('cbcount: \t ' + cbcount);
          //   console.log('previous ob ( occurs at : \t' + prevob);
          //   console.log('previous cb ) occurs at : \t' + prevcb);
          // }
          // //End of debugging comments 

          if (nextcb === -1 && nextob === -1 && cbcount > 1) {
            var outputob = [...output.matchAll(/\(/g)]; //get an array of all open brackets
            var outputcb = [...output.matchAll(/\)/g)]; //get an array of all closed brackets
            output = ')' + ('('.repeat(outputcb.length - outputob.length)) + output;
          }
          else {
            output = ')' + '('.repeat(cbcount) + output; // for all other cb it pushes appropriate cb based on the cb count from the parent name.
            //this is why if there is subbranching you need to reduce the cbcount for every ) bracket within bracket.
            //     console.log('pushed a: )' + '('.repeat(cbcount));
          }
        }
        // //not sure if this does anything -- after this
        // else {
        //   output = c + output; // this may be redundant
        // } //before this not sure
      }
      //this is the important else which puts the rest of the string
      else {
        output = c + output; //if neither ( or ) push the character
      }

      //when the branch ends i.e. count == 0, reset the cbcount
      if (branchcount == 0 && count == 0) {
        maxbranchcount = 0;
        cbcount = 0;
      }
      // console.log(output); //output after brackets added by for loop
    }

    //balance out any close brackets with open brackets
    while (charcount(output, /\)/g) != charcount(output, /\(/g)) {
      output = '(' + output;
    }

    //    console.log('final output of bracketify : \t' + output);
    return output;
  }

  glycanname = glycanname.replace(/\(/g, '{');
  glycanname = glycanname.replace(/\)/g, '}');

  var glynamearray = glystrtoarray(glycanname);

  function glystrtoarray(str) {
    //split the glycannamenow to the array
    var arr = str.split(/(}|{|-[\d,\?]|-(?=[a-zA-z]))/g).filter(function (n) {
      return n !== '';
    });

    //clean up the array to add the linkages back to the glycan
    var newarr = [];
    for (i = 0; i < arr.length - 1; i++) {
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


  var glyjson = JSON.stringify(parseTree(glynamearray), 0, 4);

  // Answer from stackoverflow question answered by ryeballar modified for performance
  // https://stackoverflow.com/questions/50673284/delimited-text-to-nested-javascript-object-json

  function parseTree(arr) {
    return arr.reduce(parseTreeReducer, [])[0];
  }

  function parseTreeReducer(array, ch) {
    let indexBracket = array.lastIndexOf('{');
    if (ch === '{') {
      // is it an open bracket?
      // store it in the array stack!

      array.push(ch);
    } else if (ch === '}') {
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
      for (i = 0; i < chnosub.length; i++) {
        if (monos.includes(chnosub.substring(0, (chnosub.length - i))) === true) {
          link = chnosub.substring((chnosub.length - i), chnosub.length);
          linknum = +link.substr(-1)
          mono = chnosub.substring(0, (chnosub.length - i));
          break;
        }
      }

      //special cases
      //Case 1: Neu5,9Ac
      if (ch.search(/Neu5\,9Ac/g) > -1) {
        mono = "Neu";
        sub = '[5Ac][9Ac]';
        link = ch.replace(/Neu5\,9Ac/g, '');
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