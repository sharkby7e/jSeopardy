var startBut = document.getElementById('startBut')
var startPage = document.getElementById('startPage')
var hiScoreBut = document.getElementById('hiScoreBut')
var hiScorePage = document.getElementById('hiScorePage')
var backButMain = document.getElementById('backButMain')
var backButEnd = document.getElementById('backButEnd')
var gamePage = document.getElementById('gamePage')
var endPage = document.getElementById('endPage')
var scoreDisp = document.getElementById('scoreDisp')
var hiScoreSubmit = document.getElementById('hiScoreSubmit')
var hiScoreInput = document.getElementById('hiScoreInput')
var hiScoreBoard = document.getElementById('hiScoreBoard')

var question = document.getElementById('question')
var answers = document.getElementById('answers')


var score = 0
var scores = []

var clock = document.getElementById('clock')        
var timeLeft 


// TODO:
//  - add form to endPage
//    - style form
//  - localStorage score saving
//  - localStorage populate hiScorePage
//    - style hiScorePage
 
//event listeners
startBut.addEventListener("click", gameLoop)
hiScoreBut.addEventListener("click", showHiScores)
backButMain.addEventListener("click", showStartPage)
backButEnd.addEventListener("click", showStartPage)
hiScoreSubmit.addEventListener("click", function(e){
  e.preventDefault()
  storeNewHiScores()
})

//question objects
var question1 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "],
  correct: "C"
}
var question2 = {
  question: "Which of the following symbol sets are used to contain properties of an Object",
  answers: ["A. ()", "B. {}", "C. (())", "D. <obj></obj>"],
  correct: "B"
}  

// console.log(question2.correct === question2.answers[1].charAt(0))

var question3 = {
  question: "What is the name of Jerome's cat?" ,
  answers: ["A. Garfield", "B. Gigil", "C. Basil", "D. Farley"],
  correct : "D"
}

var question4 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
}

var question5 = {
  question: "Which of the following would be the best way to remove the last element of an array arr?",
  answers: ["A. arr.push()", "B. arr.removeLastElement()", "C. arr.pop()", "D. arr.lastElement = null "]
}

//needed to hit all of the questions
var questionBlank = {
  question: "",
  answers: ["","","",""]
}

var questionsKeep = [question1, question2, question3, question4, question5, questionBlank] //for replayability
var questions = [] // for replayability  

function gameLoop() {
  endPage.setAttribute("style", "display: none")
  startPage.setAttribute("style", "display: none")
  hiScoreBut.setAttribute("style", "display: none")
  gamePage.setAttribute("style", "display: flex; flex-direction: column; align-items:center")
  timeLeft = 75
  populateScoreBoard()
  questions = []
  for (let i = 0; i < questionsKeep.length; i++) { // for replayability
    questions.push(questionsKeep[i])  
  }
  countdown()
  populateGameBoard()
}

function populateGameBoard() {
  while(answers.firstChild){
    answers.removeChild(answers.firstChild)
  }
  var quest = questions.shift()
  if (questions.length==0){
    showEndScreen()
  }
  question.textContent= quest.question
  var ans = quest.answers
  ans.forEach(function(element){
    var li = document.createElement("li") 
    if(quest.correct === element.charAt(0)){
      li.setAttribute("data-correct", "true")
    }
    li.textContent = element
    answers.appendChild(li)
  })
}

answers.addEventListener("click", function(e){
  var element = e.target 
  if (element.getAttribute("data-correct") === "true"){
    clock.textContent = "✅"
  }else{
    clock.textContent = "❌"
    timeLeft -= 10
  }
  // console.log(questions)
  populateGameBoard()

})

function countdown() {
  clock.textContent = timeLeft
    var timeInterval = setInterval(function() {
    if(question.textContent == ""){
      clearInterval(timeInterval)
      // showEndScreen()
    }
    if (timeLeft > 0) {
      timeLeft--;
      clock.textContent = timeLeft
    } else {
      clearInterval(timeInterval)
      showEndScreen()
    }
  }, 1000)
}
function populateScoreBoard() {
  // pull scores from storage, and parse into scores 
  var storedScores = JSON.parse(localStorage.getItem("storedScores"))
  console.log(storedScores)
  if(storedScores !== null){
    scores = storedScores
  }
  scores.forEach(function(obj){
    var sbName = obj.name
    var sbScore = obj.score
    var newRow = document.createElement("tr")
    var newName = document.createElement("td")
    var newScore = document.createElement("td")
    newName.textContent = sbName
    newScore.textContent = sbScore
    newRow.appendChild(newName)
    newRow.appendChild(newScore)
    hiScoreBoard.appendChild(newRow)
  })
}

function storeNewHiScores() {
  // new object from form {name: farley, score: score}
  var storeName = hiScoreInput.value.trim()
  var newScorePair = {
    name: storeName,
    score: score
  }
  scores.push(newScorePair)
  localStorage.setItem("scores",JSON.stringify(scores))
  // populate table with a loop through the stringified object
  showHiScores()
}

function showEndScreen(){
  while(answers.firstChild){      //had to do this because wasn't clearing when time ran out
    answers.removeChild(answers.firstChild)
  }
  score = timeLeft
  scoreDisp.textContent = score

  endPage.setAttribute("style", "display: flex")
  hiScoreBut.setAttribute("style", "display: flex")

  gamePage.setAttribute("style", "display: none")
}

function showHiScores() {
  hiScorePage.setAttribute("style", "display: flex") 

  startPage.setAttribute("style", "display: none")
  hiScoreBut.setAttribute("style", "display: none")
  endPage.setAttribute("style","display: none")
}

function showStartPage() {
  hiScoreBut.setAttribute("style", "display: flex")
  startPage.setAttribute("style", "display: flex")

  gamePage.setAttribute("style", "display: none")
  endPage.setAttribute("style", "display: none")
  hiScorePage.setAttribute("style", "display: none") 
}



// for every element in questions array
// maybe write next 5 lines to a function
// write the element.question to question 
// iterate thru element.answers to add to ul a new li element
// also check to see if first character in each matches element.answer
// if so, add data attribute answer true
// else add data attribute answer false //maybe this is unnecessary

// ul element needs event listener
// then you can target event and look for data attribute true
// if true 
//   add checkmark to screen
// else 
//   add x to screen and change timeleft to -10
// move on to next question

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
