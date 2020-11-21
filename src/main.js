// Query Selectors:
let gameState = document.querySelector('#game-state');
let skiier = document.querySelector('#skiier');
let biker = document.querySelector('#biker');
let gameboard = document.querySelector('.gameboard');
let squares = document.querySelectorAll('.gameboard-square');

// Global letiables:
let game = new Game('one', '⛷', 'two', '🚵');

// Event Listeners:
window.addEventListener('load', loadWins);
gameboard.addEventListener('click', identifySquare);

// Event Handlers & Functions:
function identifySquare(event) {
  if (event.target.classList.contains('gameboard-square')) {
    event.target.classList.add('disabled');
    clickSquare(event.target);
  }
}

function clickSquare(square) {
  if (game.currentTurn === 1) {
    executePlayer1Turn(square);
  } else if (game.currentTurn === 2) {
    executePlayer2Turn(square);
  }
  loadWins();
}

function executePlayer1Turn(square) {
  let idNum = square.id[square.id.length - 1];
  square.innerText = `${game.player1.token}`;
  gameState.innerText = `It's ${game.player2.token}'s turn`;
  game.updateClickedSquares(game.player1, idNum);
  changeGameState(game.player1);
}

function executePlayer2Turn(square) {
  let idNum = square.id[square.id.length - 1];
  square.innerText = `${game.player2.token}`;
  gameState.innerText = `It's ${game.player1.token}'s turn`;
  game.updateClickedSquares(game.player2, idNum);
  changeGameState(game.player2);
}

function changeGameState(player) {
  if (game.tie) {
    gameState.innerText = `It's a draw!`;
    endGame();
  }
  if (player.isWinner) {
    gameState.innerText = `${player.token} wins!`;
    endGame();
  }
}

function endGame() {
  disableSquare();
  setTimeout(resetBoard, 3000);
}

function disableSquare() {
  squares.forEach(square => square.classList.add('disabled'))
}

function resetBoard() {
  game.reset();
  determineTurnAfterGameEnd();
  squares.forEach(square => {
    square.innerText = '';
    square.classList.remove('disabled');
  })
}

function determineTurnAfterGameEnd() {
  if (game.currentTurn === 1) {
    gameState.innerText = `It's ${game.player1.token}'s turn`;
  } else if (game.currentTurn === 2) {
    gameState.innerText = `It's ${game.player2.token}'s turn`;
  }
}

function loadWins() {
  game.player1.retrieveWinsFromStorage(game.player1);
  game.player2.retrieveWinsFromStorage(game.player2);
  updateWins();
}

function updateWins() {
  checkForSkiierWins();
  checkForBikerWins();
}

function checkForSkiierWins() {
  if (game.player1.wins === null) {
    skiier.innerText = `0 wins`;
  } else {
    skiier.innerText = `${game.player1.wins} wins`;
  }
}

function checkForBikerWins() {
  if (game.player2.wins === null) {
    biker.innerText = `0 wins`;
  } else {
    biker.innerText = `${game.player2.wins} wins`;
  }
}
