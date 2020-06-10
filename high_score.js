let tryAgain = document.getElementById("tryAgainBtn"); 
let highscoreBtn = document.getElementById("highScores");
let tableBody = document.getElementById("table_body");
let highscores = JSON.parse(localStorage.getItem("highscores"))



tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});


//sort the highscores array into a new array by score in descending order
let sortedScores = highscores.slice(0);
sortedScores.sort(function(a,b) {
  return b.score - a.score;
});
console.log('by date:');
console.log(sortedScores);


//looop through list of players and scores, retrieved from local storage
for (let i=0; i < sortedScores.length; i++){

  //check to make sure each entry has a name and score
  if(sortedScores[i].score !== null && sortedScores[i].name !== "") {
    row= document.createElement("tr");
    tableBody.appendChild(row);
    scoreData = document.createElement("th");
    nameData = document.createElement("th");
    scoreData.textContent = sortedScores[i].score;
    nameData.textContent = sortedScores[i].name;
    row.appendChild(scoreData);
    row.appendChild(nameData);


  }


}