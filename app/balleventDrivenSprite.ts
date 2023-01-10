import {basketball} from './basketball';
import {canvas, ctx} from './canvas';
import {player} from './playereventDrivenSprite'
import {meter} from './ShotMeter'
import {scoreboard} from './Score'
/**
* This file demonstrates how to update a sprite
* in response to user events. In this case, we just
* run a function on each keypress which draws the sprite
* and updates the frame it's on!
**/

// Print some instructions on the canvas :)

// Make a player object to track position and frame
export let ball = {
  frame : 0,
  x : 135,
  vx : 0,
  vy : 0,
  y : 470,
  w : 40,
  h : 40,
  shot : false,
  in : false,
  msSinceLastFrame : 0,
  draw(){
   if(player.shooting) {
     if (!this.shot) {
       if (meter.x > 300 && meter.x < 600){
       ball.vy = -2.5;
       ball.vx = 1
       this.in = true
       this.shot = true;
       }
       else if(meter.x > 200 && meter.x < 300 || meter.x > 600 && meter.x < 700) {
         let chance = Math.random() * 4
         let round = Math.floor(chance)
         console.log(round)
         if (round > 2) {
            ball.vy = -2.5;
       ball.vx = 1
           this.in = true
           this.shot = true
         } else {
           ball.vy = -2.1;
       ball.vx = 1;
           this.shot = true
         }
       }
       else if(meter.x >= 150 && meter.x <= 200 || meter.x > 700 && meter.x < 750) {
          let chance = Math.random() * 10
         let round = Math.floor(chance)
         console.log(round)
         if (round > 8) {
            ball.vy = -2.5;
       ball.vx = 1
           this.in = true
           this.shot = true
         } else {
           ball.vy = -2;
       ball.vx = 1;
           this.shot = true
         }
       }
        else if(meter.x >= 100 && meter.x <= 150 || meter.x >= 750 && meter.x <= 800) {
        ball.vy = -2;
       ball.vx = 1;
           this.shot = true
     }
     }
    
     ball.frame += 1
     
     
   }
  if(this.shot) {
    ball.frame += 1
    ball.vy += 0.01
  }
    if (ball.x> 515) {
      if(ball.y >= 370) {ball.vy = 0; ball.y = 470 ; ball.x = 135; this.shot = false; player.shooting = false; player.frame = 1; 
                         if(this.in) {
                           this.in = false
                        scoreboard.score += 1   
                         }
                         } else {
        
        if (this.shot) { ball.vy = 2}
     
      }
      ball.vx = 0
    }
    ball.x += ball.vx
    ball.y += ball.vy
    basketball.draw(this.x,this.y,this.frame, this.w, this.h);
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
/*window.addEventListener(
  'keydown',
  function (event) {
    // Advance one frame
    ball.frame += 1; 
    // Erase the previous drawing (in most games you wouldn't bother
    // with this since you'll probably have an animation loop erasing
    // everything once a screen anyway...)
    ctx.clearRect(ball.x,ball.y,basketball.frameWidth,basketball.frameHeight);
    // Move our player based on the key...
    moveBallForKey(event.key);
    // Draw the sprite!
    basketball.draw(ball.x,ball.y,ball.frame);
  }
)*/

function move (key) {
  if (key=='ArrowRight' || key=='l') {
      ball.x += 0;
  } else if (key=='ArrowLeft' || key=='j') {
    ball.x -= 0;
  } 
  }  {
    ctx.clearRect(100,400,300,50);
    
    
  }

canvas.addEventListener("click",function(ev){

  
})

