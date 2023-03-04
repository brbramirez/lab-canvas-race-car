  import Obstacle from "./Obstacle.js";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    const obstacles = [new Obstacle(ctx)];

    const roadImg = new Image();
    roadImg.src = "images/road.png";
    const carImg = new Image();
    carImg.src = "images/car.png";
    let pos = 125;

    roadImg.onload = function(){
    ctx.drawImage(roadImg, 0, 0);
    ctx.drawImage(carImg, pos, 350, 30, 55);
  }

  document.addEventListener("keydown", function(event){
    if(event.code === 'ArrowLeft'){
      pos -= 10;
    } else if (event.code === 'ArrowRight') {
      pos += 10;
    }
    if(pos < 0){
      pos = 0; 
     } else if (pos > 410 - carImg.width){
      pos = 410- carImg.width;
    };

    ctx.drawImage(roadImg, 0, 0);
    ctx.drawImage(carImg, pos, 350, 30, 55);
    obstacles.forEach((obstacle) => obstacle.draw());
    })

    setInterval(() => {
      obstacles.forEach((obstacle) => obstacle.moveObstacle());
      ctx.drawImage(roadImg, 0, 0);
      ctx.drawImage(carImg, pos, 350, 30, 55);
      obstacles.forEach((obstacle) => obstacle.draw());
    }, 100)

    setInterval(() => obstacles.push(new Obstacle(ctx)),2000)
  }
};

