'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  let number = Number(document.querySelector('.guess').value);
  if (!number) {
    document.querySelector('.message').textContent = 'Select a proper number';
  } else if (number === secretNumber) {
    document.querySelector('.message').textContent =
      'Yes you have guessed the right number';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').innerHTML = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').innerHTML = highScore;
    }
  } else if (number !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        number > secretNumber ? 'High' : 'Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You have lost the game';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').innerHTML = '?';
});
