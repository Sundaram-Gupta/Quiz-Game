const quesJSON = [
  {
    correctAnswer: 'Structured Query Language',
    answers: ['Structured Query Language', 'Strong Query Language', 'Structured Question Language', 'Stable Query Language'],
    question:
      "What does SQL stand for?",
  },
  {
    correctAnswer: 'SELECT',
    answers: ['OPEN', 'SELECT', 'GET', 'EXTRACT'],
    question:
      "Which SQL statement is used to extract data from a database?",
  },
  {
    correctAnswer: 'UPDATE',
    answers: ['MODIFY', 'SAVE', 'UPDATE', 'SAVE AS'],
    question:
      "Which SQL statement is used to update data in a database?",
  },{
    correctAnswer: 'DELETE',
    answers: ['EXIT', 'DELETE', 'REMOVE', 'COLLAPSE'],
    question:
      "Which SQL statement is used to delete data from a database?",
  }
];
const scoreEl = document.querySelector("#score");
const questionEl = document.querySelector("#question");
const optionsEl = document.querySelector("#options");
const nextBtn = document.querySelector("#next");

let score = 0;
let currentQuestion = 0;
updateScore();
showQuestion();

// adding eventListener to next button
nextBtn.addEventListener("click",nextQuestion)

function showQuestion(){
  const {question,correctAnswer,answers} = quesJSON[currentQuestion];
  
  questionEl.innerHTML = `Question ${currentQuestion+1} of 4: ${question}`;
  
  shuffleOption(answers);
  answers.forEach((opt)=>{
    const optionBtn = document.createElement("button");
    optionBtn.textContent = opt;
    optionsEl.appendChild(optionBtn);
    
    // Adding eventListener to Each button
    optionBtn.addEventListener("click", function(){
      // console.log(e.target.innerHTML);
      if(opt === correctAnswer){
        score++;
      }
      nextQuestion();
    })
  });
}

// nextQuestion
function nextQuestion(){
  if(currentQuestion == quesJSON.length-1){
    questionEl.textContent  = "Yaah! Quiz is completed";
    optionsEl.textContent = "";
    nextBtn.remove()
  }
  else{
    optionsEl.textContent = "";
    currentQuestion++;
    showQuestion();
  }
  updateScore();
}
        
  // UpdateScore
  function updateScore(){
  scoreEl.innerHTML = `Your Score: ${score} / ${quesJSON.length}`;
}

// shuffleOption
function shuffleOption(answers){
  for(let i=answers.length-1; i>=0; i--){
    let j = Math.floor(Math.random()*i+1);                  
    [answers[i],answers[j]] = [answers[j], answers[i]];
  }
}
