const prompt = require("prompt-sync")({ sigint: true });

const hat = "^";
const hole = "O";
const fieldCharacter = "░";
const pathCharacter = "*";

class Field {
  constructor(fieldArray) {
    this._fieldArray = fieldArray;
    this._playerPosition = fieldArray[0][0];
    this._isGameOver = false;
  }
  get playerPosition() {
    return this._playerPosition;
  }
  set playerPosition(newPosition) {
    this._playerPosition = newPosition;
  }

  print(arrays) {
    for (const array of arrays) {
      console.log(array.join(""));
    }
  }
  getDirection() {
    const direction = prompt("Which way? ");
    return direction.toLowerCase();
  }
  movePlayer(direction) {
    if (direction === "left" || direction === "up") {
      if (direction === "left") this.playerPosition();
    }
  }
}
