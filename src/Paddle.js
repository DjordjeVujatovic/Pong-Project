export default class Paddle {
    constructor(boardHeight, x, color, keys) {

        this.speed = 10;
        this.keys = keys;
        this.width = 5;
        this.height = 60;
        this.color = color;
        this.x = x;
        this.y = (boardHeight / 2) - (this.height / 2);
       

        document.addEventListener('keydown', event => this.keyListener(event));
    }
keyListener(event){
     switch(event.keyCode){
        case this.keys.up:
        this.moveUp()
        break;
        case this.keys.down:
        this.moveDown()
        break;
        default: return;
         }
    }    
                
 moveUp(){
    if(this.y>= 5){
        this.y -= this.speed
     }
  }
 moveDown(){
    if(this.y<= 85){
      this.y += this.speed
        }
    }
    render(context){
        context.fillStyle = this.color;
        context.fillRect(
            this.x, this.y,
            this.width, this.height
         );
     }
 }