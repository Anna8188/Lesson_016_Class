# Lesson 16 OOP Class

> > [<img src="https://hackernoon.com/hn-images/1*XlnVJQ392USdQuQcdyvJ4w.png" width="300" height="200" />](https://hackernoon.com/hn-images/1*XlnVJQ392USdQuQcdyvJ4w.png)

> ## Classes

> > ### 1. Coffe Shope

Properties:

- name: a string (basically, of the shop)
- menu: an array of items (of object type), with each item containing the item (name of the item), type
  (whether food or a drink) and price.
- orders: an empty array
  Methods:

- addOrder: adds the name of the item to the end of the orders array if it exists on the menu.
  Otherwise, return "This item is currently unavailable!"
- fulfillOrder: if the orders array is not empty, return "The {item} is ready!". If the orders array is empty, return "All orders have been fulfilled!"
- listOrders: returns the list of orders taken, otherwise, an empty array.
- dueAmount: returns the total amount due for the orders taken.
- cheapestItem: returns the name of the cheapest item on the menu.
- drinksOnly: returns only the item names of type drink from the menu.
- foodOnly: returns only the item names of type food from the menu.
- IMPORTANT: Orders are fulfilled in a FIFO (first-in, first-out) order.

[SEE Solution](./CoffeeShop.js)

> ### 2. Shiritori

This challenge is an English twist on the Japanese word game Shiritori. The basic premise is to follow two
rules: First character of next word must match last character of previous word. The word must not have already been said. Below is an example of a Shiritori game:

```javascript
["word", "dowry", "yodel", "leader", "righteous", "serpent"]; // valid!
["motive", "beach"]; // invalid! - beach should start with "e"
["hive", "eh", "hive"]; // invalid! - "hive" has already been said
```

Write a Shiritori class that has two instance properties:

- words: an array of words already said.
- game_over: a boolean that is true if the game is over.
  Methods:
- play: a method that takes in a word as an argument and checks if it is valid (the word should follow
  rules #1 and #2 above).
  - If it is valid, it adds the word to the words array, and returns the words array.
  - If it is invalid (either rule is broken), it returns "game over" and sets the game_over boolean to
    true.
  - restart: a method that sets the words array to an empty one [ ] and sets the game_over boolean
    to false. It should return "game restarted".

IMPORTANT Words cannot have already been said.

- The play method should not add an invalid word to the words array.
- You don't need to worry about capitalization or white spaces for the inputs for the play method. There
  will only be single inputs for the play method.

  [SEE Solution](./Shiritori.js)

> ### 3. CustomConsole Class

Create a CustomConsole class with following methods:

- log function that takes user arguments and returns them as a string,
- history function that takes an optional range as an argument,
- clearHistory function to remove the history memory.
- The log function has no limit of arguments.

```javascript
const myConsole = new Console('Regular');
const fancyConsole = new Console('Fancy');
myConsole.log([0, 1, 2, 3]) // "Regular: [0,1,2,3]"
myConsole.log({ a:1, b:2 }) // "Fancy: {a:1, b:2}"
myConsole.log("ok : ", 1, 2, 3) ➞ "ok : 1, 2, 3"
myConsole.clearHistory() // true
myConsole.history() // ""
```

[SEE Solution](./CustomConsole.js)

> ## Required Tasks
>
> Note, setters in all tasks should do some validations

> ### Task 1

Create an Author class and a Book class.

```javascript
let author1 = new Author("J. K. Rowling", "abc@gmail.com", "fEmaLe");
console.log(author1.gender); // female
console.log(author1.name); // J. K. Rowling
console.log(author1.toString()); // Ms. J. K. Rowling
author.name = 12; // throws error
```

[SEE Solution](./AutherBook.js)

> ### Task 2

Create an Account class. Account should have:

- fields
  - id
  - name
  - balance
- getters for fields
- setters - for name and balance
- credit(amount) - which should add amount to balance and return the updated balance.
- debit(amount) - which should subtract the amount from the balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
- transferTo(anotherAccount, amount) - which should subtract the amount from the account
  balance and add it to the given anotherAccount and return the updated balance, if amount is less than the balance, otherwise output “Amount exceeded balance.”
- static method: identifyAccounts(accountFirst, accountSecond) - which gets two
  accounts and identifies if they are the same or not comparing all fields.
- toString()

[SEE Solution](./Account.js)

> ### Task 3
>
> Write classes: Person class and Student class.

```javascript
let user1 = new Person("Name", "Surname", "female", 23);
console.log(user1.toString()); // Name Surname, 23 years old.
```

- Example of program array:

```javascript
[
  { programName: "math", grade: 10 },
  { programName: "english", grade: undefined },
];
```

[SEE Solution](./PersonStudent.JS)

> ### Task 4

Describe a model of a library. For that define classes: **Library**, **Reader**, **Book**.
To create correct hierarchies and connections, you should have a subclasses of Book such as **LibraryBookBase**, **LibraryBook**, **ReaderBook**.

[SEE Solution](./Library.js)
