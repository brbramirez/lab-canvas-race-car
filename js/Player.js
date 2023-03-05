class Player {
    constructor(ctx){
        this.x = 125;
        this.y = 350;
        this.width = 30;
        this.height = 55;
        this.ctx = ctx;
    }
    
    drawCar(){
    const carImg = new Image();
    carImg.src = "images/car.png";
    this.ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
    }

    moveRight(){
      this.x += 10;
    }
    moveLeft(){
        this.x -= 10;
    }

    left() {
        return this.x;
      }
    right() {
        return this.x + this.width;
      }
    top() {
        return this.y;
      }
    bottom() {
        return this.y + this.height;
      }
     
    crashWith(obstacle) {
       return !(this.bottom() < obstacle.top() || this.top() > obstacle.bottom() || this.right() < obstacle.left() || this.left() > obstacle.right());
      }

}
export default Player;