let randomNumber = (parseInt((Math.random() * 100)+1));
console.log("randomNumber");
console.log(randomNumber);
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guess_number");
const guessSlot = document.querySelector(".guesses");
const reamaining = document.querySelector(".lastresult");
const lowOrHi = document.querySelector("#lowOrHi");
const startover = document.querySelector(".resultParas");

const p = document.createElement('p');

let prevGuess = []
let numGuess = 1

let playGame = true;

if (playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault
        const guess = parseInt(userInput.value);
        console.log(guess)
        validateGuess(guess); 
    });
}
function validateGuess(guess){
   if (isNaN(parent(guess))){
    alert('Please Enter a valid number')
   } 
   else if(guess < 1){
    alert('Please Enter a number greater than 0')
   }
   else if(guess > 100){
    alert('Please Enter a number less than 101')
   }
   else{
    prevGuess.push(guess)
    if(numGuess === 11){
        displayGuess(guess)
        displayMessage('Game Over. Random number was ${randomnumber}')
        endGame()
    }
    else{
        displayGuess(guess);
        checkGuess(guess)
    }
   }
}

function checkGuess(guess){
 console.log("##############")
    if(guess === randomNumber){
        displayMessage('You guessed it right')
    }
    else if(guess < randomNumber){
        displayMessage('Number is Low')
    }
    else if(guess > randomNumber){
        displayMessage('Number is High')
    }
}
function displayMessage(message) 
  {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
  }
function displayGuess(guess){
    userInput.value = ''
    guessSlot.innerHTML += '$(guess) '
    numGuess ++;
    reamaining.innerHTML = '${11-numGuess}'
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = '<h2 id="newGame">Start New Game </h2>'
    startover.appendChild(p)
    playGame = False
    newGame()
}
function newGame(){
    const newGameButton = document.querySelector('#newgame')
    newGameButton.addEventListener('click', function(e){
        let randomNumber = (parseInt((Math.random() * 100)+1));
        numGuess = 1
        guessSlot.innerHTML = ''
        reamaining.innerHTML = '${11-numGuess}'
        userInput.removeAttribute('disable')
        startover.removeChild(p)
    
        playGame = true
    })

} 