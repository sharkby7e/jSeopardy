var startBut = document.getElementById('startBut')
var startPage = document.getElementById('start')
var game = document.getElementById('game')
var hiScoresBut = document.getElementById('hiScoresButton')
var hiScoresPage = document.getElementById('hiScores')
var back = document.getElementById('back')
 
startBut.addEventListener("click", gameLoop)
hiScoresBut.addEventListener("click", showHiScores)
back.addEventListener("click", showStartPage)





function gameLoop() {
  startPage.setAttribute("style", "display: none")
  hiScoresBut.setAttribute("style", "display: none")
}

function showHiScores() {
  hiScoresPage.setAttribute("style", "display: flex") 
  startPage.setAttribute("style", "display: none")
  hiScoresBut.setAttribute("style", "display: none")
}

function showStartPage() {
  hiScoresBut.setAttribute("style", "display: flex")
  startPage.setAttribute("style", "display: flex")
  hiScoresPage.setAttribute("style", "display: none") 
}
