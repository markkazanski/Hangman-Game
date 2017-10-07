var guessedLetters = [];
var userGuess = 0;
var letterIndex = -1;

function remove(array, element) { //remove element from array
    const index = array.indexOf(element);
    
    if (index !== -1) {
        array.splice(index, 1);
    }
}

$(document).ready(function() {

//Initialize
var wordList = ["cat", "dog", "monkey", "bird", "antelope", "bear", "elk", "rat", "mouse", "pigeon", "hamster", "marmoset"];
var wordToGuess = wordList[Math.floor(Math.random()*((wordList.length-1)-1+1)+1)]; //pick random 1-4 change to length of wordlist

console.log(wordToGuess);
var wordArray = Array(wordToGuess.length); //Create array same length as word

var wins = 0;
var guessesLeft = 7;

$("#guesses-left").text(guessesLeft);

$("#hangman-ascii").html(hangmanStages[guessesLeft]); //create initial hangman

//Create Word Blanks
for ( var i=0; i < wordToGuess.length; i +=1){
    var blankLetter = $("<span>");
    blankLetter.addClass("letter");
    blankLetter.addClass(`letter-${i}`);
    blankLetter.text("_");
    $("#word").append(blankLetter);
}

//Get user guess
document.onkeyup = function(event) {
    // Determines which key was pressed
    userGuess = event.key;

   // $("#instructions").css("display", "none");
   // $("#notification").css("display", "none");

//Check if Won
if( wordArray.join("") != wordToGuess ){  

    if( guessesLeft > 0 ){ //Is game over?
        //Check if letter
        if( userGuess.length === 1 && /[a-zA-Z]/.test(userGuess) ){
            console.log(userGuess);
            
            //Guessed before?
            if( guessedLetters.indexOf(userGuess) === -1 ){
                $("#guessed").append(userGuess);

                //check if correct guess
                if( wordToGuess.indexOf(userGuess) > -1 ){
                    console.log("Right");
                    //Reveal Letter
                    letterIndex = wordToGuess.indexOf(userGuess);
                    $(`#word .letter-${letterIndex}`).text( wordToGuess[letterIndex] );

                    wordArray[letterIndex] = wordToGuess[letterIndex]; //add correct letter to test array
                    console.log("Word Array: " + wordArray.toString());    

                    console.log("Letter index: " + letterIndex);

                    if( wordArray.join("") === wordToGuess ){ 
                         console.log("YOU WIN");
                         $("#notification").text( "YOU WIN" ); 
                         wins++;
                         $("#wins").text( wins );
                    }
                    

                }else{
                    console.log("Wrong");
                    guessesLeft--;
                    $("#guesses-left").text( guessesLeft );
                    $("#hangman-ascii").html(hangmanStages[guessesLeft]);
                }
            }
            guessedLetters.push(userGuess); //add guess to guessed letter list
        }else{
            console.log("Not a letter");
        }
    }else{
        $("#notification").html( "YOU LOSE" );
        console.log("YOU LOSE"); 
    }
}else{ //END Check if Won
    console.log("YOU WIN");
}
}


//RESTART
    $("#play-again").on("click", function(){
        //Initialize
        wordToGuess = wordList[Math.floor(Math.random()*((wordList.length-1)-1+1)+1)];
         wordArray = Array(wordToGuess.length); //Create array same length as word
         
         console.log(wordToGuess);
         
         guessesLeft = 7;

        $("#guesses-left").text(guessesLeft);

        $("#hangman-ascii").html(hangmanStages[guessesLeft]); //create initial hangman    
   
        $("#notification").empty();

        $("#word").empty();

        $("#guessed").empty();

        guessedLetters = [];
        userGuess = 0;
        letterIndex = -1;

        //Create Word Blanks
        for ( var i=0; i < wordToGuess.length; i +=1){
            var blankLetter = $("<span>");
            blankLetter.addClass("letter");
            blankLetter.addClass(`letter-${i}`);
            blankLetter.text("_");
            $("#word").append(blankLetter);
        }
    });

});