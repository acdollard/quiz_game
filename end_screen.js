let tryAgain = document.getElementById("tryAgainBtn"); 
let scoreDivEl = document.getElementById("scoreDiv")
let nameInputEl = document.getElementById("nameInput")
let submitScoreEl = document.getElementById("sumbitScoreBtn")
let highscore = JSON.parse(localStorage.getItem("highscore")); 
let mostRecentScore = localStorage.getItem("score")
scoreDivEl.textContent = "Your score: " + mostRecentScore;


tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});


function saveHighScores(){
    let score = {
        score: mostRecentScore,
        name: nameInputEl.value
    }
    highscore.push(score); 
    localStorage.setItem("highscore", JSON.stringify(highscore));

    console.log(highscore)

}   

submitScoreEl.addEventListener("click", function(event){
    event.preventDefault()
    saveHighScores();

})



