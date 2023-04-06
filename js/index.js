
window.onload = () => {


  const gameIntro = document.querySelector("game-intro")
  const canvas = document.getElementById("canvas")

  const boardBg = new Image()
  boardBg.src = '/images/road.png'

  const ctx = canvas.getContext('2d')

  
  const animate = () => {
    ctx.drawImage(boardBg, 0, 0, 500, 700)

  }

  animate()

  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    console.log("Game started")
    animate()
    gameIntro.styles.display = "none"
    
  }





};
