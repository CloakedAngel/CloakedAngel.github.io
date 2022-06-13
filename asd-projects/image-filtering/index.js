// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() {

  // Multiple TODOs: Call your apply function(s) here
  applyFilter()
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// setup variables

// TODO 1, 2 & 4: Create the applyFilter function here
 function applyFilter(){
  for (var i = 0; i < image.length; i++) {
    for (var c = 0; c < image[i].length; c++) {
        var rgbString = image[i][c];
        var rgbNumbers = rgbStringToArray(rgbString);  
        rgbNumbers[GREEN] = 0;
        rgbString = rgbArrayToString(rgbNumbers);  
    }
  }
}


// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function


// TODO 3: Create reddify function


// TODO 6: Create more filter functions


// CHALLENGE code goes below here
