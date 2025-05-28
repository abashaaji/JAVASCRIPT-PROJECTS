let activePlayer = 'X';
let selectedSquares = [];

// Main function to handle placing X or O
function placeXOrO(squareNumber) {
    if (!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);

        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/Screenshot 2025-05-28 084548.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (activePlayer === 'X') {
            activePlayer = 'O';
        } else {
            activePlayer = 'X';
        }

        let audio = new Audio('./media/place.mp3');
        audio.play();

        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () {
                computersTurn();
            }, 1000);
        }
    }

    function computersTurn() {
        let success = false;
        let pickASquare;

        while (!success) {
            pickASquare = String(Math.floor(Math.random() * 9));
            if (!selectedSquares.some(element => element.includes(pickASquare))) {
                placeXOrO(pickASquare);
                success = true;
            }
        }
    }
}

// Disable clicks during animations or computer turn
function disableClick() {
    document.body.style.pointerEvents = 'none';
    setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
    }, 1000);
}

// Check win conditions
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) return drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes('3X', '4X', '5X')) return drawWinLine(50, 304, 558, 304);
    else if (arrayIncludes('6X', '7X', '8X')) return drawWinLine(50, 508, 558, 508);
    else if (arrayIncludes('0X', '3X', '6X')) return drawWinLine(100, 50, 100, 558);
    else if (arrayIncludes('1X', '4X', '7X')) return drawWinLine(304, 50, 304, 558);
    else if (arrayIncludes('2X', '5X', '8X')) return drawWinLine(508, 50, 508, 558);
    else if (arrayIncludes('0X', '4X', '8X')) return drawWinLine(100, 100, 520, 520);
    else if (arrayIncludes('2X', '4X', '6X')) return drawWinLine(100, 508, 510, 90);
    else if (arrayIncludes('0O', '1O', '2O')) return drawWinLine(50, 100, 558, 100);
    else if (arrayIncludes('3O', '4O', '5O')) return drawWinLine(50, 304, 558, 304);
    else if (arrayIncludes('6O', '7O', '8O')) return drawWinLine(50, 508, 558, 508);
    else if (arrayIncludes('0O', '3O', '6O')) return drawWinLine(100, 50, 100, 558);
    else if (arrayIncludes('1O', '4O', '7O')) return drawWinLine(304, 50, 304, 558);
    else if (arrayIncludes('2O', '5O', '8O')) return drawWinLine(508, 50, 508, 558);
    else if (arrayIncludes('0O', '4O', '8O')) return drawWinLine(100, 100, 520, 520);
    else if (arrayIncludes('2O', '4O', '6O')) return drawWinLine(100, 508, 510, 90);
    else if (selectedSquares.length >= 9) {
        let tieAudio = new Audio('./media/tie.mp3');
        tieAudio.play();
        setTimeout(resetGame, 500);
    }
}

// Helper function to check 3 in a row
function arrayIncludes(a, b, c) {
    return selectedSquares.includes(a) &&
           selectedSquares.includes(b) &&
           selectedSquares.includes(c);
}

// Draw winning line
function drawWinLine(x1, y1, x2, y2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x = x1, y = y1;

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(70, 255, 33, .8)';
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) x += 10;
            if (y < y2) y += 10;
            if (x >= x2 && y >= y2) cancelAnimationFrame(animationLoop);
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) x += 10;
            if (y > y2) y -= 10;
            if (x >= x2 && y <= y2) cancelAnimationFrame(animationLoop);
        }
    }

    disableClick();
    let winAudio = new Audio('./media/winGame.mp3');
    winAudio.play();
    animateLineDrawing();
    setTimeout(() => {
        clear();
        resetGame();
    }, 1000);
}

// Clear canvas
function clear() {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    c.clearRect(0, 0, 608, 608);
}

// Reset game
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
    activePlayer = 'X';
}
//this function resets the game in the event of a tie or win 
function resetGame() {
    // this for loop iterests through each HTML square element
    for (let i = 0; i < 9; i++) {
       // This variable gets the HTML element i
       let square = document.getElementById(String(i));
       //this removes our elements backgroundImage 
       square.style.backgroundImage = '';
    }
    // This resets our array so its empty and we can start over 
    selectedSquares = [];
}