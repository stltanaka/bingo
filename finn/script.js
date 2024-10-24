document.addEventListener("DOMContentLoaded", generateBingoCard);
document.getElementById('generate-button').addEventListener('click', generateBingoCard);
const scriptURL = 'https://script.google.com/macros/s/AKfycbzXUkX5xmJHLwuPUaiQpgOzuQ9oSTkaTGdYuCQRlz08YzLFAo6UZsN0Ii3S_oQbG16qkg/exec';

function generateBingoCard() {
    document.getElementById('statusMessage').style.visibility = 'visible';
    const bingoBoard = document.getElementById('bingo-board');
    bingoBoard.innerHTML = '';
    fetch(scriptURL)
        .then(response => response.json())
        .then(words => {
            const shuffledWords = shuffleArray(words).slice(0, 25);
                    
            shuffledWords.forEach((word) => {
                const cell = document.createElement('div');
                cell.className = 'bingo-cell';
                cell.textContent = word;
                cell.addEventListener('click', () => cell.classList.toggle('checked'));
                bingoBoard.appendChild(cell);
            });
        })
        .catch(error => console.error('Error fetching data:', error))
	.finally(() => {
        	document.getElementById('statusMessage').style.visibility = 'hidden';
        });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
