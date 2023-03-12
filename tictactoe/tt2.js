const squares = document.querySelectorAll('.square');
let currentPlayer = 'X';
const humanRadio = document.getElementById("human");
const computerRadio = document.getElementById("computer");
let mode = "human";
// Add event listeners to radio buttons
humanRadio.addEventListener("change", function() {
    mode = "human";
    resetGame();
});

computerRadio.addEventListener("change", function() {
    mode = "computer";
    resetGame();
});

squares.forEach(square => {
    square.addEventListener('click', handleClick);
});

function handleClick(event) {
    var xColor = "#00FFFF";
    var oColor = "#FF10F0";
    const square = event.target;

    if (square.textContent !== '') {
        return;
    }

    if (mode == 'human') {
        square.textContent = currentPlayer;
    } else {
        square.textContent = 'X';
    }

    if (checkForWin()) {
        setTimeout(() => {
            showModal(`${currentPlayer} wins!`);
        }, 100);
        return;
    }

    if (checkForTie()) {
        showModal(`It's a tie!`);
        resetGame();
        return;
    }

    if (mode == 'human') {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        var color = currentPlayer === "X" ? xColor : oColor; // to  add color 
        this.style.color = color;
    } else {
        // Computer player's turn
        const emptySquares = Array.from(squares).filter(square => square.textContent === '');
        const randomIndex = Math.floor(Math.random() * emptySquares.length);
        const randomSquare = emptySquares[randomIndex];
        randomSquare.textContent = 'O';

        if (checkForWin()) {
            setTimeout(() => {
                showModal(`Computer wins!`);
            }, 100);
            return;
        }

        if (checkForTie()) {
            showModal(`It's a tie!`);
            resetGame();
            return;
        }
    }
}

function checkForWin() {
    const winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // horizontal
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // vertical
        [0, 4, 8],
        [2, 4, 6] // diagonal
    ];

    return winningCombos.some(combo => {
        return combo.every(index => {
            return squares[index].textContent === currentPlayer;
        });
    });
}

function checkForTie() {
    return Array.from(squares).every(square => {
        return square.textContent !== '';
    });
}

function resetGame() {
    squares.forEach(square => {
        square.textContent = '';
    });
    currentPlayer = 'X';
}





function changeBackground() {
    var wallpapers = ["https://images.hdqwalls.com/wallpapers/cyberpunk-neon-with-sword-4k-8k.jpg", "https://images.hdqwalls.com/wallpapers/neon-light-guy-4k-ve.jpg", "https://i.pinimg.com/564x/31/3e/a5/313ea52e1725f7f0c2d028308453700a.jpg"]; // array of wallpaper image URLs
    var randomWallpaper = wallpapers[Math.floor(Math.random() * 3)]; // select a random wallpaper

    document.body.style.backgroundImage = "url('" + randomWallpaper + "')"; // set the background image of the body
    document.body.style.backgroundSize = "cover"; // make sure the image covers the entire background
}

setInterval(changeBackground, 300);

function showModal(message) {
    const modal = document.querySelector('.modal');
    const messageElement = document.querySelector('.modal-message');
    const button = document.querySelector('.modal-button');

    messageElement.textContent = message;
    modal.style.display = 'flex';

    button.addEventListener('click', () => {
        modal.style.display = 'none';
    });
}