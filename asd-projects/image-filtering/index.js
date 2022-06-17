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
  applyFilter(reddify);
  applyFilterNoBackground(decreaseBlue);
  applyFilterNoBackground(increaseGreenbyBlue);
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////


// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){
  for (var i = 0; i < image.length; i++) {
    for (var c = 0; c < image[i].length; c++) {
        var rgbString = image[i][c];    
        var rgbNumbers = rgbStringToArray(rgbString);  //stores new array
        filterFunction(rgbNumbers);                    //alters array
        rgbString = rgbArrayToString(rgbNumbers);      //converts array back
        image[i][c] = rgbString                        //string equals image again
    }
  }
}

// TODO 7: Create the applyFilterNoBackground function
function applyFilterNoBackground(filterFunction){
  var background = image[1][1];
  for (var i = 0; i < image.length; i++) {
    for (var c = 0; c < image[i].length; c++) {
        var rgbString = image[i][c];   
        if (background != image[i][c]){ 
          var rgbNumbers = rgbStringToArray(rgbString);  //stores new array
          filterFunction(rgbNumbers);                    //alters array
          rgbString = rgbArrayToString(rgbNumbers);      //converts array back
          image[i][c] = rgbString                        //string equals image again
      }
    }
  }
}

// TODO 3: Create reddify function
function reddify(rgbNumbers){
  rgbNumbers[RED] = 200;
}

// TODO 6: Create more filter functions
function decreaseBlue(rgbNumbers){
  rgbNumbers[BLUE] = keepInBounds(rgbNumbers[BLUE] - 50)
}

function increaseGreenbyBlue(rgbNumbers){
  rgbNumbers[GREEN] = keepInBounds(rgbNumbers[BLUE] + rgbNumbers[GREEN])
}

// TODO 5: Create the keepInBounds function
function keepInBounds(x){
  var answer = Math.min(Math.max(0, x), 255);
    return answer
  }

// CHALLENGE code goes below here
function smudge(){
  for (var i = 0; i < image.length; i++) {
    for (var c = 0; c < image[i].length; c++) {
        var rgbString = image[i][c];
    }
  }
}
