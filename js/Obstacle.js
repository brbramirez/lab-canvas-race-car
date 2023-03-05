class Obstacle {
    constructor(ctx){
        this.x = Math.floor(Math.random() * 220);
        this.y = 0;
        this.width = 60;
        this.height = 30;
        this.color = 'red';
        this.ctx = ctx;
    }
    
    draw(){
        this.ctx.fillStyle = this.color;
        this.ctx.fillRect(this.x, this.y, this.width, this.height);
      }

      moveObstacle(){
          this.y +=10;
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
    }
    export default Obstacle;