  import Obstacle from "./Obstacle.js";
  import Player from "./Player.js";

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
  
    //Canvas 
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');
    
    //Import road and car images 
    const roadImg = new Image();
    roadImg.src = "images/road.png";


    //Function to load both images and their position
    roadImg.onload = function(){
      ctx.drawImage(roadImg, 0, 0);
      player.drawCar();
      ctx.fillStyle = 'white';
      ctx.font = '25px Arial';
      ctx.fillText(`Score: ${scores}`, 35, 40);
    }

    //Interval for the score 
    let scores = 0; 
    setInterval(() => {
      scores ++;
      return scores; 
    }, 2500)

    //Initialization of the obstacles variable (class) 
    const obstacles = [new Obstacle(ctx)];

    //Initialization of the player variable (class) 
    const player = new Player(ctx);

    //Event listener for the car's movement
    document.addEventListener("keydown", function(event){
      if(event.code === 'ArrowLeft'){
        player.moveLeft();
      } else if (event.code === 'ArrowRight') {
        player.moveRight();
      }
      if(player.x < 0){
        player.x = 0; 
      } else if (player.x > 410 - player.width){
        player.x = 410- player.width;
      };
      ctx.drawImage(roadImg, 0, 0);
      player.drawCar();
      obstacles.forEach((obstacle) => obstacle.draw());
      ctx.fillStyle = 'white';
      ctx.font = '25px Arial';
      ctx.fillText(`Score: ${scores}`, 35, 40);
      })

    //Interval for creating obstacles every 2 seconds
    setInterval(() => obstacles.push(new Obstacle(ctx)),2000);
   
    //Interval for moving the obstacles
    const gameInterval = setInterval(() => {
      checkGameOver();
      obstacles.forEach((obstacle) => obstacle.moveObstacle());
      ctx.drawImage(roadImg, 0, 0);
      player.drawCar();
      obstacles.forEach((obstacle) => obstacle.draw());
      ctx.fillStyle = 'white';
      ctx.font = '25px Arial';
      ctx.fillText(`Score: ${scores}`, 35, 40);
    }, 100)

    //Crash check and Game Over
    function checkGameOver() {
      const crashed = obstacles.some(function (obstacle) {
        return player.crashWith(obstacle);
      });
      if (crashed) {
        clearInterval(gameInterval);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 450, 285, 200);
        ctx.fillStyle = 'red';
        ctx.font = '30px Arial';
        ctx.fillText(`GAME OVER!`, 40, 530);
        ctx.fillText(`Your final score: ${scores}`, 10, 600);
      }
    }
  }
};
