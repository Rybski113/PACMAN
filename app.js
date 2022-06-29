document.addEventListener('DOMContentLoaded', () => {
    const width = 28
    const grid = document.querySelector('.grid')
    const layout = [
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,3,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,4,4,4,4,4,4,4,4,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,2,2,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      4,4,4,4,4,4,0,0,0,4,1,2,2,2,2,2,2,1,4,0,0,0,4,4,4,4,4,4,
      1,1,1,1,1,1,0,1,1,4,1,2,2,2,2,2,2,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,1,1,1,1,1,0,1,1,4,1,1,1,1,1,1,1,1,4,1,1,0,1,1,1,1,1,1,
      1,0,0,0,0,0,0,0,0,4,4,4,4,4,4,4,4,4,4,0,0,0,0,0,0,0,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,0,1,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,1,
      1,3,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,3,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,
      1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,
      1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
      1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1
    ]
    // 0 - pac-dots
    // 1 - wall
    // 2 - ghost-lair
    // 3 - power-pellet
    // 4 - empty
  
    const squares = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < layout.length; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
        squares.push(square)
  

        //add layout to the board
        if(layout[i] === 1) {
          squares[i].classList.add('wall')
        }
      }
    }
    createBoard()
    
    
  
    //draw pacman onto the board
    let pacmanCurrentIndex = 490
    squares[pacmanCurrentIndex].classList.add('pac-man')
  
    //draw ghost on the board
    let blinkyCurrentIndex = 197
    squares[blinkyCurrentIndex].classList.add('blinky')

    
  
    //get the coordinates of pacman or blinky on the grid with X and Y axis
    function getCoordinates(index) {
      return [index % width, Math.floor(index / width)]
    }
  
  
    //move blinky
    function moveBlinky() {
      const directions =  [-1, +1, +width, -width]
      let ghostimerId  = NaN
      let direction = directions[Math.floor(Math.random() * directions.length)]
  
      ghostimerId = setInterval(function() {
        console.log(blinkyCurrentIndex)
        if  (!squares[blinkyCurrentIndex + direction].classList.contains('wall')) {
            //remove the ghosts classes
            squares[blinkyCurrentIndex].classList.remove('blinky')
            //move into that space
  
            const [blinkyX, blinkyY] = getCoordinates(blinkyCurrentIndex)
            const [pacManX, pacManY] = getCoordinates(pacmanCurrentIndex)
            const [blinkyNextX, blinkyNextY] = getCoordinates(blinkyCurrentIndex + direction)
  
            function isXCoordCloser() {
              if ((blinkyNextX - pacManX) > (blinkyX - pacManX)){
                return true
              } else return false
           }
  
            function isYCoordCloser() {
              if ((blinkyNextY - pacManY) > (blinkyY - pacManY)) {
                return true
              } else return false
            }
            if (isXCoordCloser() || isYCoordCloser()) {
              blinkyCurrentIndex += direction
              squares[blinkyCurrentIndex].classList.add('blinky')
  
            } else {
              squares[blinkyCurrentIndex].classList.add('blinky')
              direction = directions[Math.floor(Math.random() * directions.length)]
          }
          squares[blinkyCurrentIndex].classList.add('blinky')
          } else direction = directions[Math.floor(Math.random() * directions.length)]
  
        if(squares[blinkyCurrentIndex].classList.contains('pac-man')) clearInterval(ghostimerId)
  
      }, 200)
    }


    //move pacman
  function movePacman(e) {
     squares[pacmanCurrentIndex].classList.remove('pac-man')
     
     switch(e.keyCode) {
       case 37:
        if (pacmanCurrentIndex % width !==0 &&
          !squares[pacmanCurrentIndex -1].classList.contains('wall'))
          pacmanCurrentIndex -=1
          if (squares[pacmanCurrentIndex -1] === squares[363]) {
            pacmanCurrentIndex = 391
          }
          break
       case 38:
        if (pacmanCurrentIndex - width >= 0 && 
          !squares[pacmanCurrentIndex].classList.contains('wall'))
          pacmanCurrentIndex -= width
          break
       case 39:
        if (pacmanCurrentIndex % width < width-1 &&
          !squares[pacmanCurrentIndex +1].classList.contains('wall'))
          pacmanCurrentIndex +=1
          if (squares[pacmanCurrentIndex +1] === squares[392]) {
            pacmanCurrentIndex = 364
          }
          break
       case 40:
        if (pacmanCurrentIndex % width < width * width &&
          !squares[pacmanCurrentIndex].classList.contains('wall'))
          pacmanCurrentIndex += width
          break
       
     }
    

     squares[pacmanCurrentIndex].classList.add('pac-man')
  }
  document.addEventListener('keyup', movePacman)
  moveBlinky()



// Rest of the ghosts
// Create ghosts using Constructors

class Ghost {
  constructor(className, startIndex, speed) {
    this.className = className
    this.startIndex = startIndex
    this.speed = speed
    this.currentIndex = startIndex
    this.isScared = false
    this.timerId = NaN
  }
}

ghosts = [
    new Ghost('pinky', 222, 400),
    new Ghost('inky', 505, 300),
    new Ghost('clyde', 530, 500)
]

//Draw my ghosts onto the grid
  ghosts.forEach(ghost => {
  squares[ghost.currentIndex].classList.add(ghost.className)
  squares[ghost.currentIndex].classList.add('ghost')
  })

  //move ghosts randomly
     ghosts.forEach(ghost=> moveGhost(ghost))

   function moveGhost() {
    const ghostDirections = [-1, +1, width, +width]
    let ghostDirection = ghostDirections[Math.floor(Math.random() * ghostDirections.length)]
   }
    
  })




    