// Query Selectors:
var header = document.querySelector("h1");
var skiier = document.querySelector("#skiier");
var biker = document.querySelector("#biker");
var square = document.querySelectorAll("td");
// var square = document.querySelector("td");
var square1 = document.querySelector("#square-1");
var square2 = document.querySelector("#square-2");
var square3 = document.querySelector("#square-3");
var square4 = document.querySelector("#square-4");
var square5 = document.querySelector("#square-5");
var square6 = document.querySelector("#square-6");
var square7 = document.querySelector("#square-7");
var square8 = document.querySelector("#square-8");
var square9 = document.querySelector("#square-9");

// Global Variables:
var game = new Game();
var player1 = new Player('one', '⛷');
var player2 = new Player('two', '🚵');

// Event Listeners:
// square.addEventListener('click', showToken);
window.addEventListener("load", showWins);
square1.addEventListener("click", showToken(square1, 1));
square2.addEventListener("click", showToken(square2, 2));
square3.addEventListener("click", showToken(square3, 3));
square4.addEventListener("click", showToken(square4, 4));
square5.addEventListener("click", showToken(square5, 5));
square6.addEventListener("click", showToken(square6, 6));
square7.addEventListener("click", showToken(square7, 7));
square8.addEventListener("click", showToken(square8, 8));
square9.addEventListener("click", showToken(square9, 9));

// Event Handlers & Functions:

function showToken(squareId, squareNum) {
  if (game.currentTurn === 1) {
    squareId.innerText = '⛷';
    header.innerText = `It's ⛷'s turn`;
    game.clickSquare(player1, squareNum);
  } else if (game.currentTurn === 2) {
    squareId.innerText = '🚵';
    header.innerText = `It's 🚵's turn`;
    game.clickSquare(player2, squareNum);
  }
}

function changeHeader(player) { // NOT WORKING
  if (game.tie = true) {
    header.innerText = `It's a draw!`;
  }
  if (player.isWinner) {
    header.innerText = `${player.token} wins!`;
  }
}

function showWins() { // WORKING!
  skiier.innerText = `${player1.wins} wins`;
  biker.innerText = `${player2.wins} wins`;
}

function resetBoard() {
  for (var i = 0; i < square.length; i++) {
    square[i].innerText = '';
  }
}

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
