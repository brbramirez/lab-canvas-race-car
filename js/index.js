window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector('#canvas');
    const ctx = canvas.getContext('2d');

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
    })

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let posX = Math.floor(Math.random() * 410 - 70);
    let posY = 0;
    let boolean = true;

    // function drawObstacle(){
    // let obstacleWidth = 80;
    // let obstacleHeight = 10;
    // ctx.fillStyle = 'red';
    // ctx.fillRect(posX, posY, obstacleWidth, obstacleHeight);
    // }
    // function moveDown(){
    //   posY += 1;
    // }

    
    //let posX = Math.floor(Math.random * 410);
    //let posY = 0;
    //ctx.fillStyle = 'red';
    //ctx.fillRect(20, 20, 20, 50);



  }
};

