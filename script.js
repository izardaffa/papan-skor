const p1Display = document.querySelector('#p1-display');
const p2Display = document.querySelector('#p2-display');
const p1Button = document.querySelector('#p1-button');
const p2Button = document.querySelector('#p2-button');
const resetButton = document.querySelector('#reset');
const winPointInput = document.querySelector('#win-point');

let p1Score = 0;
let p2Score = 0;
let winPoint = 3;
let isGameOver = false;


function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    winPointInput.value = winPoint;
}

p1Button.addEventListener('click', () => {
    if (!isGameOver) {
        p1Score += 1;
        
        if (p1Score == winPoint) {
            isGameOver = true;
        }
        
        p1Display.textContent = p1Score;
    }
});

p2Button.addEventListener('click', () => {
    if (!isGameOver) {
        p2Score += 1;
        
        if (p2Score == winPoint) {
            isGameOver = true;
        }

        p2Display.textContent = p2Score;
    }
});

resetButton.addEventListener('click', reset);

winPointInput.addEventListener('change', (event) => {
    winPoint = parseInt(event.target.value);
    reset();
});
