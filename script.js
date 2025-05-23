
const grid = document.querySelector('.grid');
const scoreDisplay = document.querySelector('#message');
const blockWidth  = 100;
const blockHeight = 20;
let timerId;
let boardWidth = 600
let boardHeight = 300;
let ballDiameter = 20;
const userStart = [230, 10]
let currentPosition = userStart;
const ballStart = [270, 30];
const ballCurrentPosition = ballStart;
let xDirection = 2;
let yDirection = 2;
let score = 0;

class Block{
     constructor(xAxis, yAxis){
          this.bottomLeft = [xAxis, yAxis]
          this.bottomRight = [xAxis + blockWidth, yAxis]
          this.topLeft = [xAxis, yAxis + blockHeight]
          this.topRight = [xAxis + blockWidth. yAxis + blockHeight]
     }
}

const blocks = [
     new Block(10, 270),
     new Block(120, 270),
     new Block(230, 270),
     new Block(340, 270),
     new Block(450, 270),

     new Block(10, 240),
     new Block(120, 240),
     new Block(230, 240),
     new Block(340, 240),
     new Block(450, 240),

     new Block(10, 210),
     new Block(120, 210),
     new Block(230, 210),
     new Block(340, 210),
     new Block(450, 210),

     new Block(10, 180),
     new Block(120, 180),
     new Block(230, 180),
     new Block(340, 180),
     new Block(450, 180),
]

function addBlock(){
  
     for(let i = 0; i < blocks.length; i++){
              const block = document.createElement('div');
               block.classList.add('block');
               block.style.left = blocks[i].bottomLeft[0] + 'px'
               block.style.bottom = blocks[i].bottomLeft[1] + 'px'
               grid.appendChild(block)
     }

}

addBlock()

const user = document.createElement('div')
user.classList.add('user')
drawUser()
grid.appendChild(user)

function drawUser(){
     user.style.left = currentPosition[0] + 'px'
     user.style.bottom = currentPosition[1] + 'px'
}

function drawBall(){
     ball.style.left = ballCurrentPosition[0] + 'px ' 
     ball.style.bottom = ballCurrentPosition[1] + 'px ' 
}

function moverUser(e){
     switch(e.key) {
          case 'ArrowLeft' :
               if(currentPosition[0] <= 0) return
               currentPosition[0] -= 10
               drawUser()
               break;
          case 'ArrowRight' :
               if(currentPosition[0] >= (boardWidth - blockWidth)) return
               currentPosition[0] += 10
               drawUser()
               break;
     }
}

document.addEventListener('keydown', moverUser)

const ball = document.createElement('div');
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)


function moveBall(){
     ballCurrentPosition[0] += xDirection
     ballCurrentPosition[1] += yDirection
     drawBall()
     checkForCollision()
}

timerId = setInterval(moveBall, 5)

function checkForCollision(){
     //check for block collission
     for(let i = 0; i < blocks.length; i++){

          if(
               (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) && (ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1]
          ){
               const allBlocks = Array.from(document.querySelectorAll('.block'))
               
               allBlocks[i].classList.remove('block');
               blocks.splice(i, 1)
               changeDirection()
               score++
               scoreDisplay.textContent = score;
          }
     }



     if(ballCurrentPosition[0] >= (boardWidth - ballDiameter) || ballCurrentPosition[1] >= (boardHeight - ballDiameter) || ballCurrentPosition[0] <= 0){
          changeDirection()
     }

     //check for user collission

     if(
          (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] + blockWidth)
          &&
          (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight)
     ){
          changeDirection();
     }


     //Check for game over
     if(ballCurrentPosition[1] <= 0){
          clearTimeout(timerId)
          scoreDisplay.textContent = 'Lost Game'
          document.removeEventListener('keydown')
     }
}


function changeDirection(){
     if(xDirection === 2 && yDirection === 2){
          yDirection = -2;
          return;
     }

     if(xDirection == 2 && yDirection == -2){
          xDirection = -2;
          return
     }

     if(xDirection == -2 && yDirection == -2){
          yDirection = 2
          return
     }

     if(xDirection == -2 && yDirection ==2 ){
          xDirection = 2;
          return
     }
}



