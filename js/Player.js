class Player {
    constructor(ctx){
        this.x = 125;
        this.y = 350;
        this.width = 30;
        this.height = 55;
        this.ctx = ctx;
    }
    
    draw(){
    const carImg = new Image();
    carImg.src = "images/car.png";
    roadImg.onload = function(){
        ctx.drawImage(carImg, this.x, this.y, this.width, this.height);
      }
    }
}
export default Player;