
//creating variables
var startButtonEl = document.getElementById("start_button");
var titleDiv = document.getElementById("title_div");
var Food = document.getElementById("food");
var listEl = document.getElementById("list");
var questionsDiv = document.getElementById("questions_div");
var score = 0; 
var li1 = document.createElement("li");
var button1 = document.createElement("button");
var li2 = document.createElement("li");
var button2 = document.createElement("button");
var li3 = document.createElement("li");
var button3 = document.createElement("button");  
var li4 = document.createElement("li");
var button4 = document.createElement("button");
var rightOrWrong = document.getElementById("right_or_wrong"); 
var timerEl = document.getElementById("timeLeft");
var initials = document.createElement("input");
var submitButton = document.createElement("button");
let viewHighScores = document.getElementById("highScores");



//on click of start button, clear text from the title div, remove start button, invoke renderQuestions function, start timer
startButtonEl.addEventListener("click", function(){
    startButtonEl.parentNode.removeChild(startButtonEl);
    Food.textContent = "";
    timer();
    startQuiz();
})


//display question in main div, render list items and buttons for each question and populate them with text from questions array
function startQuiz(){
    
  var i = 0;
    
  Food.textContent = questions[i].title;
  
  button1.textContent = questions[i].choices[0];
  listEl.appendChild(li1);
  li1.appendChild(button1);

  button2.textContent = questions[i].choices[1];
  listEl.appendChild(li2);
  li2.appendChild(button2); 

  button3.textContent = questions[i].choices[2]; 
  listEl.appendChild(li3); 
  li3.appendChild(button3); 

  button4.textContent = questions[i].choices[3]; 
  listEl.appendChild(li4); 
  li4.appendChild(button4);  


//eventListener to cycle through questions
questionsDiv.addEventListener("click", function() {
    if(event.target.matches("button")){
    rightOrWrong.textContent = "";

     //this if statement checks to see if the user got the quesion right and adds to the score and displays right or wrong accordingly 
     if (event.target.textContent === questions[i].answer){
        score = score+10; 
        rightOrWrong.textContent = "Right!" 
    } else {rightOrWrong.textContent = "Wrong!"}

    
    if(i >= questions.length -1){
        //put score in local storage
        localStorage.setItem("score", score);
        console.log("your score: " + score);
        // return window.location.assign("end_screen.html");
    }
        //cycling through questions on each click  
        i++;
        Food.textContent = questions[i].title;
        button1.textContent = questions[i].choices[0];
        button2.textContent = questions[i].choices[1];
        button3.textContent = questions[i].choices[2];
        button4.textContent = questions[i].choices[3];
    }
});
  }





//timer element
function timer(){
    var seconds = questions.length * 5;
    var countdown = setInterval( function() {
        timerEl.textContent = seconds;
        seconds--; 

        if (seconds === 0) {
            timerEl.textContent = "";
            clearInterval(countdown);
            return window.location.assign("end_screen.html");

          }
    }, 1000
    )
}

viewHighScores.addEventListener("click", function(){
    return window.location.assign("high_score_screen.html")
});







Food.setAttribute("style", "text-size:25px", "text-align:center")
rightOrWrong.setAttribute("style", "text-size:10px", "color:grey", "text-align:center")



//create empty object
//push input.value and score into it onclick
//store in local storage 







