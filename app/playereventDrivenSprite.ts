import {bballplayer} from './basketball player';
import {ctx} from './canvas';


/**
* This file demonstrates how to update a sprite
* in response to user events. In this case, we just
* run a function on each keypress which draws the sprite
* and updates the frame it's on!
**/

// Print some instructions on the canvas :)

// Make a player object to track position and frame
export let player = {
  frame : 2,
  shooting : false,
  x : 10,
  y : 420,
  w : 200,
  h : 200,
   msSinceLastFrame : 0,
  draw(){
    bballplayer.draw(this.x,this.y,this.frame, this.w, this.h);
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
window.addEventListener(
  'keydown',
  function (event) {
    // Advance one frame
    if(player.shooting) { player.shooting = false; } else {player.shooting = true;
                                                        }
    player.frame += 1; 
    // Erase the previous drawing (in most games you wouldn't bother
    // with this since you'll probably have an animation loop erasing
    // everything once a screen anyway...)
    ctx.clearRect(player.x,player.y,bballplayer.frameWidth,bballplayer.frameHeight);
    // Move our player based on the key...
    movePlayerForKey(event.key);
    // Draw the sprite!
    bballplayer.draw(player.x,player.y,player.frame);
  }
) 

function movePlayerForKey (key) {
  if (key=='ArrowUp' || key=='i') {
    player.shooting = true;
    player.y -= 0;
  } else {
    ctx.clearRect(100,400,300,50);
   
  }
  
}
