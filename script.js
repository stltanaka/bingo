document.getElementById('generate-button').addEventListener('click', generateBingoCard);
document.getElementById('reset-button').addEventListener('click', resetGame);

function generateBingoCard() {
    const input = document.getElementById('bingo-input').value;
    const words = input.split(',').map(word => word.trim()).filter(word => word);
    
    if (words.length < 25) {
        alert('Please enter at least 25 words.');
        return;
    }

    const shuffledWords = shuffleArray(words).slice(0, 25);
    const bingoBoard = document.getElementById('bingo-board');
    bingoBoard.innerHTML = '';
    
    shuffledWords.forEach((word, index) => {
        const cell = document.createElement('div');
        cell.className = 'bingo-cell';
        cell.textContent = word;
        cell.addEventListener('click', () => cell.classList.toggle('checked'));
        bingoBoard.appendChild(cell);
    });

    document.getElementById('reset-button').style.display = 'inline-block';
}

function resetGame() {
    document.getElementById('bingo-input').value = '';
    document.getElementById('bingo-board').innerHTML = '';
    document.getElementById('reset-button').style.display = 'none';
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

