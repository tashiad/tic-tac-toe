class Game {
  constructor() {
    var player1 = new Player('one', '⛷');
    var player2 = new Player('two', '🚵');
    this.totalToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.newBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentTurn = player1;
    this.winningCombo = false;
    this.tie = false;
  }

  clickSquare(player, num) {
    player.clicked.push(num);
    var index = this.totalToClick.indexOf(num);
    this.totalToClick.splice(index, 1);
  }

  checkTotal() {
    if ((this.totalToClick.length >= 5) && (this.totalToClick.length < 9)) {
      checkForWinningCombo(player)
    }
    if ((this.totalToClick.length === 0) && (this.winningCombo === false)) {
      this.tie = true;
    }
  }

  changeTurns() { // invoke in clickSquare? or invoke in each checkForWinningCombo condition
    if (this.currentTurn === player1) {
      this.currentTurn === player2;
    } else if (this.currentTurn === player2) {
      this.currentTurn === player1;
    }
  }

  // REFACTOR THIS LATER?
  checkForWinningCombo(player) {
    if (player.clicked.includes(1) && player.clicked.includes(2) && player.clicked.includes(3)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(1) && player.clicked.includes(4) && player.clicked.includes(7)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(1) && player.clicked.includes(5) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(2) && player.clicked.includes(5) && player.clicked.includes(8)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(3) && player.clicked.includes(5) && player.clicked.includes(7)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(3) && player.clicked.includes(6) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(4) && player.clicked.includes(5) && player.clicked.includes(6)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    } else if (player.clicked.includes(7) && player.clicked.includes(8) && player.clicked.includes(9)) {
      this.winningCombo = true;
      player1.isWinner = true;
      player.wins++;
      return `${player.token} won!`;
    }
  }

  // REFACTOR THIS LATER?
  buildNewBoard(num, token) { // invoke in clickSquare
    if (num === 1) {
      this.newBoard.splice(0, 1, token)
    } else if (num === 2) {
      this.newBoard.splice(1, 1, token)
    } else if (num === 3) {
      this.newBoard.splice(2, 1, token)
    } else if (num === 4) {
      this.newBoard.splice(3, 1, token)
    } else if (num === 5) {
      this.newBoard.splice(4, 1, token)
    } else if (num === 6) {
      this.newBoard.splice(5, 1, token)
    } else if (num === 7) {
      this.newBoard.splice(6, 1, token)
    } else if (num === 8) {
      this.newBoard.splice(7, 1, token)
    } else if (num === 9) {
      this.newBoard.splice(8, 1, token)
    }
  }

  reset() { // invoke in each checkForWinningCombo condition
    this.totalToClick = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    this.currentTurn = 'one';
    this.winningCombo = false;
    this.tie = false;
    player1.clicked = [];
    player2.clicked = [];
    player1.isWinner = false;
    player2.isWinner = false;
  }

}
