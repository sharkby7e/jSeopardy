var startBut = document.getElementById('startBut')
var startPage = document.getElementById('startPage')
var hiScoreBut = document.getElementById('hiScoreBut')
var hiScorePage = document.getElementById('hiScorePage')
var backBut = document.getElementById('backBut')
var gamePage = document.getElementById('gamePage')

var question = document.getElementById('question')
var answers = document.getElementById('answers')
 
startBut.addEventListener("click", gameLoop)
hiScoreBut.addEventListener("click", showHiScores)
backBut.addEventListener("click", showStartPage)

function gameLoop() {
  startPage.setAttribute("style", "display: none")
  hiScoreBut.setAttribute("style", "display: none")
  gamePage.setAttribute("style", "display: flex; flex-direction: column; align-items:center")
  
}

function showHiScores() {
  hiScorePage.setAttribute("style", "display: flex") 
  startPage.setAttribute("style", "display: none")
  hiScoreBut.setAttribute("style", "display: none")
}

function showStartPage() {
  hiScoreBut.setAttribute("style", "display: flex")
  startPage.setAttribute("style", "display: flex")
  hiScorePage.setAttribute("style", "display: none") 
}

var questions = [question1, question2, question3, question4, question5]
var question1 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "],
  correct: "C"
}

var question2 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
}
console.log(question2.answers[0])

var question3 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
}

var question4 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
}

var question5 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
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
