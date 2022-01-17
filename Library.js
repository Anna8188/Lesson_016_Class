"use strict";
class Book {
  constructor(title, author) {
    this._title = title;
    this._author = author;
  }

  get title() {
    return this._title;
  }

  get author() {
    return this._author;
  }
  toString() {
    return `Book "${this.title}" written by ${this.author}.`;
  }
  isTheSameBook(book) {
    return (
      book instanceof Book &&
      this.title === book.title &&
      this.author === book.author
    );
  }
}

//console.log(book1.toString()); // Book "The Painted Veil" written by William Somerset Maugham.
//console.log(book1.isTheSameBook(book2));// true
class LibraryBookBase extends Book {
  constructor(title, author) {
    super(title, author);
    this._bookId = ++LibraryBookBase.index;
  }
  static index = 0;
  get bookId() {
    return this._bookId;
  }
}
//let LibraryBook1 = new LibraryBookBase(book1.title, book1.author);
//console.log(LibraryBook1.toString());//Book "The Painted Veil" written by William Somerset Maugham.
class LibraryBook extends Book {
  constructor(title, author, quantity) {
    super(title, author);
    this._quantity = quantity;
    this._bookId = ++LibraryBook.index;
  }
  static index = 0;
  get bookId() {
    return this._bookId;
  }

  get quantity() {
    return this._quantity;
  }
  increaseQuantityBy(amount = 1) {
    if (typeof amount !== "number" || amount === NaN) {
      return `Wrong Input 🤔`;
    }
    this._quantity += amount;
  }
  decreaseQuantityBy(amount) {
    if (
      typeof amount !== "number" ||
      amount === NaN ||
      amount > this._quantity
    ) {
      return `Wrong Input 🤔`;
    }
    this._quantity -= amount;
  }
}
//let libraryBook1 = new LibraryBook(book1.title, book1.author, 4);
//console.log(libraryBook1._bookId); // 1

class ReaderBook extends Book {
  constructor(title, author, expirationDate, isReturned) {
    super(title, author);
    this._bookId = ++ReaderBook.index;
    this._expirationDate = expirationDate;
    this._isReturned = isReturned;
  }
  static index = 0;

  get expirationDate() {
    return this._expirationDate;
  }
  set expirationDate(newExperationDate) {
    if (typeof newExperationDate === "string") {
    }
  }

  get isReturned() {
    return this._expirationDate;
  }
}
class Library {
  constructor(name, books) {
    this._name = name;
    (this._books = books), (this._readers = []);
  }

  get name() {
    return this._name;
  }

  get books() {
    return this._books;
  }

  get readers() {
    return this._readers;
  }

  doHaveBook(requestedBook) {
    if (requestedBook instanceof Book) {
      return this.books.some((el) => {
        return (
          el.name === requestedBook.name && el.author === requestedBook.author
        );
      });
    }

    return "Invalid book!!";
  }

  addBook(newBook) {
    if (newBook instanceof LibraryBook) {
      this._books.push(newBook);

      return "Your book successfully added!";
    }

    return "Invalid Book!!";
  }

  addBooks(newBooks) {
    const isValidBooks = newBooks.every((el) => el instanceof LibraryBook);
    if (isValidBooks) {
      this._books = [...this._books, ...newBooks];

      return "Your books successfully added!";
    }

    return "Invalid Book!!";
  }

  checkReaderID(id) {
    if (Reader.allReaders.includes(id)) return true;
    else return false;
  }
  lendBook(book, readerID) {
    if (
      Reader.allReaders.includes(readerID) &&
      Library.prototype.doHaveBook(book)
    ) {
      return ReaderBook(book);
    }
  }
}

const book1 = new LibraryBook("You Don't know JS", "Kyle Simpson", 5);
const book2 = new LibraryBook("Design Patterns", "Alexander Shvarts", 2);
const book3 = new LibraryBook(
  "Ժողովրդական հեքիաթներ",
  "Հովհաննես Թումանյան",
  15
);

const book4 = new LibraryBook("Aa", "ASP", 6);
const book5 = new LibraryBook("Va", "Հովհաննես Թումանյան", 1);

const myBooks = [book1, book2, book3];

const myLibrary = new Library("My Library", myBooks);

class Reader {
  constructor(firstName, lastName, books) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = books;
    this.readersID = Reader.incrementID();
  }
  static incrementID() {
    if (!this.readersID) {
      this.readersID = 1;
      this.allReaders = [];
      this.allReaders.push(this.readersID);
    } else {
      this.readersID++;
      this.allReaders.push(this.readersID);
      return this.readersID;
    }
  }
}

console.log(Reader.readersID);

const firstReader = new Reader("Anna", "Sargsyan", "Ժողովրդական հեքիաթներ");

const secondReader = new Reader("Hakob", "Hakobyan", "Design Patterns");

const thirdReader = new Reader("Petros", "Petrosyan", "Ժողովրդական հեքիաթներ");
// console.log(myLibrary.doHaveBook(defaultBook))

// myLibrary.addBooks([book4, book5])

// console.log(myLibrary.books)

// console.log(book1.isTheSameBook(book2))
// console.log(book1.isTheSameBook(book3))

console.log(firstReader);
console.log(secondReader);
console.log(thirdReader);
console.log(Reader.allReaders);
let Books = [book1, book2, book3];
const Library1 = new Library("Hanrayin", Books);
