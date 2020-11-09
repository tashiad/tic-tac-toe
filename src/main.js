// Query Selectors:
var header = document.querySelector("h1");
var skiier = document.querySelector("#skiier");
var biker = document.querySelector("#biker");
var table = document.querySelector("table");

// Global Variables:
var game = new Game('one', '⛷', 'two', '🚵');

// Event Listeners:
window.addEventListener("load", showWins);
table.addEventListener("click", identifySquare);

// Event Handlers & Functions:
function identifySquare(event) {
  if (event.target.classList.contains("td")) {
    showToken(event.target);
  }
}

function showToken(square) {
  if (game.currentTurn === 1) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player1.token}`;
    disableSquare(square);
    header.innerText = `It's ${game.player2.token}'s turn`;
    game.clickSquare(game.player1, idNum);
  } else if (game.currentTurn === 2) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player2.token}`;
    disableSquare(square);
    header.innerText = `It's ${game.player1.token}'s turn`;
    game.clickSquare(game.player2, idNum);
  };
};

function disableSquare(square) { // NOT WORKING
  // if ((square.innerText.includes("⛷")) || (square.innerText.includes("🚵‍"))) {
  //   square.disabled = true;
  // } else {
  //   square.disabled = false;
  // };
  if (square.innerText != "") {
    square.disabled = true;
  } else {
    square.disabled = false;
  };
};

function changeHeader(player) {
  if (game.tie = true) {
    header.innerText = `It's a draw!`;
  }
  if (player.isWinner) {
    header.innerText = `${player.token} wins!`;
  };
};

function showWins() {
  skiier.innerText = `${game.player1.wins} wins`;
  biker.innerText = `${game.player2.wins} wins`;
};

function resetBoard() {
  for (var i = 0; i < square.length; i++) {
    square[i].innerText = '';
  }
  game.reset();
};
