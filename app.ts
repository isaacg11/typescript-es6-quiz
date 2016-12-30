
let questionOutput = <HTMLElement>document.getElementById('questionOutput');
let answerInput = <HTMLInputElement>document.getElementById('answerInput');
let opt1 = <HTMLElement>document.getElementById('opt1');
let opt2 = <HTMLElement>document.getElementById('opt2');
let opt3 = <HTMLElement>document.getElementById('opt3');
let opt4 = <HTMLElement>document.getElementById('opt4');

let newQuestion = <HTMLInputElement>document.getElementById('newQuestion');
let newAnswer = <HTMLInputElement>document.getElementById('newAnswer');
let newOpt1 = <HTMLInputElement>document.getElementById('newOpt1');
let newOpt2 = <HTMLInputElement>document.getElementById('newOpt2');
let newOpt3 = <HTMLInputElement>document.getElementById('newOpt3');
let newOpt4 = <HTMLInputElement>document.getElementById('newOpt4');

class Quiz {
  public progress
  public grade
  public questions

  public addQuestion() {
    this.questions.push({
      question: newQuestion.value,
      options:[newOpt1.value, newOpt2.value, newOpt3.value, newOpt4.value],
      answer: newAnswer.value
    })
  }

  constructor() {
    this.progress = 0;
    this.grade = 0;

    this.questions = [
      {
        question:"WHAT COLOR IS THE SKY?",
	      options:["Green","Blue","Red","Purple"],
	      answer:"Blue"
      },
      {
	      question:"WHICH METAL IS STRONGER THAN STEEL?",
	      options:["Platinum","Gold","Titanium","Aluminum"],
	      answer:"Titanium"
      },
      {
	      question:"WHY IS THE EARTH ROUND?",
	      options:["Aliens","Gods","Humans","Unknown"],
	      answer:"Unknown"
      },
      {
	      question:"WHAT DOES WATER TASTE LIKE?",
	      options:["Sprite","Nothing","Vodka","Kool-aid"],
	      answer:"Nothing"
      },
      {
	      question:"WHICH IS THE FASTEST SUPERHERO?",
	      options:["Superman","Batman","Daredevil","The Flash"],
	      answer:"The Flash"
      }]
    }
  }

  let quiz = new Quiz();
  let userAnswer = [];

  function startQuiz() {
    questionOutput.innerHTML = quiz.questions[quiz.progress].question;
    opt1.innerHTML = quiz.questions[quiz.progress].options[0];
    opt2.innerHTML = quiz.questions[quiz.progress].options[1];
    opt3.innerHTML = quiz.questions[quiz.progress].options[2];
    opt4.innerHTML = quiz.questions[quiz.progress].options[3];
  }

  function nextQuestion() {

    if(quiz.progress < (quiz.questions.length - 1)) {
      quiz.progress += 1;
      userAnswer.push(answerInput.value);

      questionOutput.innerHTML = quiz.questions[quiz.progress].question;
      opt1.innerHTML = quiz.questions[quiz.progress].options[0];
      opt2.innerHTML = quiz.questions[quiz.progress].options[1];
      opt3.innerHTML = quiz.questions[quiz.progress].options[2];
      opt4.innerHTML = quiz.questions[quiz.progress].options[3];
    } else {
      userAnswer.push(answerInput.value);
      grade();
    }
  }

  function grade() {
    for(let i = 0; i < quiz.questions.length; i ++) {
      if(quiz.questions[i].answer === userAnswer[i]){
			  quiz.grade += 1;
		  }
    }

    alert(`You scored ${quiz.grade}/${quiz.questions.length}`);

  }

  function addNewQuestion() {
    quiz.addQuestion();
  }
