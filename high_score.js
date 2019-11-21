let tryAgain = document.getElementById("tryAgainBtn"); 
let highscoreBtn = document.getElementById("highScores");
let tableBody = document.getElementById("table_body");
let highscore = JSON.parse(localStorage.getItem("highscore"))


tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});


for (let i=0; i < highscore.length; i++){
  row= document.createElement("tr");
  tableBody.appendChild(row);
  scoreData = document.createElement("th");
  nameData = document.createElement("th");
  scoreData.textContent = highscore[i].score;
  nameData.textContent = highscore[i].name;
  row.appendChild(scoreData);
  row.appendChild(nameData);


}