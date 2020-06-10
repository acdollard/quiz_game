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


function saveHighScores(){
    let playerEntry = {
        score: mostRecentScore,
        name: nameInputEl.value
    }
    console.log(playerEntry.name)
    debugger;
    highscores.push(playerEntry);
    localStorage.setItem("highscores", JSON.stringify(highscores));
};





submitScoreEl.addEventListener("click", function(){
    saveHighScores();
    window.location.assign("high_score_screen.html");
})







