var questionOutput = document.getElementById('questionOutput');
var answerInput = document.getElementById('answerInput');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var newQuestion = document.getElementById('newQuestion');
var newAnswer = document.getElementById('newAnswer');
var newOpt1 = document.getElementById('newOpt1');
var newOpt2 = document.getElementById('newOpt2');
var newOpt3 = document.getElementById('newOpt3');
var newOpt4 = document.getElementById('newOpt4');
var Quiz = (function () {
    function Quiz() {
        this.progress = 0;
        this.grade = 0;
        this.questions = [
            {
                question: "WHAT COLOR IS THE SKY?",
                options: ["Green", "Blue", "Red", "Purple"],
                answer: "Blue"
            },
            {
                question: "WHICH METAL IS STRONGER THAN STEEL?",
                options: ["Platinum", "Gold", "Titanium", "Aluminum"],
                answer: "Titanium"
            },
            {
                question: "WHY IS THE EARTH ROUND?",
                options: ["Aliens", "Gods", "Humans", "Unknown"],
                answer: "Unknown"
            },
            {
                question: "WHAT DOES WATER TASTE LIKE?",
                options: ["Sprite", "Nothing", "Vodka", "Kool-aid"],
                answer: "Nothing"
            },
            {
                question: "WHICH IS THE FASTEST SUPERHERO?",
                options: ["Superman", "Batman", "Daredevil", "The Flash"],
                answer: "The Flash"
            }
        ];
    }
    Quiz.prototype.addQuestion = function () {
        this.questions.push({
            question: newQuestion.value,
            options: [newOpt1.value, newOpt2.value, newOpt3.value, newOpt4.value],
            answer: newAnswer.value
        });
    };
    return Quiz;
}());
var quiz = new Quiz();
var userAnswer = [];
function startQuiz() {
    questionOutput.innerHTML = quiz.questions[quiz.progress].question;
    opt1.innerHTML = quiz.questions[quiz.progress].options[0];
    opt2.innerHTML = quiz.questions[quiz.progress].options[1];
    opt3.innerHTML = quiz.questions[quiz.progress].options[2];
    opt4.innerHTML = quiz.questions[quiz.progress].options[3];
}
function nextQuestion() {
    if (quiz.progress < (quiz.questions.length - 1)) {
        quiz.progress += 1;
        userAnswer.push(answerInput.value);
        questionOutput.innerHTML = quiz.questions[quiz.progress].question;
        opt1.innerHTML = quiz.questions[quiz.progress].options[0];
        opt2.innerHTML = quiz.questions[quiz.progress].options[1];
        opt3.innerHTML = quiz.questions[quiz.progress].options[2];
        opt4.innerHTML = quiz.questions[quiz.progress].options[3];
    }
    else {
        userAnswer.push(answerInput.value);
        grade();
    }
}
function grade() {
    for (var i = 0; i < quiz.questions.length; i++) {
        if (quiz.questions[i].answer === userAnswer[i]) {
            quiz.grade += 1;
        }
    }
    alert("You scored " + quiz.grade + "/" + quiz.questions.length);
}
function addNewQuestion() {
    quiz.addQuestion();
}
