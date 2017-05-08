console.log("Main JS is Up");

var h = document.getElementById(Height);
var c = document.getElementById(Character);




function tree (theTreeArray) {

     for(var i = 0; i < theTreeArray.length; i++) {
      var h1= (h-i-1)(" ") + (2*i + 1)(c);
      console.log(theTreeArray);
     }
}

// Invoke the function and pass in the array

//  tree();


/*

spaceFormula= (height - i - 1)
characterFormula= (2i + 1)

Tree = spaceFormula + characterFormula

Tree= (height-i-1)(" ") + (2i + 1)(character)

*/
// iteratingVariable or iteratingCounter **clear understanding of using variable i