var tryAgain = document.getElementById("tryAgainBtn"); 
var mostRecentScore = localStorage.getItem("score")
scoreDivEl = document.getElementById("scoreDiv")

scoreDivEl.textContent = "Your score: " + mostRecentScore;


tryAgain.addEventListener("click", function(){
    return window.location.assign("quiz_game.html");
});