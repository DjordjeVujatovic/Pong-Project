export default class Board {
	constructor(height, width, color='black') {
		this.height = height;
		this.width = width;
		this.color = color;
		//console.log(this.width, this.height, this.color);
	}
	drawBoard (context) {
		context.fillStyle = this.color;
		context.fillRect(0,0,
                         this.width,
                         this.height);
	}
	drawLine(context) {
      context.setLineDash([10, 10]);
      context.beginPath();
      context.moveTo(this.width / 2, 0);
      context.lineTo(this.width / 2, this.height);
      context.strokeStyle = "white";
      context.stroke();
	}
	render (context) {
		this.drawBoard(context);
		this.drawLine(context);
	}
}