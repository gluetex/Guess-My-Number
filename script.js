'use strict';

const secretNum = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;
let scoreVal = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ Not a number!';
  } else if (guess === secretNum) {
    document.querySelector('.message').textContent = '✅ Correct number!';
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
