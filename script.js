
const grid = document.querySelector('.grid');
const blockWidth  = 100;
const blockHeight = 20

class Block{
     constructor(xAxis, yAxis){
          this.bottomLeft = [xAxis, yAxis]
          this.bottomRight = [xAxis + blockWidth, yAxis]
          this.topLeft = [xAxis, yAxis + blockHeight]
          this.topRight = [xAxis + blockWidth. yAxis + blockHeight]
     }
}

const blocks = [
     new Block[10, 270]

]

function addBlock(){
 
     for(let i = 0; i < block.length; i++){
              const block = document.createElement('div');
               block.classList.add('block');
               block.style.left = block[i].bottomLeft[0]
               block.style.bottom = block[i].bottomLeft[1]
               grid.appendChild(block)

     }

}


addBlock()
