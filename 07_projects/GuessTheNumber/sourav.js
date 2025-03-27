//storing a random number
let randomNumber =(parseInt(Math.random()*100+1));

//selecting elements
const userInput = document.querySelector("#guessField");
const submit = document.querySelector("#subt");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const startOver = document.querySelector(".resultParas");

//creating paragraph element
const p = document.createElement('p');

//storing previous guessed numbers in array
let prevGuess = [];

//counting number of remaining guesses
let numGuess = 1;

let playGame = true;

//if user wants to play game then proceed function
if(playGame){
    submit.addEventListener('click',function(event){
        event.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}
//function check validity of guess whether guess between 1 and 100
function validateGuess(guess){
    if(isNaN(guess)){   //if guess is not a number print alert message
        alert("Please enter a valid number");
    }
    else if(guess < 1 || guess > 100){
        alert("Please enter a number within Range(1 to 100)");
    }
    else{
        //pushing value in array
        prevGuess.push(guess);
    }
    if(numGuess === 11){
        displayGuess(guess);
        displayMessage(`Game Over`);
        endGame();
    }
    else{
        displayGuess(guess);    //displaying the guess value
        checkGuess(guess);  //checking whether guessed value is correct or not

    }
}

//function to check whether the guess number is lower or higher or equal to the random number
function checkGuess(guess){
    if(guess === randomNumber){
        displayMessage(`You guessed it right`);
        endGame();
    }
    else if(guess < randomNumber){
        displayMessage(`Number is low`);
    }
    else if(guess > randomNumber){
        displayMessage(`Number is High`);
    }
}   

//display guessValue and cleaning the output
function displayGuess(guess){
    userInput.value = '';
    guessSlot.innerHTML += `${guess} `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`;
}

//
function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

//function to end the program
function endGame(){
    userInput.value = '';
    userInput.setAttribute("disabled",'');
    p.classList.add("button");
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = "false";
    newGame();
}

//function to start new game and resetting other values of variables
function newGame(){
    const newGameButton = document.querySelector("#newGame");
    newGameButton.addEventListener('click',function(event){
        randomNumber = (parseInt(Math.random()*100+1));
        prevGuess = [];
        numGuess = 1;
        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        displayMessage('');

        playGame = "true";
    });
}