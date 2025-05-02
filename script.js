
const grid = document.querySelector('.grid');

function addBlock(){
     const block = document.createElement('div');
     block.classList.add('block');
     block.style.left = '50px'
     block.style.bottom = '50px'
     grid.appendChild(block)
}


addBlock()
