/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    UPW: 87,
    DOWNS: 83,
  }


  // Game Item Objects
  function factory(id){
    var object = {};
    object.id = id;
    object.x = parseFloat($(id).css("left"));
    object.y = parseFloat($(id).css("top"));
    object.width = $(id).width();
    object.height = $(id).height();
    object.speedX = 0;
    object.speedY = 0;
    return object;
  }

  var ball = factory("#gameItem")
  var paddle = factory("#paddle")
  var paddle2 = factory("#paddle2")

  // one-time setup
  let interval = setInterval(newFrame, FRAME_RATE, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);
  $(document).on('keyup', handleKeyUp);
  startBall;

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame(){
    moveObject(ball), moveObject(paddle), moveObject(paddle2)
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.UPW){
      paddle.speedY = -5;
    } else if (event.which === KEY.DOWNS){
      paddle.speedY += 5;
    } else if (event.which === KEY.UP){
      paddle2.speedY = -5;
    } else if (event.which === KEY.DOWN){
      paddle2.speedY += 5;
    }
  }
  
  function handleKeyUp(event) {
    if (event.which === KEY.UPW || KEY.DOWNS){
      paddle.speedY = 0;
    } else if (event.which === KEY.UP || KEY.DOWN){
      paddle2.speedY = 0;
    }
  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function startBall(){
    ball.x = 190;
    ball.y = 190;
    var randomNum = (Math.random() * 3 + 2) * (Math.random() > 0.5 ? -1 : 1);
    ball.speedY = randomNum;
    ball.speedX = ball.speedY;
  }

  function moveObject(item){
    item.x += item.speedX; // update the position along the x-axis
    item.y += item.speedY; // update the position along the y-axis
    $(item).css("left", item.x);
    $(item).css("top", item.y)
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
