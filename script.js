//title text.content = title of questions
//<unordered list> with 4 buttons
//button text.content is questions.choices

//click button, appears the first in a list of arrays (change text content of div)
//move through an object of arrays per each click
//on click, values disappear and are replaced by next item 

//set interval timer on click
//if timer runs out, show high score 

//scores are increased by adding right answers and answering in a shorter amount of time (if functions for 
// correct answer, and for submitting within a set increment)



//creating variables
var startButtonEl = document.getElementById("start_button");
var mainDiv = document.getElementById("content_container");
var Food = document.getElementById("food");



//on click of start button, change text content of main div to first question w/ buttons 

startButtonEl.addEventListener("click", function(){
  var newDiv = document.createElement("div");
  newDiv.textContent = questions[0].answer; 
  mainDiv.appendChild(newDiv);
  Food.textContent = "";
  startButtonEl.parentNode.removeChild(startButtonEl);
  
})




