let tryAgain = document.getElementById("tryAgainBtn"); 
let scoreDivEl = document.getElementById("scoreDiv")
let nameInputEl = document.getElementById("nameInput")
let submitScoreEl = document.getElementById("sumbitScoreBtn")
let mostRecentScore = localStorage.getItem("score")
scoreDivEl.textContent = "Your score: " + mostRecentScore;
let viewHighScores = document.getElementById("highScores");
let highscore = JSON.parse(localStorage.getItem("highscore")); 
let topDivEl = document.getElementById("top_div")


 

tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});

viewHighScores.addEventListener("click", function(){
    return window.location.assign("high_score_screen.html")
});


function saveHighScores(){
    let score = {
        score: mostRecentScore,
        name: nameInputEl.value
    }
    highscore.push(score); 
    localStorage.setItem("highscore", JSON.stringify(highscore))
};

console.log()  



submitScoreEl.addEventListener("click", function(){
    saveHighScores();
})







