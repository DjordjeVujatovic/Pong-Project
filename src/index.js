import './game.css';
import Game from './Game';
import keys from './keys';

var game = new Game('game');
const fps = 30;
// self invoking function
(function gameLoop() {
   game.render();
   setTimeout(gameLoop, 1000/fps);
}());

