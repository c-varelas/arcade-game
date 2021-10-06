let gameState = {
    board: [
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','',''],
        ['','','','','','','','','','','','','','','','','','','','']
    ]
}

let snake = {
    body: [ [10, 2], [10,3], [10,4], [10, 5] ],
    nextDirection: [0, 1]
}

let gameScore = 0;

let highScore = [];

let tick;

const renderState = () => {
    const board = $('#board')
    board.empty();
    gameState.board.forEach(function(row, rowIndex) {
        row.forEach(function(column, columnIndex) {
            const cellElem = $(`<div class="cell" data-x=${rowIndex} data-y=${columnIndex}></div>`);
            board.append(cellElem);
        })
    })
}

//              SNAKE COMPONENTS           //
const buildSnake = () => {
    $('.cell').removeClass('snake')
    snake.body.forEach(function(coordinates) {
        const coordX = coordinates[0]
        const coordY = coordinates[1]
        const cellElem = $(`[data-x="${coordX}"][data-y="${coordY}"]`)
        cellElem.addClass('snake')
    })
}

const growSnake = () => {
    const newCellX = snake.body[snake.body.length-1][0] + snake.nextDirection[0];
    const newCellY = snake.body[snake.body.length - 1][1] + snake.nextDirection[1];
    snake.body.push([newCellX, newCellY])

    gameScore += 1;
    updateScore();
}

const snakeAteItself = (coordX, coordY) => {
    const cellElem = $(`[data-x="${coordX}"][data-y="${coordY}"]`)
    return cellElem.hasClass('snake');
}

const snakeLeftTheBoard = (coordX, coordY) => {
    return coordX < 0 || coordX > 19 || coordY < 0 || coordY > 19
}

const updateSnake = () => {
    snake.body.shift();
    const newCellX = snake.body[snake.body.length-1][0] + snake.nextDirection[0];
    const newCellY = snake.body[snake.body.length-1][1] + snake.nextDirection[1];
    
    snake.body.push([newCellX, newCellY]);

    isItGameOver(newCellX, newCellY);
}

const randomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/* APPLE Component */
const buildApple = () => {
    let appleX = randomInt(0, 19);
    let appleY = randomInt(0, 19);
    let appleCell = $(`[data-x="${appleX}"][data-y="${appleY}"]`)

    if(appleCell.hasClass('snake')) {
        buildApple();
    } else {
        $('.cell'),removeClass('food')
        appleCell.addClass('food')
    }
}

const eatApple  = () => {
    const eatenAppleX = snake.body[snake.body.length-1][0];
    const eatenAppleY = snake.body[snake.body.length-1][1];

    return $(`[data-x="${eatenAppleX}"][data-y="${eatenAppleY}"]`).hasClass('food');
}

/* SCORES COMPONENTS */
const displayBestScore = () => {
    highScore.forEach(function (score, scoreIndex) {
        $(`#scores ${scoreIndex + 1 }`).text(`${score}`).text(`${score}`)
        $(`#scores ${scoreIndex + 1 }`).css('text-align', 'right')
    })
}

const updateScore = () => {
    $('#current-value').text(gameScore);
    if(gameScore > Number($('#best-value').text())) {
        $('#best-value').text(gameScore);
    }
}

const saveBestScore = () => {
    highScore.push(gameScore);
    highScore.sort(function (a, b) {
        return b - a;
    })
    if(highScore.length > 5) {
        highScore.splice(5);
    }
    localStorage.setItem('scores', JSON.stringify(highScore));
}

const loadBestScore = () => {
    highScore = localStorage.getItem('scores')
    ? JSON.parse(localStorage.getItem('scores'))
    : ['', '', '', '', '']

    displayBestScore();
}

/* GAME OVER COMPONENTS */

const resetGame = () => {
    clearInterval(tick);
    saveBestScore();
    displayBestScore();

    tick = false;

    $('.snake').addClass('dead')
    $('#heading').text('GAME OVER! PLAY AGAIN!').css('color', '#E63E61')
}

const isItGameOver = (newCellX, newCellY) => {
    if (snakeAteItself (newCellX, newCellY) || snakeLeftTheBoard(newCellX, newCellY)) {
        resetGame();

        gameScore = 0;
        snake = {
            body: [ [10, 2], [10,3], [10,4], [10, 5] ],
            nextDirection: [0, 1]
        }
    }
}






renderState();
buildSnake();

