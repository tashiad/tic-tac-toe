class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.clicked = [];
    this.wins = 0;
    this.isWinner = false;
  }

  saveWinsToStorage(player) {
    localStorage.setItem(`${player.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage(player) {
    this.wins = JSON.parse(localStorage.getItem(`${player.id}`));
  }

}
