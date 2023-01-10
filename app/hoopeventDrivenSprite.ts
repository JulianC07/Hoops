import {bballhoop} from './basketball hoop';
import {ctx} from './canvas';


/**
* This file demonstrates how to update a sprite
* in response to user events. In this case, we just
* run a function on each keypress which draws the sprite
* and updates the frame it's on!
**/

// Print some instructions on the canvas :)

// Make a player object to track position and frame
export let hoop = {
  frame : 1,
  x : 435,
  y : 195,
  w : 500,
  h : 500,
  msSinceLastFrame : 0,
  draw(){
    bballhoop.draw(this.x,this.y,this.frame, this.w, this.h);
  },
  move (elapsed : number) {
    this.msSinceLastFrame += elapsed;
    // Update frame count
     if (this.msSinceLastFrame > 60) {
      this.frame += 1;    
      this.msSinceLastFrame = 0;
    }    
  }
}



// Respond to keyboard events
/* window.addEventListener(
  'keydown',
  function (event) {
    // Advance one frame
    hoop.frame += 1; 
    // Erase the previous drawing (in most games you wouldn't bother
    // with this since you'll probably have an animation loop erasing
    // everything once a screen anyway...)
    ctx.clearRect(player.x,player.y,bballhoop.frameWidth,bballhoop.frameHeight);
    // Move our player based on the key...
    movePlayerForKey(event.key);
    // Draw the sprite!
    bballhoop.draw(player.x,player.y,player.frame);
  }
) */

function move (key) {
  if (key=='ArrowRight' || key=='l') {
      hoop.x += 0;
  } else if (key=='ArrowLeft' || key=='j') {
    hoop.x -= 0;
  } 
  }  {
    ctx.clearRect(100,400,300,50);
    
    
  }
  

