import {basketball} from './basketball';
import {canvas, ctx} from './canvas';
import {player} from './playereventDrivenSprite'


export const meter = {
x : 100,
vx : 2,
  draw() {

    if (this.x > 800) {
      this.vx = -2 - Math.random() * 1

    } else if (this.x < 100) {
      this.vx =  2 + Math.random() * 1
    }
    if (!player.shooting) {
    this.x += this.vx}

    
ctx.fillStyle = 'black'
    ctx.fillRect(100,50,700,50)
    ctx.fillStyle = 'red'
    ctx.fillRect(150,55,600,40)
     ctx.fillStyle = 'yellow'
    ctx.fillRect(200,55,500,40)
     ctx.fillStyle = 'green'
    ctx.fillRect(300,55,300,40)

     ctx.fillStyle = 'white'
    ctx.fillRect(this.x,55,5,40)
  },


  
}