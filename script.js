'use strict';

let secretNum = Math.trunc(Math.random() * 20) + 1;

let scoreVal = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '✅ Correct number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNum;

    if (scoreVal > highScore) {
      document.querySelector('.highscore').textContent = scoreVal;
      highScore = scoreVal;
    }
  } else if (guess > secretNum) {
    if (scoreVal > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      scoreVal--;
      document.querySelector('.score').textContent = scoreVal;
    } else {
      document.querySelector('.message').textContent = '💢 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNum) {
    if (scoreVal > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      scoreVal--;
      document.querySelector('.score').textContent = scoreVal;
    } else {
      document.querySelector('.message').textContent = '💢 You lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.score').textContent = '20';
  secretNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  scoreVal = 20;
});
