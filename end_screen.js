let tryAgain = document.getElementById("tryAgainBtn"); 
let scoreDivEl = document.getElementById("scoreDiv")
let nameInputEl = document.getElementById("nameInput")
let submitScoreEl = document.getElementById("sumbitScoreBtn")
let mostRecentScore = localStorage.getItem("score")
scoreDivEl.textContent = "Your score: " + mostRecentScore;
let viewHighScores = document.getElementById("highScores");
let highscore = JSON.parse(localStorage.getItem("highscore")); 


 

tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
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

// viewHighScores.addEventListener("click", function(){
//     let scoreDiv = document.createElement("div");
//     scoreDiv.innerText = JSON.parse(localStorage.getItem("highscore"));
//     document.appendChild.scoreDiv;

// })






