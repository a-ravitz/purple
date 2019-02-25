
// freakin variables and stuff 

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
var words = ["royal", "artists", "electric", "patriarch", "veronica", "medium", "munsell", "lavender", "mauve", "thistle", "orchid", "heliotrope", "pizzazz", "liseran", "mulberry", "pearly", "purpureus", "northwestern", "mardigras", "eminence", "byzantium", "pansy", "palatinate", "dark", "tyrian"];
var randomWord = "";    
var split = "";
var alertText = document.getElementById("alertText")


// game start
    function gameStart() {
        alertText.innerHTML = "";
        directions.innerHTML = "";
        guessesLeft.innerHTML = "Guesses Remaining : " + guessNum;
        lossesText.innerHTML ="Losses : " + losses;
        winsText.innerHTML ="Wins : " + wins;
        randomWord = words[Math.floor(Math.random() * words.length)];
        function bgColor () {
            if (randomWord === words[0]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#5d3180";
            } else if (randomWord === words[1]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#c11481";
            } else if (randomWord === words[2]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#b901f7";
            } else if (randomWord === words[3]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#7c017c";
            } else if (randomWord === words[4]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#9b1ee8";
            } else if (randomWord === words[5]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#8e6cd4";
            } else if (randomWord === words[6]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#9a00bf";
            } else if (randomWord === words[7]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#f0d8f0";
            } else if (randomWord === words[8]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#d9aaf7";
            } else if (randomWord === words[9]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#d1b9d1";
            } else if (randomWord === words[10]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#d36dcf";
            } else if (randomWord === words[11]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#d76ff7";
            } else if (randomWord === words[12]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#f64bd3";
            } else if (randomWord === words[13]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#d76b9c";
            } else if (randomWord === words[14]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#bf4988";
            } else if (randomWord === words[15]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#b1659d";
            } else if (randomWord === words[16]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#954ba9";
            } else if (randomWord === words[17]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#4c2980";
            } else if (randomWord === words[18]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#840081";
            } else if (randomWord === words[19]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#692e7e";
            } else if (randomWord === words[20]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#6d2860";
            } else if (randomWord === words[21]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#741748";
            } else if (randomWord === words[22]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#682860";
            } else if (randomWord === words[23]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#301829";
            } else if (randomWord === words[24]) {
                document.querySelector('.jumbotron').style.backgroundColor = "#63023a";
            } 
        }   
        bgColor()
        split = randomWord.split("");
        console.log(randomWord);
        
        for (var i = 0; i < split.length; i++) {
            blankSpaces[i]= ("_");
            spacesLength.push(blankSpaces);
        };
            console.log(randomWord); 
            console.log(blankSpaces);
        blanks.innerHTML = blankSpaces;
        guessNum = randomWord.length + 5;

        } 
    
// function that resets the game         

    function resetGame () {
            wrongArray = [];
            guessed.innerHTML = [];
            blankSpaces = [];
            wordLength = [];
            spacesLength = [];
            guessesLeft.innerHTML = randomWord.length + 5;
            gameStart();
            
    }          

// user input 

    document.onkeyup = function uniKeyCode(event) { 
 
            var x = event.keyCode;
            var match = false; 
            if ( x > 90 || x < 58 ) {
                
                console.log("oops");
                
                } else {

                var userText = event.key.toLowerCase(); 

                console.log(userText);
        
                

                for (var a = 0; a < split.length; a++) {

                    if (userText === split[a]) {
                        match = true; 
                        blankSpaces[a] = split[a];
                        blanks.innerHTML = blankSpaces.join(" ");
                    } 
                }    

                if (!wrongArray.includes(userText)) {
                    wrongArray.push(userText);
                    guessed.innerHTML = wrongArray.join(" ");
                    guessNum--;
                    guessesLeft.textContent = "Guesses Remaining : " + guessNum;
                } 
                if  (blankSpaces.join("") === randomWord) {
                    wins++; 
                    wins.textContent = "Wins : " + wins;
                    resetGame();
                
                    } else if (guessNum === 1) {
                        alertText.innerHTML = "just one guess left!"
                
                    } else if (guessNum === 0) {
                        alertText.innerHTML = "Game Over";
                        losses++;
                        losses.textContent = "Losses : " + losses;
                        resetGame()
                    }
                }
    }
           
               
        
resetGame();   

    