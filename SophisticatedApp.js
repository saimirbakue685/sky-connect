// Filename: SophisticatedApp.js

// This script simulates an online shopping application with various features and functionalities.

// Class for representing a product
class Product {
  constructor(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
  }

  displayDetails() {
    console.log(`Product Name: ${this.name}`);
    console.log(`Price: $${this.price}`);
    console.log(`Category: ${this.category}`);
  }
}

// Class for representing a shopping cart
class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalPrice = 0;
  }

  addItem(item) {
    this.items.push(item);
    this.totalPrice += item.price;
  }

  removeItem(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
      this.totalPrice -= item.price;
    }
  }

  checkout() {
    console.log(`Total Price: $${this.totalPrice}`);
    console.log("Checkout completed. Thank you for shopping!");
    this.items = [];
    this.totalPrice = 0;
  }
}

// Creating instance of shopping cart
const cart = new ShoppingCart();

// Creating some product instances
const p1 = new Product("Laptop", 999, "Electronics");
const p2 = new Product("Shoes", 49.99, "Fashion");
const p3 = new Product("Book", 19.99, "Books");

// Adding products to cart
cart.addItem(p1);
cart.addItem(p2);
cart.addItem(p3);

// Removing a product from cart
cart.removeItem(p2);

// Displaying details of the remaining items in cart
console.log("Items in Cart:");
for (const item of cart.items) {
  item.displayDetails();
}

// Checking out the cart
cart.checkout();