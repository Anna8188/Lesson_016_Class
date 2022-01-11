"use strict";
class Author {
  constructor(name, email, gender) {
    this._name = name;
    this._email = email;
    this._gender = gender.toLowerCase();
  }
  set name(str) {
    if (typeof str === "string") {
      this._name = str;
    } else {
      throw "Please check your input. It can't be everything but string";
    }
  }
  get name() {
    return this._name;
  }
  get email() {
    return this._email;
  }
  get gender() {
    return this._gender;
  }
  toString() {
    if (this._gender === "female") {
      return "Ms." + " " + this._name;
    } else if (this._gender === "male") {
      return "Mrs." + " " + this._name;
    }
  }
}
class Book {
  constructor(title, author, price, quantity) {
    this.title = title;
    this.author = author;
    this.price = price;
    this.quantity = quantity;
  }
  toString() {
    return `Book "${this.title}" by ${this.author} costs ${this.price}$`;
  }
  getProfit() {
    return this._quantity * this._price;
  }
  set title(str) {
    if (typeof str === "string") {
      this._title = str;
    } else {
      throw "Please check your input. It can't be everything but string";
    }
  }
  get title() {
    return this._title;
  }

  set price(num) {
    if (typeof num === "number") {
      this._price = num;
    } else {
      throw "Please check your Input. It is should be number.";
    }
  }
  get price() {
    return this._price;
  }
  set quantity(num) {
    if (typeof num === "number") {
      this._quantity = num;
    } else {
      throw "Please check your Input. It is should be number.";
    }
  }
  get quantity() {
    return this._quantity;
  }
}

let author1 = new Author("William Somerset Maugham", "abc@gmail.com", "fEmaLe");
let book1 = new Book("The Painted Veil", author1._name, 50, 2);
// console.log(author1);
// console.log(book1);
// console.log(author1.toString());
// author1.name = 12;
// console.log(author1.name);
// console.log(author1.email);
// console.log(book1.toString());
