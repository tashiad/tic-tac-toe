// Query Selectors:
var header = document.querySelector("h1");
var skiier = document.querySelector("#skiier");
var biker = document.querySelector("#biker");
var box1 = document.querySelector("#box-1");
var box2 = document.querySelector("#box-2");
var box3 = document.querySelector("#box-3");
var box4 = document.querySelector("#box-4");
var box5 = document.querySelector("#box-5");
var box6 = document.querySelector("#box-6");
var box7 = document.querySelector("#box-7");
var box8 = document.querySelector("#box-8");
var box9 = document.querySelector("#box-9");

// Global Variables:
var game = new Game();
var player1 = new Player('one', '⛷');
var player2 = new Player('two', '🚵');

// Event Listeners:
box1.addEventListener("click", showToken);
box2.addEventListener("click", showToken);
box3.addEventListener("click", showToken);
box4.addEventListener("click", showToken);
box5.addEventListener("click", showToken);
box6.addEventListener("click", showToken);
box7.addEventListener("click", showToken);
box8.addEventListener("click", showToken);
box9.addEventListener("click", showToken);

// Event Handlers & Functions:


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
