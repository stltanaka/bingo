document.addEventListener("DOMContentLoaded", generateBingoCard);
document.getElementById('generate-button').addEventListener('click', generateBingoCard);

function generateBingoCard() {
    const input = "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25"
    const words = input.split(',').map(word => word.trim()).filter(word => word);

    const shuffledWords = shuffleArray(words).slice(0, 25);
    const bingoBoard = document.getElementById('bingo-board');
    bingoBoard.innerHTML = '';
    
    shuffledWords.forEach((word, index) => {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.textContent = word;
        cell.addEventListener('click', () => cell.classList.toggle('checked'));
        bingoBoard.appendChild(cell);
    
    setUserstate
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

let userBingoStates = {};

app.post('/save-bingo-state', (req, res) => {
    const { userId, boardState } = req.body;
    userBingoStates[userId] = boardState;
    res.status(200).send('Bingo state saved');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});

document.getElementById('save-button').addEventListener('click', saveBingoState);

function saveBingoState() {
    const checkedCells = Array.from(document.getElementsByClassName('bingo-cell checked'));
    const boardState = checkedCells.map(cell => cell.textContent);
    
    const userId = 'exampleUserId';

    fetch('/save-bingo-state', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userId, boardState }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });
}

