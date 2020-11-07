class Player {
  constructor(id, token) {
    this.id = id; //set defaults to player one since that's what we start with?
    this.token = token;
    this.wins = 0;
    this.isWinner = false;
  }

  addWin() {
    this.wins++;
  }

  declareWinner() {
    this.isWinner = true; // will need a conditional here
  }

  clearWins() {
    this.wins = 0;
  }

  saveWinsToStorage() {

  }

  retreiveWinsFromStorage() {

  }

}

// 2 Total Instantiations:
// var player1 = new Player(1, skiier)
// var player2 = new Player(2, biker‍)
