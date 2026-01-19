const questions = [
  {
    question: "Capital of India?",
    options: ["Mumbai", "Delhi", "Chennai"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5"],
    answer: "4"
  }
];

let currentQuestionIndex = 0;
let selectedAnswers = null
let score = 0;

function loadQuestion() {
    if(currentQuestionIndex < questions.length) {
        return {
            question: questions[currentQuestionIndex].question,
            options: questions[currentQuestionIndex].options
        }
    }
    return null;
}

function selectAnswer(selectedOption) {
    selectedAnswers = selectedOption;
    return selectedAnswers;
}

function nextQuestion() {
  if(selectedAnswers === questions[currentQuestionIndex].answer) {
    score++;
  }
  currentQuestionIndex++
}

function showResult() {
  return {
    score: score,
    total: questions.length
  }
}

function resetQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  selectedAnswers = null;
}

console.log(loadQuestion());
console.log(selectAnswer("Delhi"));
console.log(selectedAnswers);
console.log(nextQuestion());
console.log(loadQuestion());
console.log(selectAnswer("4"))
console.log(nextQuestion())
console.log(showResult());