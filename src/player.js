class Player {
  constructor(id, token) {
    this.id = id; // can't id and token be the same thing?
    this.token = token;
    this.clicked = [];
    this.wins = 0;
    this.isWinner = false;
    // this.winningBoards = []; // an array of arrays...
  };

  saveWinsToStorage(player) {
    if (player.id === 'one') {
      localStorage.setItem("player1Wins", JSON.stringify(this.wins));
    }
    if (player.id === 'two') {
      localStorage.setItem("player2Wins", JSON.stringify(this.wins));
    }
  };

  // retreiveWinsFromStorage() {
  //   if (localStorage.length < 1) {
  //     return;
  //   };
  //   JSON.parse(localStorage.getItem('player1Wins'));
  //   JSON.parse(localStorage.getItem('player2Wins'));
  // };

};
