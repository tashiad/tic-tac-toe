class Game {
  constructor(id1, token1, id2, token2) {
    this.player1 = new Player(id1, token1);
    this.player2 = new Player(id2, token2);
    // this.leftToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // this isn't splicing correctly now
    this.totalSquaresClicked = []; // this isn't splicing correctly now
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
    // this.newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  };

  clickSquare(player, squareNum) {
    player.clicked.push(squareNum);
    this.totalSquaresClicked.push(squareNum);
    // var index = this.leftToClick.indexOf(squareNum);
    // this.leftToClick.splice(index, 1);
    // this.checkTotal(player);
    this.checkForWinningCombo(player)
    // this.buildNewBoard(squareNum, player.token);
  };

  changeTurns() {
    this.currentTurn = this.currentTurn === 1 ? 2 : 1;
  };

  // checkTotal(player) {
  //   if (this.totalSquaresClicked.length >= 5) {
  //     this.checkForWinningCombo(player);
  //   } else if ((this.totalSquaresClicked.length === 9) && (this.winningCombo === false)) {
  //     this.tie = true;
  //   } else {
  //     this.changeTurns();
  //   }
  // };

  // checkTotal(player) {
  //   if (this.leftToClick.length <= 8 && this.leftToClick.length >= 5) {
  //     this.changeTurns();
  //   }
  //   if (this.leftToClick.length <= 4) {
  //     this.checkForWinningCombo(player); // never got to this?
  //   };
  //   if ((this.leftToClick.length === 0) && (this.winningCombo === false)) {
  //     this.tie = true;
  //     // this.reset(); // set timeout
  //   };
  // };

  setTimeout(reset(), 3000);

  executeWin(player) {
    this.winningCombo = true;
    player.isWinner = true;
    player.wins++;
    header.innerText = `${player.token} wins!`;
    // this.setTimeout(function(){ reset(); }, 3000);
    // this.reset(); // set timeout
    // player.winningBoards.push(this.newBoard);
  };

  checkForWinningCombo(player) {
    if ((this.totalSquaresClicked.length === 9) && (this.winningCombo === false)) {
      this.tie = true;
      header.innerText = `It's a draw!`;
      // setTimeout(function(){ reset(); }, 3000);
    } else if (this.totalSquaresClicked.length >= 5) {
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
      } else {
        this.changeTurns();
      };
    } else {
      this.changeTurns();
    };
  };

  reset() {
    this.totalSquaresClicked = [];
    // this.leftToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // this.newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
    this.player1.clicked = [];
    this.player2.clicked = [];
    this.player1.isWinner = false;
    this.player2.isWinner = false;
  };

  // REFACTOR THIS LATER (IF THIS IS EVEN NEEDED?)
  // buildNewBoard(squareNum, token) {
  //   if (squareNum === 1) {
  //     this.newBoard.splice(0, 1, token);
  //   } else if (squareNum === 2) {
  //     this.newBoard.splice(1, 1, token);
  //   } else if (squareNum === 3) {
  //     this.newBoard.splice(2, 1, token);
  //   } else if (squareNum === 4) {
  //     this.newBoard.splice(3, 1, token);
  //   } else if (squareNum === 5) {
  //     this.newBoard.splice(4, 1, token);
  //   } else if (squareNum === 6) {
  //     this.newBoard.splice(5, 1, token);
  //   } else if (squareNum === 7) {
  //     this.newBoard.splice(6, 1, token);
  //   } else if (squareNum === 8) {
  //     this.newBoard.splice(7, 1, token);
  //   } else if (squareNum === 9) {
  //     this.newBoard.splice(8, 1, token);
  //   };
  // };

};
