export default class Ball {
   	constructor() {
      this.x = 50; // random x
      this.y = 50; // random y
      this.vy = Math.floor(Math.random() * 12 - 6); // y direction
      this.vx = (7 - Math.abs(this.vy)); // x direction
   }
    draw(context) {
    context.fillStyle = 'white';
    context.beginPath();
    context.arc(100, 100, 5, 0, 2 * Math.PI, true);
    context.fill();
    context.closePath();
  }
     render(context) {
     this.x += this.vx;
     this.y += this.vy;
     this.draw(context);
}
}
