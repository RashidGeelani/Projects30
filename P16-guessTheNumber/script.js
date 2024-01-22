let randomNumber = parseInt(Math.random() * 100 +1);
console.log(randomNumber);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessFeild');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('#remain');
const loOrHi = document.querySelector('.lastResult');
const startOver = document.querySelector('.lowOrHi');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click', (e)=>{
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('please enter a Valid number');
  }
  if(guess < 1){
    alert('please enter a Valid number which is greater than 1');
  }
  if(guess > 100){
    alert('please enter a Valid number which is less than 100');
  }else{
    prevGuess.push(guess)
    if(numGuess === 11){
      displayGuess(guess);
      displayMessage(`Game Over!! Random number was ${randomNumber}`)
      endGame();
    }else{
      displayGuess(guess);
      CheckGuess(guess);
    }
  }
}
function CheckGuess(guess){
  if(guess === randomNumber){
    displayMessage(`Congrats!! You guessed it right. Your Guess & Random Number Both were ${guess}`)
    endGame();
  }else if(guess < randomNumber){
    displayMessage(`Your guess is ${guess} which is too low`);
  }else if(guess > randomNumber){
    displayMessage(`Your guess is ${guess} which is too high`);
  }
}
function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML += `${guess}, `
  numGuess++;
  remaining.innerHTML = `${11-numGuess}`
}
function displayMessage(message){
  loOrHi.innerHTML = `<h2>${message}</h2>`
  // remaining.innerHTML = `${11-numGuess}`
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = '<h2 id="newGame"  style=" height: 35px; width: 120px; font-weight: 600; border: solid rgb(255, 255, 255) 1px; color: rgb(0, 0, 0); border-radius: 5px; background-color: rgb(248, 0, 0); display: flex; justify-content: center; ">Try Again</h2>'
  startOver.appendChild(p);
  playGame = false;
  newGame();
}

function newGame(){
 const newGameBtn = document.querySelector('#newGame');
 newGameBtn.addEventListener('click', (e)=>{
  randomNumber = parseInt(Math.random() * 100 +1);
  prevGuess = [];
  numGuess = 1;
  guessSlot.innerHTML = ''
  remaining.innerHTML = `${11-numGuess}`
  userInput.removeAttribute('disabled');
  startOver.removeChild(p);
  playGame = true;
 })
}



