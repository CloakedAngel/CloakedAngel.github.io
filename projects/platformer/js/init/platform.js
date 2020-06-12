(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the createPlatform Function to create platforms for the level. 
     * 
     * createPlatform() takes these arguments:
     *      
     *      createPlatform(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    function init(game) {
        let createPlatform = platform.create;

        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        createPlatform(0, game.world.height - 32, 3, 2);    // DO NOT DELETE

       createPlatform(60, 600, 0.6, 2.3); 
       createPlatform(380, 600, 2, 2.3);
       createPlatform(0, 400, 1.9);
       createPlatform(800, 510, 0.3);
       createPlatform(720, 430, 0.2);
       createPlatform(0, 370, 0.3);
       createPlatform(0, 260, 0.3);
       createPlatform(115, 200, 2);
       createPlatform(770, 110, 0.4, 0.8);
       createPlatform(770, 110, 0.01, 2.9);
       createPlatform(790, 110, 0.01, 2.9);
       createPlatform(810, 110, 0.01, 2.9);
       createPlatform(830, 110, 0.01, 2.9);
       createPlatform(850, 110, 0.01, 2.9);
       createPlatform(870, 110, 0.01, 2.9);
       createPlatform(890, 110, 0.01, 2.9);
        
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    }
    platform.init = init;
})(window);