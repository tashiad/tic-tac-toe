class Game {
  constructor() {
    // var player1 = new Player('one', '⛷');
    // var player2 = new Player('two', '🚵');
    this.totalToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
  };

  changeTurns() { // NOT WORKING YET
    if (this.currentTurn === 1) {
      clickSquare(player1); // don't know what squareNum is here
      this.currentTurn = 2;
    } else if (this.currentTurn === 2) {
      clickSquare(player2); // don't know what squareNum is here
      this.currentTurn = 1;
    };
  };

  clickSquare(player, squareNum) {
    this.checkTotal(player);
    player.clicked.push(squareNum);
    this.buildNewBoard(squareNum, player.token);
    var index = this.totalToClick.indexOf(squareNum);
    this.totalToClick.splice(index, 1);
  };

  checkTotal(player) { // NOT WORKING YET
    if (this.totalToClick.length <= 5) {
      this.checkForWinningCombo(player);
    };
    if ((this.totalToClick.length === 0) && (this.winningCombo === false)) {
      this.tie = true;
    };
  };

  // REFACTOR THIS LATER
  checkForWinningCombo(player) { // NOT WORKING YET
    if (player.clicked.includes(1) && player.clicked.includes(2) && player.clicked.includes(3)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(1) && player.clicked.includes(4) && player.clicked.includes(7)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(1) && player.clicked.includes(5) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(2) && player.clicked.includes(5) && player.clicked.includes(8)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(3) && player.clicked.includes(5) && player.clicked.includes(7)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(3) && player.clicked.includes(6) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(4) && player.clicked.includes(5) && player.clicked.includes(6)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    } else if (player.clicked.includes(7) && player.clicked.includes(8) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      player.winningBoards.push(this.newBoard);
      reset();
    };
  };

  // REFACTOR THIS LATER
  buildNewBoard(squareNum, token) {
    if (squareNum === 1) {
      this.newBoard.splice(0, 1, token);
    } else if (squareNum === 2) {
      this.newBoard.splice(1, 1, token);
    } else if (squareNum === 3) {
      this.newBoard.splice(2, 1, token);
    } else if (squareNum === 4) {
      this.newBoard.splice(3, 1, token);
    } else if (squareNum === 5) {
      this.newBoard.splice(4, 1, token);
    } else if (squareNum === 6) {
      this.newBoard.splice(5, 1, token);
    } else if (squareNum === 7) {
      this.newBoard.splice(6, 1, token);
    } else if (squareNum === 8) {
      this.newBoard.splice(7, 1, token);
    } else if (squareNum === 9) {
      this.newBoard.splice(8, 1, token);
    };
  };

  reset() {
    this.totalToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentTurn = 1;
    this.winningCombo = false;
    this.tie = false;
    player1.clicked = [];
    player2.clicked = [];
    player1.isWinner = false;
    player2.isWinner = false;
  };

};
