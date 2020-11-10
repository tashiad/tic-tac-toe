class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.clicked = [];
    this.wins = 0;
    this.isWinner = false;
  };

  saveWinsToStorage(player) {
    if (player.id === 'one') {
      localStorage.setItem('player1Wins', JSON.stringify(this.wins));
    };

    if (player.id === 'two') {
      localStorage.setItem('player2Wins', JSON.stringify(this.wins));
    };
  };

  retrieveWinsFromStorage(player) {
    var player1SavedWins = JSON.parse(localStorage.getItem('player1Wins'));
    var player2SavedWins = JSON.parse(localStorage.getItem('player2Wins'));
    if (player.id === 'one') {
      this.wins = player1SavedWins;
    };
    if (player.id === 'two') {
      this.wins = player2SavedWins;
    };
  };

};
