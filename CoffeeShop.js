"use strict";
class CoffeShop {
  constructor(name, menu) {
    this.name = name;
    this.menu = menu;
    this.Order = [];
  }
  addOrder(name) {
    const item = this.menu.find((el) => el.order === name);
    if (item) {
      this.Order.push(item);
    } else {
      return "This item is currently unavailable";
    }
  }
  fulfillOrder() {
    if (this.Order.length > 0) {
      const item = this.Order.shift();
      return `${item} is ready!`;
    } else {
      return `All orders are ready!`;
    }
  }
  listOrders() {
    return this.Order;
  }

  cheapestItems() {
    const cheapestItem = this.menu.reduce((acc, el) => {
      if (acc.price >= el.price) {
        acc = el;
      }
      return acc;
    });
    return cheapestItem.order;
  }
  drinksOnly() {
    return this.menu.filter((el) => el.type === "drink");
  }
  foodOnly() {
    return this.menu.filter((el) => el.type === "food");
  }
}
let menu = [
  { order: "orange juice", type: "drink", price: 700 },
  { order: "lemonade", type: "drink", price: 300 },
  { order: "cranberry juice", type: "drink", price: 1500 },
  { order: "pineapple juice", type: "drink", price: 1000 },
  { order: "lemon iced tea", type: "drink", price: 500 },
  { order: "vanilla chai latte", type: "drink", price: 1200 },
  { order: "hot chocolate", type: "drink", price: 600 },
  { order: "iced coffee", type: "drink", price: 400 },
  { order: "tuna sandwich", type: "food", price: 800 },
  { order: "ham and cheese sandwich", type: "food", price: 1000 },
  { order: "bacon and egg", type: "food", price: 600 },
  { order: "steak", type: "food", price: 2500 },
  { order: "hamburger", type: "food", price: 1800 },
  { order: "cinnamon roll", type: "food", price: 1000 },
];
let tcs = new CoffeShop("Art lunch", menu);
tcs.addOrder("hot cocoa"); // "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea"); // "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process
tcs.addOrder("cinnamon roll"); // "Order added!"
tcs.addOrder("iced coffee"); // "Order added!"
tcs.listOrders; // ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order
tcs.fulfillOrder(); // "The cinnamon roll is ready!"
tcs.fulfillOrder(); // "The iced coffee is ready!"
tcs.fulfillOrder(); // "All orders have been fulfilled!"
// all orders have been presumably served
tcs.listOrders(); // []
// an empty array is returned if all orders have been exhausted
tcs.drinksOnly(); // ["orange juice", "lemonade", "cranberry juice","pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly(); // ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
