let tryAgain = document.getElementById("tryAgainBtn"); 
let scoreDivEl = document.getElementById("scoreDiv")
let nameInputEl = document.getElementById("nameInput")
let submitScoreEl = document.getElementById("sumbitScoreBtn")
let mostRecentScore = localStorage.getItem("score")
scoreDivEl.textContent = "Your score: " + mostRecentScore;
let highscores = JSON.parse(localStorage.getItem("highscores"))
let score = JSON.parse(localStorage.getItem("score")); 
let topDivEl = document.getElementById("top_div")
let viewHighScores= document.getElementById("highScores")

if (highscores == null) {

    highscores = [];
}

console.log("Last score: " + score);
console.log("Highscores: " + highscores)
 

tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});

viewHighScores.addEventListener("click", function(){
    return window.location.assign("high_score_screen.html")
});

//function to create an playerEntry object, with the player's score and name, add it to the array of scores, and re-save to local storage
function saveHighScores(){
    let playerEntry = {
        score: mostRecentScore,
        name: nameInputEl.value
    }
    console.log(playerEntry.name);
    if(nameInputEl.value == ""){
        alert("Must enter a name!")

    } else
    highscores.push(playerEntry);
    localStorage.setItem("highscores", JSON.stringify(highscores));
    console.log("howdy")

};





submitScoreEl.addEventListener("click", function(){
    saveHighScores();
    debugger;
    //still not changing screens when clicked for some reason
    return window.location.assign("high_score_screen.html")
})







