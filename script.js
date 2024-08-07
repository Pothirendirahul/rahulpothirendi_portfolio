const board = document.getElementById('board');
const cells = document.querySelectorAll('.cell');
const status = document.getElementById('status');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function playerMove(cellIndex) {
    if (gameState[cellIndex] === '' && gameActive) {
        gameState[cellIndex] = currentPlayer;
        cells[cellIndex].textContent = currentPlayer;
        checkWin();
        checkDraw();
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin() {
    for (let condition of winningConditions) {
        const [a, b, c] = condition;
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            status.textContent = `${currentPlayer} wins!`;
            gameActive = false;
            return;
        }
    }
}

function checkDraw() {
    if (!gameState.includes('') && gameActive) {
        status.textContent = 'It\'s a draw!';
        gameActive = false;
    }
}

function resetGame() {
    currentPlayer = 'X';
    gameActive = true;
    gameState = ['', '', '', '', '', '', '', '', ''];
    status.textContent = '';
    cells.forEach(cell => cell.textContent = '');
}
