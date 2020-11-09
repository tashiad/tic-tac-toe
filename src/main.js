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
// function setTimeout(functionName, 3000) {
//
// };

function identifySquare(event) {
  if (event.target.classList.contains("td")) {
    showToken(event.target);
  }
}

function showToken(square) {
  if (game.currentTurn === 1) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player1.token}`;
    header.innerText = `It's ${game.player2.token}'s turn`;
    game.clickSquare(game.player1, idNum);
    changeHeader(game.player1);
  } else if (game.currentTurn === 2) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player2.token}`;
    header.innerText = `It's ${game.player1.token}'s turn`;
    game.clickSquare(game.player2, idNum);
    changeHeader(game.player2);
  };
};

function changeHeader(player) {
  if (game.tie) {
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

// PSEUDOCODE
// start out with player 1, skiier
// if <tr> is clicked, innerHTML token for player who's turn it is shows up in that square
// game.clickSquare() is invoked, passing through that player and square number
// disable <tr> once it's clicked
// player.buildNewBoard() is invoked, passing that token through to the player boards array
// game.checkTotal() is invoked, passing through that player
// if 5 turns have been taken, checkForWinningCombo() runs
// if that player's board matches a winning combo:
// game.winningCombo changes to true
// player.isWinner changes to true
// player's wins increases by 1
// h1 innerTEXT changes to "[token] wins!"
// sidebar displays player.wins update
// the data model resets
// game.changeTurns() is invoked
// h1 innerTEXT changes token to show who's turn
