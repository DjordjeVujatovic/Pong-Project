export default class Ball {
   	constructor() {
      this.x = 150; // random x
      this.y = 80; // random y
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
      
      const inRightEnd  = this.x >= p2.x;


      if (inRightEnd) {
        if(this.y >= p2.y && this.y <=(p2.y + p2.height)){
          this.vx *= -1;
        }
      }

    } else {
      const inLeftEnd = this.x <= p1.x + p1.width;

      if (inLeftEnd) {
        if (this.y >= p1.y && this.y <= (p1.y + p1.height)) {
          this.vx *= -1;
        }
      }
    }
  }

  bounce() {
    if (this.y <= 0 + this.radius || this.y >= 150 - this.radius) {
        this.vy *= -1
    }
    if (this.x <= 0 + this.radius || this.x >=300 -this.radius) {
        this.vx *= -1
    }
  }
     render(context, p1, p2) {
     this.x += this.vx;
     this.y += this.vy;
     this.paddleCollision(p1, p2);
     this.bounce();
     this.draw(context);
     
     

}
}
