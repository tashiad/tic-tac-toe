class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    this.combinedSquaresClicked = [];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
  }

  changeTurns() {
    this.currentTurn = this.currentTurn === 1 ? 2 : 1;
  }

  updateClickedSquares(player, squareNum) {
    player.clicked.push(squareNum);
    this.combinedSquaresClicked.push(squareNum);
    this.checkTotal(player);
  }

  checkTotal(player) {
    if (this.combinedSquaresClicked.length >= 5) {
      this.checkGameWinner(player);
    } else {
      this.changeTurns();
    }
  }

  checkRows(player) {
    if ((player.clicked.includes('1')) && (player.clicked.includes('2')) && (player.clicked.includes('3'))) {
      return true;
    } else if ((player.clicked.includes('4')) && (player.clicked.includes('5')) && (player.clicked.includes('6'))) {
      return true;
    } else if ((player.clicked.includes('7')) && (player.clicked.includes('8')) && (player.clicked.includes('9'))) {
      return true;
    }
  }

  checkCols(player) {
    if ((player.clicked.includes('1')) && (player.clicked.includes('4')) && (player.clicked.includes('7'))) {
      return true;
    } else if ((player.clicked.includes('2')) && (player.clicked.includes('5')) && (player.clicked.includes('8'))) {
      return true;
    } else if ((player.clicked.includes('3')) && (player.clicked.includes('6')) && (player.clicked.includes('9'))) {
      return true;
    }
  }

  checkDiags(player) {
    if ((player.clicked.includes('1')) && (player.clicked.includes('5')) && (player.clicked.includes('9'))) {
      return true;
    } else if ((player.clicked.includes('3')) && (player.clicked.includes('5')) && (player.clicked.includes('7'))) {
      return true;
    }
  }

  checkGameWinner(player) {
    if (this.checkRows(player) || this.checkCols(player) || this.checkDiags(player)) {
      this.executeWin(player);
    } else if ((this.combinedSquaresClicked.length === 9) && (this.winningCombo === false)) {
      this.tie = true;
    } else {
      this.changeTurns();
    }
  }

  executeWin(player) {
    this.winningCombo = true;
    player.isWinner = true;
    player.wins++;
    if (player.id === 'one') {
      this.currentTurn = 2;
    } else if (player.id === 'two') {
      this.currentTurn = 1;
    }
    player.saveWinsToStorage(player);
  }

  reset() {
    this.combinedSquaresClicked = [];
    this.winningCombo = false;
    this.tie = false;
    this.player1.clicked = [];
    this.player2.clicked = [];
    this.player1.isWinner = false;
    this.player2.isWinner = false;
  }

}
