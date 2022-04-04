var startBut = document.getElementById('startBut')
var startPage = document.getElementById('start')
var game = document.getElementById('game')
var hiScoresBut = document.getElementById('hiScoresButton')
var hiScoresPage = document.getElementById('hiScores')
var back = document.getElementById('back')

var question = document.getElementById('question')
var answers = document.getElementById('answers')
 
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

// object containing questions
// maybe name each question as a letter, then you can randomly select a letter from a string of those letters, guess this would work as numbers too
// questions are themselves objects containing the question text itself, as well as an array of answer choices, a-d, with text for each question
//
// function that writes to the game page e
// goes into object containing questions, 
// picks randomly, and navigates object to populate the question text and answer text.
// make it so that first one in list of answers is correct, add data attribute to it of data-correct
// but populate the UL randomly.
//
//
// this seems hard, should i just make it so i have the same question/answer choice order?
//
