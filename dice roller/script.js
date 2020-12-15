'use strict';


// * selectors
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.querySelector('#current--0');
const current1El = document.querySelector('#current--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const header = document.querySelector('.header');

// * Variables
let score = [0, 0];
let current = 0;
let activePlayer = 0;
let playing = true;

// * Initialization
score0El.textContent = score[0];
score1El.textContent = score[1];
diceEl.classList.add('hidden');

// * Functions
const currentScoreDisplay = function () {
     document.querySelector(`#current--${activePlayer}`).textContent = current;
}
const switchPlayer = function () {
     current = 0;
     currentScoreDisplay();
     activePlayer = activePlayer === 0 ? 1 : 0;
     player0.classList.toggle('player--active');
     player1.classList.toggle('player--active');
}
const btnRollFunction = function () {
     if (playing) {
          // 1. Rolling the dice
          const dice = Math.trunc((Math.random() * 6) + 1);

          // 2. Display the dice
          diceEl.classList.remove('hidden');
          diceEl.src = `images/dice-${dice}.png`;

          // 3. Check if rolled 1
          if (dice !== 1) {
               // add score to current score
               current += dice;
               currentScoreDisplay();
          } else {
               switchPlayer();
          }
     }
}
const holdDiceFunction = function () {
     if (playing) {
          // 1.Add Score to display
          score[activePlayer] += current;
          document.querySelector(`#score--${activePlayer}`).textContent = score[activePlayer];

          // 2.Check score >= 50
          if (score[activePlayer] >= 30) {
               document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
               document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
               diceEl.classList.add('hidden');
               header.textContent = `Player ${activePlayer+1} wins`;

               if(activePlayer===0){
                    header.classList.add('left');
               }else{
                    header.classList.add('right');
               }

               playing = false;
          } else {
               // 2.Switch Player
               switchPlayer();
          }
     }
}
const newGameFunction = function () {
     document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
     document.querySelector(`.player--0`).classList.add('player--active');
     header.textContent = `&nbsp;`;
     if(activePlayer===0){
          header.classList.remove('left');
     }else{
          header.classList.remove('right');
     }
     score0El.textContent = `0`;
     score1El.textContent = `0`;
     current0El.textContent = `0`;
     current1El.textContent = `0`;
     score=[0,0];
     current = 0;
     activePlayer = 0;
     playing = true;
}

// * Event Handlers

// $ 1.Roll Dice 
btnRoll.addEventListener('click', btnRollFunction);

// $ 2.Hold Dice 
btnHold.addEventListener('click', holdDiceFunction);

// $ 3.New Game 
btnNew.addEventListener('click', newGameFunction);