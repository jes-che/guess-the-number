'use strict';

const targetNum = Math.floor(Math.random() * 10) + 1;
document.querySelector('.number').textContent = targetNum;
let score = 10;

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    if (!guess) {
        document.querySelector('.message').textContent = 'Invalid guess! Enter a number!';
    } else if (guess === targetNum) {
        document.querySelectorAll('.before').forEach(el => {
            el.classList.add('hidden');
        });
        document.querySelector('.after-win').classList.remove('hidden');
        document.querySelector('#score').append(`Your Score: ${score}`);
        document.querySelectorAll('.restart').forEach(el => {
            el.addEventListener('click', function () {
                window.location.reload();
                return false;
            })
        });
    } else if (guess !== targetNum) {
        if (score > 1) {
            if (guess > targetNum) {
                document.querySelector('.message').textContent = 'Too high! Guess again!';
                score--;
                document.querySelector('.score').textContent = score;
            } else if (guess < targetNum) {
                document.querySelector('.message').textContent = 'Too low! Guess again!';
                score--;
                document.querySelector('.score').textContent = score;
            }
        } else {
            document.querySelectorAll('.before').forEach(el => {
                el.classList.add('hidden');
            })
            document.querySelector('.after-loss').classList.remove('hidden');
            document.querySelectorAll('.restart').forEach(el => {
                el.addEventListener('click', function () {
                    window.location.reload();
                    return false;
                })
            });
        }
    }
});