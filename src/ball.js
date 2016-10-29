const ping = new Audio('sounds/pong-01.wav')
const pong = new Audio('sounds/pong-02.wav')
const pang = new Audio('sounds/pong-03.wav')


export default class Ball {
   	constructor(boardHeight, boardWidth) {
      this.boardWidth = boardWidth;
      this.boardHeight = boardHeight;
      this.x = this.boardWidth/2; // random x
      this.y = this.boardHeight/2; // random y
      this.vy = Math.floor(Math.random() * 12 - 6); // y direction
      this.vx = (7 - Math.abs(this.vy)); // x direction
      this.height = 10;
      this.width = 10;
      this.radius = 5;

   }
    draw(context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(this.x, this.y, 5, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();

  }
    paddleCollision (p1,p2) {

    if (this.vx > 0) {
      
      const inRightEnd  = this.x >= p2.x - p2.width;


      if (inRightEnd) {
        if(this.y >= p2.y + this.radius && this.y <=(p2.y + p2.height)){
          this.vx *= -1;
          ping.play();
        }
      }

    } else {
      const inLeftEnd = this.x <= p1.x + p1.width;

      if (inLeftEnd) {
        if (this.y >= p1.y + this.radius && this.y <= (p1.y + p1.height)) {
          this.vx *= -1;
          ping.play()
        }
      }
    }
  }

  bounce() {
    if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
        this.vy *= -1
        pong.play()
    }
    if (this.x <= 0 + this.radius) {
      pang.play();
    }
    if (this.x >=300 -this.radius) {
        pang.play();
        
    }
  }
  score (p1Score,p2Score) {

    if(this.x <= 0 + this.radius) {
      this.vy
      this.vx
      this.x = this.boardWidth
      this.y = this.boardHeight
      this.vx *= -1
      p1Score.score++
      //play.pang()

    } else if (this.x >= 300) {
      this.vy
      this.vx
      this.x = this.boardWidth
      this.y = this.boardHeight
      this.vx *= -1
      p2Score.score++
      //play.pang()
    }
  };

  render(context, p1, p2, p1Score, p2Score) {
     this.x += this.vx;
     this.y += this.vy;
     this.score(p1Score, p2Score);
     this.paddleCollision(p1, p2);
     this.bounce();
     this.draw(context);
     
     

}
}
