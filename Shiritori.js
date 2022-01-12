"use strict";
class Shiritori {
  constructor() {
    this._words = [];
    this.game_over = false;
  }
  play(word) {
    if (typeof word !== "string") {
      return `Please check your Input, it should be "string" `;
    }
    let arr = this._words;
    let length = arr.length;
    if (arr.indexOf(word) !== -1) {
      return `GAME OVER 😏 - ${word} has already been said Try again`;
    }
    if (length > 2) {
      let wordLength = arr[length - 1].length;
      if (
        word[0].toLowerCase() === arr[length - 1][wordLength - 1].toLowerCase()
      ) {
        this._words.push(word);
      }
      return `GAME OVER 😏 - ${word} should start with ${arr[length - 1][
        wordLength - 1
      ].toLowerCase()} Try again`;
    } else {
      this._words.push(word);
    }
  }
  restart() {
    this._words = [];
    return `game restarted!`;
  }
}
// let myShiritori = new Shiritori();
// myShiritori.play("apple"); // ["apple"]
// myShiritori.play("ear"); // ["apple", "ear"]
// myShiritori.play("rhino"); // ["apple", "ear", "rhino"]
// console.log(myShiritori.play("corn")); // "game over"
// console.log(myShiritori);
// console.log(myShiritori.restart());
// myShiritori.play("hostess"); // ["hostess"]
// myShiritori.play("stash"); // ["hostess", "stash"]
// console.log(myShiritori.play("hostess")); // "game over"
