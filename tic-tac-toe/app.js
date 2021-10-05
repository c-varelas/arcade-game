/* PLAY WITH A COMPUTER TO BE BUILT */

const gameState = {
    players: ['❌', '⭕️'],
    board:  [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
  ],
  computer: '',
  single : ''
  }

let winner = false;
let currentPlayer = gameState.players[1];

  const renderState = ()  => {
    const app = $('#app');
    $('#board').empty();
    gameState.board.forEach(function(row, y){
      row.forEach(function(cell, x){
        const cellElem = $(`<div class="cell">${cell}</div>`)
        cellElem.data('location', [y,x])
        $('#board').append(cellElem)
      })
    })
    isItADraw();
    winningCombosOne();
    winningCombosTwo();
    winningCombosThree();
    winningCombosFour();
    winningCombosFive();
    winningCombosSix();
    winningCombosSeven();
    winningCombosEight();
}

const switchPlayer = () => {
  if (currentPlayer === gameState.players[1]) {
    currentPlayer = '❌';
  } else {
    currentPlayer = '⭕️';
  }
};

const switchPlayerMessage = () => {
  document.getElementById('player').innerHTML = `<h2> It Is Player ${currentPlayer}'s Turn </h2>`
}

function onBoardClick()  {
  const clicked = $(this).data('location')
  if (gameState.board[clicked[0]][clicked[1]] === '') {
    if (currentPlayer === gameState.players[1]) {
      gameState.board[clicked[0]][clicked[1]] = gameState.players[0]
    } else {
      gameState.board[clicked[0]][clicked[1]] = gameState.players[1]
    }
  }
  if(gameState.computer === $('#computer') ) {
    isItComputerMode();
  }
 switchPlayer();
 switchPlayerMessage();
 renderState();
}

const isItADraw = () => {
  let tieCount = '';
  gameState.board.forEach(function(row) {
    row.forEach(function(cell) {
      if(!winner) {
        if(cell.length != 0)
        tieCount++
        if (tieCount === 9) {
          document.getElementById('message').innerHTML = `<h2>And We Have A Tie!</h2>`
          $('#player').empty();
        }
      } 
    })
  })
}

const winningCombosOne = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][0] === '' || gameState.board[0][1] === '' || gameState.board[0][2] === '') {
      continue;
    }
    if (gameState.board[0][0] === gameState.board[0][1] && gameState.board[0][1] === gameState.board[0][2]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosTwo = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[1][0] === '' || gameState.board[1][1] === '' || gameState.board[1][2] === '') {
      continue;
    }
    if (gameState.board[1][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[1][2]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosThree = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[2][0] === '' || gameState.board[2][1] === '' || gameState.board[2][2] === '') {
      continue;
    }
    if (gameState.board[2][0] === gameState.board[2][1] && gameState.board[2][1] === gameState.board[2][2]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosFour= () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][0] === '' || gameState.board[1][0] === '' || gameState.board[2][0] === '') {
      continue;
    }
    if (gameState.board[0][0] === gameState.board[1][0] && gameState.board[1][0] === gameState.board[2][0]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosFive = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][1] === '' || gameState.board[1][1] === '' || gameState.board[2][1] === '') {
      continue;
    }
    if (gameState.board[0][1] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][1]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosSix = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][2] === '' || gameState.board[1][2] === '' || gameState.board[2][2] === '') {
      continue;
    }
    if (gameState.board[0][2] === gameState.board[1][2] && gameState.board[1][2] === gameState.board[2][2]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosSeven = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][0] === '' || gameState.board[1][1] === '' || gameState.board[2][2] === '') {
      continue;
    }
    if (gameState.board[0][0] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][2]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}

const winningCombosEight = () => {
  for(let i = 0; i < gameState.board.length; i++) {
    if (gameState.board[0][2] === '' || gameState.board[1][1] === '' || gameState.board[2][0] === '') {
      continue;
    }
    if (gameState.board[0][2] === gameState.board[1][1] && gameState.board[1][1] === gameState.board[2][0]) {
      document.getElementById('winnerAnnoucement').innerHTML = `<h2> Player ${currentPlayer} Is The Winner Chicken Dinner!</h2>`
      $('#player').empty();
      winner = true;
      break;
    }
  }
}


//Click Functions 

$('#app').on('click', '.cell', onBoardClick)

$('#reset').click(function () {
  $('#board').empty();
  $('#message').empty();
  $('#player').empty();
  $('#winnerAnnoucement').empty();

  gameState.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  renderState();

})

renderState();