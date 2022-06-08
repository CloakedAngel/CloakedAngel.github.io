/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
}
  var positionX = 0; //  x-coordinate 
  var speedX = 0; //  speed along the x-axis
  var positionY = 0; //  y-coordinate 
  var speedY = 0; //  speed along the y-axis
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    redrawGameItem(), repositionGameItem(), borderPatrolX(), borderPatrolY()
  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.ENTER){
      console.log('enter');
    } else if (event.which === KEY.LEFT){
      speedX = -5;
    } else if (event.which === KEY.UP){
      speedY = -5;
    } else if (event.which === KEY.RIGHT){
      speedX = 5;
    } else if (event.which === KEY.DOWN){
      speedY = 5;
    }
  }

    function handleKeyUp(event) {
      if (event.which === KEY.ENTER){
        console.log('enter');
      } else if (event.which === KEY.LEFT){
        speedX = 0;
      } else if (event.which === KEY.UP){
        speedY = 0;
      } else if (event.which === KEY.RIGHT){
        speedX = 0;
      } else if (event.which === KEY.DOWN){
        speedY = 0;
      }
    }

    function borderPatrolX() {
      if (positionX < 3) {
      positionX = -1.5;
      } else if (positionX > 390) {
        positionX = 391;
      } 
    }

    function borderPatrolY() {
      if (positionY < 3) {
      positionY = -1.5;
      } else if (positionY > 390) {
        positionY = 391;
      } 
    }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////


  function repositionGameItem(){
    positionX += speedX; // update the position along the x-axis
    positionY += speedY; // update the position along the y-axis
  }
  
  function redrawGameItem() {
    $("#walker").css("left", positionX);    // draw in the new location, positionX pixels away from the "left"
    $("#walker").css("top", positionY);    // draw in the new location, positionY pixels away from the "left"
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
