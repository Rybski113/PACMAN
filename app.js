document.addEventListener('DOMContentLoaded', () => {
    const width = 28
    const grid = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    let score = 0
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
        } else if(layout[i] === 0) {
          squares[i].classList.add('pac-dot')
        } else if (layout[i] === 3) {
          squares[i].classList.add('power-pellet')
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
          !squares[pacmanCurrentIndex - width].classList.contains('wall'))
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
          !squares[pacmanCurrentIndex + width].classList.contains('wall'))
          pacmanCurrentIndex += width
          break
       
     }
    

     squares[pacmanCurrentIndex].classList.add('pac-man')



     // eating dots

     
     if(squares[pacmanCurrentIndex].classList.contains('pac-dot')) {
        squares[pacmanCurrentIndex].classList.remove('pac-dot')
        scoreDisplay.innerHTML = score
        score ++

       

     }
     powerPelletEaten()
     checkForLost()
     checkForWin() 
     
     
  }
  document.addEventListener('keyup', movePacman)



  
  
          //create ghosts using Constructors
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

  //all my ghosts
  ghosts = [
    new Ghost('blinky', 197, 250),
    new Ghost('pinky', 222, 400),
    new Ghost('inky', 481, 300),
    new Ghost('clyde', 585, 500)
    ]

  //draw my ghosts on the grid
  ghosts.forEach(ghost => {
    squares[ghost.currentIndex].classList.add(ghost.className)
    squares[ghost.currentIndex].classList.add('ghost')
    })

  //move the Ghosts randomly
  ghosts.forEach(ghost => moveGhost(ghost))


  function moveGhost(ghost) {
    const directions =  [-1, +1, width, -width]
    let direction = directions[Math.floor(Math.random() * directions.length)]

    ghost.timerId = setInterval(function() {
      //if the next squre your ghost is going to go to does not have a ghost and does not have a wall
      if  (!squares[ghost.currentIndex + direction].classList.contains('ghost') &&
        !squares[ghost.currentIndex + direction].classList.contains('wall') ) {
          //remove the ghosts classes
          squares[ghost.currentIndex].classList.remove(ghost.className)
          squares[ghost.currentIndex].classList.remove('ghost', 'scared-ghost')
          //move into that space
          ghost.currentIndex += direction
          squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      //else find a new random direction ot go in
      } else direction = directions[Math.floor(Math.random() * directions.length)]

      //if the ghost is currently scared
      if (ghost.isScared) {
        squares[ghost.currentIndex].classList.add('scared-ghost')
      }

      //if the ghost is currently scared and pacman is on it
      if(ghost.isScared && squares[ghost.currentIndex].classList.contains('pac-man')) {
        squares[ghost.currentIndex].classList.remove(ghost.className, 'ghost', 'scared-ghost')
        ghost.currentIndex = ghost.startIndex
        score +=100
        squares[ghost.currentIndex].classList.add(ghost.className, 'ghost')
      }
    checkForLost()
    }, ghost.speed)
  }

  
  
  


  function powerPelletEaten() {
     if (squares[pacmanCurrentIndex].classList.contains('power-pellet')) {
      squares[pacmanCurrentIndex].classList.remove('power-pellet')
      score += 10
      ghosts.forEach(ghost => ghost.isScared = true)
      setTimeout(unScareGhosts, 10000)
      
     }
  }

  function unScareGhosts() {
    ghosts.forEach(ghost => ghost.isScared = false)
  }

  function checkForWin() {
      if ( score === 274){
        document.removeEventListener('keyup', movePacman)
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        setTimeout(function(){ alert("You Won!"); }, 500)
        
    }
    }


    function checkForLost() {
      if (squares[pacmanCurrentIndex].classList.contains('ghost', 'blinky') &&
          !squares[pacmanCurrentIndex].classList.contains('scared-ghost')) 
       {
        ghosts.forEach(ghost => clearInterval(ghost.timerId))
        document.removeEventListener('keyup', movePacman)
        setTimeout(function(){ alert("Game Over"); }, 500)
      }
      }
    
    

   
     
    
  })
