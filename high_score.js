let tryAgain = document.getElementById("tryAgainBtn"); 
let highscoreBtn = document.getElementById("highScores");
let tableBody = document.getElementById("table_body");
let highscores = JSON.parse(localStorage.getItem("highscores"))



tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});


for (let i=0; i < highscores.length; i++){
  row= document.createElement("tr");
  tableBody.appendChild(row);
  scoreData = document.createElement("th");
  nameData = document.createElement("th");
  scoreData.textContent = highscores[i].score;
  nameData.textContent = highscores[i].name;
  row.appendChild(scoreData);
  row.appendChild(nameData);


}