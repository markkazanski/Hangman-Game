$(document).ready(function() {

//Initialize
var wordList = ["cat", "dog", "monkey", "bird", "ostritch"];
var wordToGuess = wordList[Math.floor(Math.random()*(4-1+1)+1)]; //pick random 1-4 change to length of wordlist

var wins = 0;
var guessesLeft = 7;
var guessedLetters = [];

$("#guessesLeft").text(guessesLeft);

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

    if( guessesLeft > 0 ){ //Is game over?
        //Check if letter
        if( userGuess.length === 1 && /[a-zA-Z]/.test(userGuess) ){
            console.log(userGuess);

            $("#guessed").append(userGuess);
            
            //Guessed before?
            if( guessedLetters.indexOf(userGuess) === -1 ){

                //check if correct guess
                if( wordToGuess.indexOf(userGuess) > -1 ){
                    console.log("Right");
                }else{
                    console.log("Wrong");
                    guessesLeft--;
                    $("#guessesLeft").text( guessesLeft );
                }
            }
            guessedLetters.push(userGuess); //add guess to guessed letter list
        }else{
            console.log("Not a letter");
        }
    }
}

});