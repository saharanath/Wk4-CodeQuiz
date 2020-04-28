var timerEl = document.getElementById("timer");
var start = document.getElementById("start-button");
var questionEl = document.getElementById("header");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var intials = document.getElementById("user-initials");

var totalTime = 75;
var elapsedTime = 0;
var questionNum = 0;
var questions =["The condition in an if/else statement is enclosed with in _______",
                "Arrays in JavaScript can be used to store ______",
                "Commonly used data types do not include ______",
                "String values must be enclosed within _____ when being assigned to variables"];

var answers =[question1= ["Quotes","Curly brackets","Parentheses","Square brackets"],
             question2= ["Numbers and strings","Other arrays","Booleans","All of the above"],
             question3= ["Strings","Booleans","Alerts","Numbers"],
             question4= ["Commas","Curly brackets","quotes","parentheses"]
            ];             
            
var correctAnswers = [2,3,2,2];

start.addEventListener("click", function(){
    setTime();
    newQuiz();
    start.style.visibility = "hidden";
});



function setTime(){
    
    var timerInterval = setInterval(function(){
        totalTime--;
        timerEl.textContent = totalTime;

        if(totalTime === 0){
        clearInterval(timerInterval);
        endQuiz();
        return;
        }
    }, 1000)
}

function newQuiz(){
    questionEl.textContent = (questions[0]);


};


function decreaseTimer (){
    timerEl.text(totalTime);
    while(elapsedTime < 75){
        elapesedTime += 1;
    }
    endQuiz();
    totalTime = totalTime - elapsedTime;
    timerEl.textContent = totalTime;

}


for( var i = 0; i < questions.length ; i++){

    questionEl.text(questions[i]);
    option0.text(answers[i][0]);
    option1.text(answers[i][1]);
    option2.text(answers[i][2]);
    option3.text(answers[i][3]);

}


