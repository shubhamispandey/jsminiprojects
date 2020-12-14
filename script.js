"use strict";


// * --------------------------------------------variables--------------------------------------------
// * -------------------------------------------------------------------------------------------------

let secretNum = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;


// * ----------------------------------------assighning values----------------------------------------
// * -------------------------------------------------------------------------------------------------
document.querySelector(".score").textContent = score;


// * --------------------------------------------Functions--------------------------------------------
// * -------------------------------------------------------------------------------------------------


// display function
let display = function (cl, txt) {
  document.querySelector(cl).textContent = txt;
}


// click on check function
let clickEventOnCheck = function () {
  let btnValue = Number(document.querySelector('.guess').value);
  if (!btnValue) {
    display('.message', '⛔ No Number entered');
  } else if (btnValue != secretNum && btnValue >= 1 && btnValue <= 20) {

    if (score > 1) {
      display('.message', ((btnValue > secretNum) ? '📈 Number is too high' : '📉 Number is too less'));
      score--;
      display('.score', score);
    } else {
      if (score === 1) {
        score--;
        display('.message', '🎇 Sorry you lost');
        display('.score', score);
        document.querySelector('body').style.background = '#ed1000';
      } else {
        display('.message', '🎇 Sorry you lost');
      }
    }
  } else if (btnValue === secretNum) {
    display('.message', '🥳 Congratulations you won');
    display('.number', secretNum);
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      display('.highscore', highScore);
    }
  } else {
    display('.message', '🔴 Wrong choice');
  }
};

// click on again function
let clickEventOnAgain = function () {
  score = 20;
  display('.score', score);
  secretNum = Math.trunc(Math.random() * 20 + 1);
  display('.number', '?');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing..';
  display('.message', 'Start guessing..');
  document.querySelector('.guess').value = false;
}

// * ----------------------------------------------Events---------------------------------------------
// * -------------------------------------------------------------------------------------------------

document.querySelector(".check").addEventListener("click", clickEventOnCheck);
document.querySelector(".again").addEventListener("click", clickEventOnAgain);

