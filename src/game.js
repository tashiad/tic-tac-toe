class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    this.combinedSquaresClicked = [];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
  };

  changeTurns() {
    this.currentTurn = this.currentTurn === 1 ? 2 : 1;
  };

  updateClickedSquares(player, squareNum) {
    player.clicked.push(squareNum);
    this.combinedSquaresClicked.push(squareNum);
    // this.checkTotal(player);
    this.checkForWinningCombo(player);
  };

  // checkTotal(player) { // where can i changeTurn?
  //   if (this.combinedSquaresClicked.length >= 5) {
  //     this.checkForWinningCombo(player);
  //   } else if ((this.combinedSquaresClicked.length === 9) && (this.winningCombo === false)) {
  //     this.tie = true;
  //   } else {
  //     this.changeTurns();
  //   }
  // };

  checkForWinningCombo(player) {
    debugger
    if (this.combinedSquaresClicked.length >= 5) {
      if ((player.clicked.includes("1")) && (player.clicked.includes("2")) && (player.clicked.includes("3"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("1")) && (player.clicked.includes("4")) && (player.clicked.includes("7"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("1")) && (player.clicked.includes("5")) && (player.clicked.includes("9"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("2")) && (player.clicked.includes("5")) && (player.clicked.includes("8"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("3")) && (player.clicked.includes("5")) && (player.clicked.includes("7"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("3")) && (player.clicked.includes("6")) && (player.clicked.includes("9"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("4")) && (player.clicked.includes("5")) && (player.clicked.includes("6"))) {
        this.executeWin(player);
        return;
      } else if ((player.clicked.includes("7")) && (player.clicked.includes("8")) && (player.clicked.includes("9"))) {
        this.executeWin(player);
        return;
      } else if ((this.combinedSquaresClicked.length === 9) && (this.winningCombo === false)) {
        this.tie = true;
        return;
      } else {
        this.changeTurns();
      };
    } else {
      this.changeTurns();
    };
  };

  executeWin(player) {
    this.winningCombo = true;
    player.isWinner = true;
    player.wins++;
    player.saveWinsToStorage(player);
  };

  reset() {
    this.combinedSquaresClicked = [];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
    this.player1.clicked = [];
    this.player2.clicked = [];
    this.player1.isWinner = false;
    this.player2.isWinner = false;
  };

};
