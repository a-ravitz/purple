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


document.onkeyup = function event() {

var winsText = document.getElementById("winsText");
var lossesText = document.getElementById("lossesText");
var guessNum = 10;
var wrongArray = [];
var blankSpaces = [];
var blanks = document.getElementById("spaces");
var directions = document.getElementById("directionsText");
directions.innerHTML = "Press Any Key To Start";
var guessesLeft = document.getElementById("guessesRemaining");
guessesLeft.innerHTML = ""; 
var guessed = document.getElementById("guessedLetters");
var split = ""; 
//game start//
        
        directions.innerHTML = "";
        guessesLeft.innerHTML = "Guesses Remaining : " + guessNum;
        lossesText.innerHTML ="Losses : " + losses;
        winsText.innerHTML ="Wins : " + wins;
    
// step 2. make a function that generates a random word when the game starts

        
        var words = [
            "cymophanous", "alkanet", "noisy", "tawdry", "pizzas", "fuel", "line", "shirt", "harm", "nation", "miss", "elite", "switch", "watch", "ambiguous", "drop", "rural", "wheel", "shock", "tease", "release", "yard", "growth", "dinner", "madonna"];
        function splitRandomWord() {
            var randomWord = words[Math.floor(Math.random() * words.length)];
            return randomWord.split("");
         } 

         var gameWord = splitRandomWord(words)

// a function that resets the game         

         function resetGame () {
            wrongArray = [];
            blankSpaces = [];
            guessNum = 10;
            splitRandomWord(words);
        } 

// creates the array of _ _ _ _ _ _ _ 

            for (var i = 0; i < gameWord.length; i++) {
                blankSpaces[i]= ("_");
            };

                // console.log(randomWord); 
                console.log(blankSpaces);
            blanks.innerHTML = blankSpaces;

// user input //

        document.onkeyup = function uniKeyCode(event) {

            var x = event.keycode; 

            if ( x > 90 || x < 57 ) {
                console.log(oops);

                } else {

                var userText = event.key.toLowerCase(); 
                console.log(userText);
        
                }

// step 3. make it so that when you guess a proper letter it prints it to the screen 

            var matching = function () {
                var match = false; 

                for (var a = 0; a < gameWord.length; a++) {

                    if (userText === gameWord[a]) {
                        match = true; 
                        blankSpaces[a] = gameWord[a];
                        blanks.innerHTML = blankSpaces.join(" ");
                    }
                     else if (blankSpaces === gameWord) {
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
                
                
    
            }
            if (blankSpaces === gameWord) {
                wins++;

            }else if (guessNum <= 0) {
                alert("Game Over");
                losses++;
                losses.innerhtml = "Losses : " + losses;
                resetGame();
            }
            matching(userText);
                   
        }   
    }

