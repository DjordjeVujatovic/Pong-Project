import Paddle from './Paddle'
import Board from './Board'
import {player1Keys, player2Keys} from './keys'
import Ball from './ball'
import Scoreboard from './Scoreboard'

export default class Game {
	constructor(id) {
         
      	   const canvas = document.getElementById('game');


      	   this.width = canvas.width;
           this.height = canvas.height;
           this.context = canvas.getContext('2d');
           this.board = new Board(this.height, this.width,'black');
           this.p1 = new Paddle(this.height, 10, 'white', player1Keys);
           this.p2 = new Paddle(this.height, this.width - 15, 'white', player2Keys);
           this.ball = new Ball(this.height/2, this.width/2, this.size, );
           this.p1Score = new Scoreboard (200, 90);
           this.p2Score = new Scoreboard (100, 90);

   }

   render() {
    this.board.render(this.context)
    this.p1.render(this.context)
    this.p2.render(this.context)
    this.p1Score.render(this.context)
    this.p2Score.render(this.context)
    this.ball.render(this.context, this.p1, this.p2, this.p1Score, this.p2Score);
   }
}
