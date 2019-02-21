// Choose a theme for your game! 
// Use key events to listen for the letters that your players type.
// Display the following on the page:
// Press any key to get started!
// Wins: (# of times user guessed the word correctly).
// If the word is madonna, display it like this when the game starts: _ _ _ _ _ _ _.
// As the user guesses the correct letters, reveal them: m a d o _  _ a.
// Number of Guesses Remaining: (# of guesses remaining for the user).
// Letters Already Guessed: (Letters the user has guessed, displayed like L Z Y H).
// After the user wins/loses the game should automatically choose another word and make the user play it.

// step 1. create variables for wins, loses, ties, and words 

// step 2. make a function that generates a random word when the game starts

// step 3. make it so that when you guess a proper letter it prints it to the screen 

// step 4. make a function that prints wrong letters to another variable.

// step 5. make it so when proper letters are guessed they are revealed in order.

var directionsText = document.getElementById("directionsText").innerHTML = "Lets Play!"
var guessesRemaining = document.getElementById("guessesRemaining");
var wins = document.getElementById("winsText").innerHTML = 0;
var answerArray = [];
var wrongGuess = [];
// generates the random words for the game
var words = [
    "rescue", "afterthought", "opisthosomal", "obnixely", "pallasethesia", "gonfalonier", "zooculture", "cymophanous", "alkanet", "noisy", "tawdry", "pizzas", "fuel", "line", "shirt", "harm", "nation", "miss", "elite", "switch", "watch", "ambiguous", "drop", "rural", "wheel", "shock", "tease", "release", "yard", "growth", "dinner", "madonna"
];
var randomWord = words[Math.floor(Math.random() * words.length)];
var split = randomWord.split("");
// user input
document.onkeyup = function(event) {
    var userText = event.key.toLowerCase(); 
    // console.log(userText);


// creates the array of _ _ _ _ _ _ _ 
    for (var i = 0; i < split.length; i++) {
            answerArray[i]= "_";
            };
            // console.log(split);
            // console.log(randomWord);
            

    for (var a = 0; a < split.length; a++) {

        if(userText === split[a]) {
            // split[a] = answerArray[a];
            console.log("right"); 
        } 
        else {
            console.log("wrong")
        
        } 
    };
    wrongGuess.push(userText);
};
document.getElementById("spaces").innerHTML = wrongGuess;
document.getElementById("wrongGuess").innerHTML = wrongGuess;