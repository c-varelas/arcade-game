const gameState = {
    players: ['❌', '⭕️'],
    board:  [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
  ]
  }

let winner = false;
let currentPlayer = gameState.players[1];

  const renderState = ()  =>{
    const app = $('#app');
    $('#board').empty();
    gameState.board.forEach(function(row, y){
      row.forEach(function(cell, x){
        const cellElem = $(`<div class="cell">${cell}</div>`)
        cellElem.data('location', [y,x])
        $('#board').append(cellElem)
      })
    })
    isItADraw()
}

const switchPlayer = () => {
  if (currentPlayer === gameState.players[1]) {
    currentPlayer = '❌';
  } else {
    currentPlayer = '⭕️';
  }
};

function onBoardClick()  {
  const clicked = $(this).data('location')
  if (gameState.board[clicked[0]][clicked[1]] === '') {
    if (currentPlayer === gameState.players[1]) {
      gameState.board[clicked[0]][clicked[1]] = gameState.players[0]
    } else {
      gameState.board[clicked[0]][clicked[1]] = gameState.players[1]
    }
  }
 switchPlayer();
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
        }
      } 
    })
  })
}


/* Winning Combinations and Restart Button to be Completed */

$('#app').on('click', '.cell', onBoardClick)

renderState();