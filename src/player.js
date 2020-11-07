class Player {
  constructor(id, token) {
    this.id = id; // can't id and token be the same thing?
    this.token = token; // don't forget to put quotes around emoji
    this.clicked = [];
    this.wins = 0;
    this.isWinner = false;
    this.winningBoards = []; // an array of arrays...
  }

  saveWinsToStorage() {

  }

  retreiveWinsFromStorage() {

  }

}
