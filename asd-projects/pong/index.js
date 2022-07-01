/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  const KEY = {
    ENTER: 13,
    UP: 38,
    DOWN: 40,
    UPW: 87,
    DOWNS: 83,
  }
  const BOARD_HEIGHT = $("#board").height();
  const BOARD_WIDTH = $("#board").width();
  

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
  startBall();

  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame(){
    moveObject(ball);
    moveObject(paddle);
    moveObject(paddle2);
    wallCollision(ball);
    wallCollision(paddle);
    wallCollision(paddle2);
  }

  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if (event.which === KEY.UPW){
      paddle.speedX = -8;
    } else if (event.which === KEY.DOWNS){
      paddle.speedX = 8;
    } else if (event.which === KEY.UP){
      paddle2.speedX = -8;
    } else if (event.which === KEY.DOWN){
      paddle2.speedX = 8;
    }
  }
  
  function handleKeyUp(event) {
    if (event.which === KEY.UPW){
      paddle.speedX = 0;
    } else if (event.which === KEY.DOWNS){
      paddle.speedX = 0;
    } else if (event.which === KEY.UP){
      paddle2.speedX = 0;
    } else if (event.which === KEY.DOWN){
      paddle2.speedX = 0;
    }
  }

  function wallCollision(item){
     if ((item.x + item.width) >= BOARD_WIDTH){
      item.speedX *= -1;
    } 
     if ((item.y + item.height) >= BOARD_HEIGHT){
      item.speedY *= -1;
    } 
     if (item.x <= 0){
      item.speedX *= -1;
    } 
     if (item.y <= 0){
      item.speedY *= -1;
    }
  }
    
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  
  function startBall(){
    ball.x = 190;
    ball.y = 190;
    var randomNum = Math.ceil(Math.random() * 4)
    if (randomNum === 1){
      ball.speedY = 5;
      ball.speedX = 5;
    }
    if (randomNum === 2){
      ball.speedY = -5;
      ball.speedX = 5;
    }
    if (randomNum === 3){
      ball.speedY = 5;
      ball.speedX = -5;
    }
    if (randomNum === 4){
      ball.speedY = -5;
      ball.speedX = -5;
    }
  }

  function moveObject(item){
    item.x += item.speedX; // update the position along the x-axis
    item.y += item.speedY; // update the position along the y-axis
    $(item.id).css("left", item.y)
    $(item.id).css("top", item.x)
  }

  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }

}
