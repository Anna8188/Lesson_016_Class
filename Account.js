"use strict";
class Account {
  constructor(name, balance) {
    this.id = Account.index++;
    this._name = name;
    this._balance = balance;
  }

  static index = 0;

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

  set balance(num) {
    if (typeof num === "number") {
      this._balance = num;
    } else {
      throw "Please check your Input. It is should be number.";
    }
    this._balance = num;
  }
  get balance() {
    return this._balance;
  }

  credit(amount) {
    this._balance += amount;
    return this._balance;
  }
  debit(amount) {
    if (this._balance - amount < 0) {
      return `Amount exceeded balance`;
    } else {
      this._balance -= amount;
      return this._balance;
    }
  }
  transferTo(anotherAccount, amount) {
    if (this._balance - amount < 0) {
      return `Amount exceeded balance`;
    } else {
      this._balance -= amount;
      anotherAccount._balance += amount;
      return this._balance;
    }
  }

  get balance() {
    return this._balance;
  }
  static identifyAccounts(firstAccount, secondAccount) {
    if (firstAccount === secondAccount) {
      return true;
    }
    return false;
  }
}
let savingAcc = new Account("Saving account", 2000);
let cardAcc = new Account("Card account", 1000);

// console.log(savingAcc);
// console.log(cardAcc);
// console.log(savingAcc.balance); // 2000
// console.log(savingAcc.credit(400)); // 2400
// console.log(savingAcc.balance); // 2400
// console.log(savingAcc.debit(9000)); //Amount exceeded balance
// console.log(savingAcc.transferTo(cardAcc, 1000)); // 1400
// console.log(savingAcc.balance); // 1400
// console.log(cardAcc.balance); // 2000
// let anotherAcc = savingAcc;
// console.log(Account.identifyAccounts(savingAcc, anotherAcc)); // true
// console.log(Account.identifyAccounts(savingAcc, cardAcc)); // false
