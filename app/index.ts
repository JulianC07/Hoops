import './canvas';
import { ball } from './balleventDrivenSprite';
import { player } from './playereventDrivenSprite';
import { hoop } from './hoopeventDrivenSprite';
import { addAnimation, startAnimation } from './animation';
import {meter} from './ShotMeter'
import {scoreboard} from './Score'
addAnimation(ball);
startAnimation();

addAnimation(hoop);
startAnimation();

addAnimation(player);
startAnimation();

addAnimation(meter);
startAnimation();

addAnimation(scoreboard)
startAnimation()

