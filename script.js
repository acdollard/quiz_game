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

    startButtonEl.parentNode.removeChild(startButtonEl);
    Food.textContent = "";
    renderQuestions()
})




function renderQuestions(){
    
 var titleDiv= document.createElement("div")
 titleDiv.textContent = questions[0].title;
 mainDiv.appendChild(titleDiv); 


  var li1 = document.createElement("div");
  var button1 = document.createElement("button");
  button1.textContent = questions[0].choices[0];
  mainDiv.appendChild(li1);
  mainDiv.appendChild(button1);


  var li2 = document.createElement("div");
  var button2 = document.createElement("button");
  button2.textContent = questions[0].choices[1];
  mainDiv.appendChild(li2);
  mainDiv.appendChild(button2); 

  var li3 = document.createElement("div");
  var button3 = document.createElement("button");  
  button3.textContent = questions[0].choices[2]; 
  mainDiv.appendChild(li3); 
  mainDiv.appendChild(button3); 

  var li4 = document.createElement("div");
  var button4 = document.createElement('button');
  button4.textContent = questions[0].choices[3]; 
  mainDiv.appendChild(li4); 
  mainDiv.li4.appendChild(button4); 
  }
  



Food.setAttribute("style", "text-size:25px", "text-align:center")



//one function to render questions, another to change the data-index of the elements




