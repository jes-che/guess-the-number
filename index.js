'use strict';

let targetNum = Math.floor(Math.random() * 10) + 1;
let score = 10;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        displayMessage('Invalid guess! Enter a number!');
    } else if (guess === targetNum) {
        document.querySelectorAll('.before').forEach(el => {
            el.classList.add('hidden');
        });
        document.querySelector('.after-win').classList.remove('hidden');
        document.querySelector('#score').textContent = `Your Score: ${score}`;
        document.querySelectorAll('.restart').forEach(el => {
            el.addEventListener('click', function () {
                document.querySelectorAll('.before').forEach(el => {
                    el.classList.remove('hidden');
                });
                document.querySelector('.after-win').classList.add('hidden');
                score = 10;
                targetNum = Math.floor(Math.random() * 10) + 1;
                displayMessage('Start guessing...');
                document.querySelector('.guess').value = '';
                document.querySelector('.score').textContent = score;
            })
        });
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } else if (guess !== targetNum) {
        if (score > 1) {
            displayMessage(guess > targetNum ? 'Too high! Guess again!' : 'Too low! Guess again!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelectorAll('.before').forEach(el => {
                el.classList.add('hidden');
            })
            document.querySelector('.after-loss').classList.remove('hidden');
            document.querySelector('#answer').textContent = `The Number is ${targetNum}`;
            document.querySelectorAll('.restart').forEach(el => {
                el.addEventListener('click', function () {
                    document.querySelectorAll('.before').forEach(el => {
                        el.classList.remove('hidden');
                    });
                    document.querySelector('.after-loss').classList.add('hidden');
                    score = 10;
                    targetNum = Math.floor(Math.random() * 10) + 1;
                    displayMessage('Start guessing...');
                    document.querySelector('.guess').value = '';
                    document.querySelector('.score').textContent = score;
                })
            });
        }
    }
});