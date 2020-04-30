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
var scoreboard = document.getElementById("intial-form")
//timer
var totalTime = 75;
//current question
var questionNum = 0;

//hide score board at start
scoreboard.style.visibility = "hidden";

//array of questions and the answer options for each
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

//start game with button, start timer, display first question
start.addEventListener("click", function(){
    timer();
    displayQuestion(questionNum);
    start.style.visibility = "hidden";
    buttonEl.style.visibility = "visible";

});

//validates which answer choice is selected
var clickOption = function(){

    //stores answer as integer to match array
    var selectedOption = parseInt(this.getAttribute("data-index"));
    
    //correct answer
    if (selectedOption === correctAnswers[questionNum]){
        alert("correct"); 
    }
    //wrong answer- 5 sec off timer
    else{
        totalTime -= 5;
    }
    
    //move to next question
    questionNum += 1;
    
    if(questionNum >= questions.length){
        return;
    }

    questionEl.textContent = questions[questionNum];
    displayQuestion(questionNum);
}

for(var i = 0; i < elements.length; i++){
    elements[i].addEventListener("click", clickOption);
}

function timer(){

    //timer counts down by seconds stops and ends game if out of time or questions
    var timerInterval = setInterval(function(){
        totalTime --;
        timerEl.textContent = totalTime;
 
        if(totalTime === 0 || questionNum >= questions.length){
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

function endQuiz(){
    questionEl.textContent = ("Thanks for playing");
    buttonEl.style.visibility="hidden";
    scoreboard.style.visibility="visible";
}
 
//prompts user to enter their intials and saves with their score
function highScore(){
     var inputInitials = document.getElementById("intials").addEventListener("submit",function(event){
        event.preventDefault();
        var initials = [];
        var scores =[];
        localStorage.setItem("initials", inputInitials.value);
        scores.push(totalTime);
        initials.push(inputInitials);
        console.log(initials);
        console.log(scores);
     });


     
 }


