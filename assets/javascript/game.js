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
var guessNum = "";
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
var words = ["royal", "artists", "electric", "patriarch", "veronica", "medium", "mussel", "pale", "mauve", "thistle", "orchid", "heliotrope", "phlox", "pizzazz", "liseran", "mulberry", "pearly", "purpureus", "northwestern", "ksu", "pompandpower", "mardigras", "eminence", "byzantium", "pansy", "palatinate", "dark"];
var randomWord = "";    
var split = "";
var wordLength = [];
var spacesLength = [];


    //game start//
    function gameStart() {
   
        directions.innerHTML = "";
        guessesLeft.innerHTML = "Guesses Remaining : " + guessNum;
        lossesText.innerHTML ="Losses : " + losses;
        winsText.innerHTML ="Wins : " + wins;
        randomWord = words[Math.floor(Math.random() * words.length)];
        split = randomWord.split("");
        console.log(randomWord);
        
        for (var i = 0; i < split.length; i++) {
            blankSpaces[i]= ("_");
            spacesLength.push(blankSpaces);
        };

            // console.log(randomWord); 
            console.log(blankSpaces);
        blanks.innerHTML = blankSpaces;
        guessNum = randomWord.length + 5;
    }        

// a function that resets the game         

    function resetGame () {
            wrongArray = [];
            blankSpaces = [];
            wordLength = [];
            spacesLength = [];
            guessNum = "";
            gameStart();
            
    }   

// creates the array of _ _ _ _ _ _ _ 

            

// user input //
        // var start = false;  
        document.onkeyup = function uniKeyCode(event) { 

            var x = event.keyCode;
            var match = false; 
            if ( x > 90 || x < 58 ) {
                console.log("oops");

                } else {

                var userText = event.key.toLowerCase(); 

                console.log(userText);
        
                }

                for (var a = 0; a < split.length; a++) {

                    if (userText === split[a]) {
                        match = true; 
                        blankSpaces[a] = split[a];
                        blanks.innerHTML = blankSpaces.join(" ");
                        wordLength.push(userText)
                        guessNum--;
                        guessesLeft.textContent = "Guesses Remaining : " + guessNum;
                    
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
                if (wordLength.length === randomWord.length || wordLength.length === split.length || spacesLength.length === wordLength.length || blanks === split) {
                    wins++; wins.textContent = "Wins : " + wins;
                    resetGame();

                    // letters < split.length = lose
                
                } else if (guessNum === 1) {
                        alert("just one guess left!")
                
                    } else if (guessNum === 0) {
                        alert("Game Over");
                        losses++;
                        losses.textContent = "Losses : " + losses;
                        resetGame()
                    }
                
        }
           
               
        
resetGame();   

    