// Query Selectors:


// Global Variables:
var game = new Game();
var player1 = new Player('one', '⛷');
var player2 = new Player('two', '🚵');

// Event Listeners:


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
