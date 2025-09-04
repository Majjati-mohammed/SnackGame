 const canvas = document.getElementById("game");
 const ctx = canvas.getContext("2d");

const box = 20;
let snake = [{ x: 9 * box, y: 9 * box }];
let direction = "RIGHT";

document.addEventListener("keydown", changeDirection);

function changeDirection(event) {
  if (event.key === "ArrowLeft" && direction !== "RIGHT") direction = "LEFT";
  else if (event.key === "ArrowUp" && direction !== "DOWN") direction = "UP";
  else if (event.key === "ArrowRight" && direction !== "LEFT") direction = "RIGHT";
  else if (event.key === "ArrowDown" && direction !== "UP") direction = "DOWN";
}

let food = {
  x: Math.floor(Math.random() * 40) * box,
  y: Math.floor(Math.random() * 30) * box
};

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  
  for (let i = 0; i < snake.length; i++) {
    ctx.fillStyle = "lightgreen";
    ctx.fillRect(snake[i].x, snake[i].y, box, box);
  }

  for (let i = 0; i < snake.length; i++) {
    if(snake[i].x != food.x || snake[i].y != food.y){
  ctx.fillStyle = "red";
  ctx.fillRect(food.x, food.y, box, box);
    }
  }

  let head = { x: snake[0].x, y: snake[0].y };

  function disx(){
    return (food.x)-(head.x);
  }
  function disy(){
    return (food.y)-(head.y);
  }
 
  if (direction === "LEFT") head.x -= box;
  if (direction === "RIGHT") head.x += box;
  if (direction === "UP") head.y -= box;
  if (direction === "DOWN") head.y += box;
  

  for (let i = 0; i < snake.length; i++) {
  if (head.x === snake[i].x && head.y === snake[i].y) {
    clearInterval(game);
    alert("Game Over!");
    return;
  }
}
  
  if (head.x === food.x && head.y === food.y) {
   
    food = {
      x: Math.floor(Math.random() * 20) * box,
      y: Math.floor(Math.random() * 20) * box
    };
    
  } else {
    snake.pop(); 
  }
  snake.unshift(head);


  if(head.x >= canvas.width){
    head.x = 0;
  }
  else if(head.x+box <=0 ){
    head.x = canvas.width;
  }
  if(head.y >= canvas.height){
    head.y = 0
  }
  else if(head.y+box <= 0){
  head.y = canvas.height;
  }
}

setInterval(draw, 130);
     
