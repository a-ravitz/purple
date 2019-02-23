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






// step 4. make a function that prints wrong letters to another variable.

// step 5. make it so when proper letters are guessed they are revealed in order.

// step 1. create variables for wins, loses, ties, and words 
var wins = 0;
var losses = 0;

var guessNum = 10;
var wrongArray = [];
var blankSpaces = [];
var guessed = document.getElementById("guessedLetters");
var guessesLeft = document.getElementById("guessesRemaining");
var directions = document.getElementById("directionsText");
var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var blanks = document.getElementById("spaces");
directions.innerHTML = "Press Any Key To Start";
guessesLeft.innerHTML = ""; 
var words = [
        "cymophanous", "alkanet", "noisy", "tawdry", "pizzas", "fuel", "line", "shirt", "harm", "nation", "miss", "elite", "switch", "watch", "ambiguous", "drop", "rural", "wheel", "shock", "tease", "release", "yard", "growth", "dinner", "madonna"];
var randomWord = "";    
var split = "";
document.onkeyup = function event() {

//game start//
        
        directions.innerHTML = "";
        guessesLeft.innerHTML = "Guesses Remaining : " + guessNum;
        lossesText.innerHTML ="Losses : " + losses;
        winsText.innerHTML ="Wins : " + wins;
        randomWord = words[Math.floor(Math.random() * words.length)];
        split = randomWord.split("");
        console.log(randomWord);
}        

// a function that resets the game         

         function resetGame () {
            wrongArray = [];
            blankSpaces = [];
            guessNum = 10;
            randomWord;
        } 

// creates the array of _ _ _ _ _ _ _ 

            for (var i = 0; i < split.length; i++) {
                blankSpaces[i]= ("_");
            };

                // console.log(randomWord); 
                console.log(blankSpaces);
            blanks.innerHTML = blankSpaces;

// user input //

        document.onkeyup = function uniKeyCode(event) {

            var x = event.keyCode; 

            if ( x > 90 || x < 57 ) {
                console.log("oops");

                } else {

                var userText = event.key.toLowerCase(); 
                console.log(userText);
        
                }

// step 3. make it so that when you guess a proper letter it prints it to the screen 

            var matching = function () {
                var match = false; 

                for (var a = 0; a < split.length; a++) {

                    if (userText === split[a]) {
                        match = true; 
                        blankSpaces[a] = split[a];
                        blanks.innerHTML = blankSpaces.join(" ");
                    
                    } else if (blankSpaces === split) {
                         reset();
                    }

                }    

                if (match === false) {
                    if (wrongArray.includes(userText)) {
                         
                         

                    } else {
                    wrongArray.push(userText);
                    guessed.innerHTML = wrongArray.join(" ")
                    guessNum--;
                    guessesLeft.textContent = "Guesses Remaining : " + guessNum;
                    
                    }
                    
                } 
                if (blankSpaces === randomWord) {
                    wins++;

            }   else if (guessNum === 0) {
                alert("Game Over");
                losses++;
                losses.textContent = "Losses : " + losses;
                
    
            }
                
                
            }
            matching(userText);
               
        }   
    resetGame();

