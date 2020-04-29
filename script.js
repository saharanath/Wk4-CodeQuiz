var timerEl = document.getElementById("timer");
var start = document.getElementById("start-button");
var questionEl = document.getElementById("header");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var intials = document.getElementById("user-initials");
var buttonEl = document.getElementById("start-game");
var elements = document.getElementsByClassName("clickOption");
var totalTime = 75;
var questionNum = 0;
var selectedAnswers = [];

var questions =["The condition in an if/else statement is enclosed with in _______",
                "Arrays in JavaScript can be used to store ______",
                "Commonly used data types do not include ______",
                "String values must be enclosed within _____ when being assigned to variables"];

var answers =[question1= ["Quotes","Curly brackets","Parentheses","Square brackets"],
              question2= ["Numbers and strings","Other arrays","Booleans","All of the above"],
              question3= ["Strings","Booleans","Alerts","Numbers"],
              question4= ["Commas","Curly brackets","quotes","parentheses"],
            ];             
            
var correctAnswers = [2,3,2,2];

start.addEventListener("click", function(){
    timer();
    displayQuestion(questionNum);
    start.style.visibility = "hidden";
    buttonEl.style.visibility = "visible";
});

var clickOption = function(){
    if(questionNum >= questions.length){
        console.log(selectedAnswers);
        return;
    }

    var selectedOption = parseInt(this.getAttribute("data-index"));
    selectedAnswers.push(selectedOption);
    questionNum += 1;

    if(questionNum >= questions.length){
        console.log(selectedAnswers);
        return;
    }

    questionEl.textContent = questions[questionNum];
    displayQuestion(questionNum);

}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", clickOption);
}


function timer(){
    
    var timerInterval = setInterval(function(){
        totalTime --;
        timerEl.textContent = totalTime;
 
        if(totalTime === 0){
        clearInterval(timerInterval);
        endQuiz();
        return;

    }
    }, 1000);
}





function displayQuestion(index){

    questionEl.textContent=(questions[index]);
    option0.textContent=(answers[index][0]);
    option1.textContent=(answers[index][1]);
    option2.textContent=(answers[index][2]);
    option3.textContent=(answers[index][3]);
    
    

}

