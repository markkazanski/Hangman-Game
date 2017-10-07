$(document).ready(function() {

//Initialize
var wordList = ["cat", "dog", "monkey", "bird", "ostritch"];
var wordToGuess = wordList[Math.floor(Math.random()*(4-1+1)+1)]; //pick random 1-4 change to length of wordlist

var wins = 0;
var guessesLeft = 7;

//Create Word Blanks
for ( var i=0; i < wordToGuess.length; i +=1){
    var blankLetter = $("<span>");
    blankLetter.addClass("letter");
    blankLetter.text("_");
    $("#word").append(blankLetter);
}

//Get user guess
document.onkeyup = function(event) {
    // Determines which key was pressed
    var userGuess = event.key;

    //Check if letter
    if( userGuess.length === 1 && /[a-zA-Z]/.test(userGuess) ){
        console.log(userGuess);

        $("#guessed").append(userGuess);
    }else{
        console.log("Not a letter");
    }
}

});