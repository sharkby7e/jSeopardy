var startBut = document.getElementById('startBut')
var startPage = document.getElementById('start')
var game = document.getElementById('game')
var hiScores = document.getElementById('hiScores')
 
startBut.addEventListener("click", function(){
  gameLoop()
})


function gameLoop() {
  startPage.setAttribute("style", "display: none")
}


function showHiScores() {

}
