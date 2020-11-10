// Query Selectors:
var header = document.querySelector("h1");
var skiier = document.querySelector("#skiier");
var biker = document.querySelector("#biker");
var gameboard = document.querySelector("table");
var squares = document.querySelectorAll(".td");

// Global Variables:
var game = new Game('one', '⛷', 'two', '🚵');

// Event Listeners:
window.addEventListener("load", loadWins);
gameboard.addEventListener("click", identifySquare);

// Event Handlers & Functions:

function identifySquare(event) {
  if (event.target.classList.contains("td")) {
    event.target.classList.add("disabled");
    clickSquare(event.target);
  };
};

function clickSquare(square) {
  if (game.currentTurn === 1) {
    executePlayer1Turn(square);
  } else if (game.currentTurn === 2) {
    executePlayer2Turn(square);
  };
  loadWins();
};

function executePlayer1Turn(square) {
  var idNum = square.id[square.id.length - 1];
  square.innerText = `${game.player1.token}`;
  header.innerText = `It's ${game.player2.token}'s turn`;
  game.updateClickedSquares(game.player1, idNum);
  changeGameState(game.player1);
}

function executePlayer2Turn(square) {
  var idNum = square.id[square.id.length - 1];
  square.innerText = `${game.player2.token}`;
  header.innerText = `It's ${game.player1.token}'s turn`;
  game.updateClickedSquares(game.player2, idNum);
  changeGameState(game.player2);
}

function changeGameState(player) {
  if (game.tie) {
    header.innerText = `It's a draw!`;
    endGame();
  };
  if (player.isWinner) {
    header.innerText = `${player.token} wins!`;
    endGame();
  };
};

function disableSquare() {
  for (var i = 0; i < squares.length; i++) {
    squares[i].classList.add("disabled");
  };
};

function endGame() {
  disableSquare();
  setTimeout(resetBoard, 3000);
};

function loadWins() {
  game.player1.retrieveWinsFromStorage(game.player1);
  game.player2.retrieveWinsFromStorage(game.player2);
  updateWins();
};

function updateWins() {
  checkForSkiierWins();
  checkForBikerWins();
};

function checkForSkiierWins() {
  if (game.player1.wins === null) {
    skiier.innerText = `0 wins`;
  } else {
    skiier.innerText = `${game.player1.wins} wins`;
  };
}

function checkForBikerWins() {
  if (game.player2.wins === null) {
    biker.innerText = `0 wins`;
  } else {
    biker.innerText = `${game.player2.wins} wins`;
  };
}

function resetBoard() {
  game.reset();
  header.innerText = `It's ${game.player1.token}'s turn`;
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
    squares[i].classList.remove("disabled");
  };
};
