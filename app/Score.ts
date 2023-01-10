import {basketball} from './basketball';
import {canvas, ctx} from './canvas';
import {player} from './playereventDrivenSprite'



export const scoreboard = {

  score : 0,


  draw() {
      ctx.font = '18pt Futura';
ctx.fillText(`Score: ${this.score}`,25,35)
    
  }

  
}