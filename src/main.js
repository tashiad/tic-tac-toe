// Query Selectors:
var header = document.querySelector("h1");
var skiier = document.querySelector("#skiier");
var biker = document.querySelector("#biker");
var table = document.querySelector("table");
var squares = document.querySelectorAll(".td");

// Global Variables:
var game = new Game('one', '⛷', 'two', '🚵');

// Event Listeners:
// window.addEventListener("load", showWins);
table.addEventListener("click", identifySquare);

// Event Handlers & Functions:

function identifySquare(event) {
  if (event.target.classList.contains("td")) {
    event.target.classList.add("disabled");
    showToken(event.target);
  };
};

function showToken(square) {
  if (game.currentTurn === 1) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player1.token}`;
    header.innerText = `It's ${game.player2.token}'s turn`;
    game.clickSquare(game.player1, idNum);
    changeHeader(game.player1);
    showWins();
  } else if (game.currentTurn === 2) {
    var idNum = square.id[square.id.length - 1];
    square.innerText = `${game.player2.token}`;
    header.innerText = `It's ${game.player1.token}'s turn`;
    game.clickSquare(game.player2, idNum);
    changeHeader(game.player2);
    showWins();
  };
};

function changeHeader(player) {
  if (game.tie) {
    header.innerText = `It's a draw!`;
    setTimeout(resetBoard, 3000);
  };
  if (player.isWinner) {
    header.innerText = `${player.token} wins!`;
    setTimeout(resetBoard, 3000);
  };
};

function showWins() {
  skiier.innerText = `${game.player1.wins} wins`;
  biker.innerText = `${game.player2.wins} wins`;
};

function resetBoard() {
  game.reset();
  header.innerText = `It's ${game.player1.token}'s turn`;
  for (var i = 0; i < squares.length; i++) {
    squares[i].innerText = "";
  };
};
