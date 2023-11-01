/* complex_program.js */

// This code snippet is a complex program that simulates a simplified version of an online shopping website.
// It includes features such as user authentication, product search, adding/removing products from cart, and checkout process.

// ...

// Define User class
class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.loggedIn = false;
    }

    login() {
        // Perform user authentication logic
        if (this.isValidCredentials()) {
            this.loggedIn = true;
            console.log('User logged in successfully.');
        } else {
            console.log('Invalid username or password.');
        }
    }

    logout() {
        this.loggedIn = false;
        console.log('User logged out successfully.');
    }

    // Simulate checking the validity of user credentials
    isValidCredentials() {
        return this.username === 'admin' && this.password === 'password';
    }
}

// ...

// Define Product class
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

// ...

// Generate products data
let productsData = [
    { name: 'Laptop', price: 999.99 },
    { name: 'Smartphone', price: 599.99 },
    { name: 'Headphones', price: 199.99 },
    { name: 'TV', price: 1499.99 },
    { name: 'Gaming Console', price: 399.99 }
];

// Initialize products list
let products = productsData.map((data) => new Product(data.name, data.price));

// ...

// Define Cart class
class Cart {
    constructor() {
        this.items = [];
    }

    addItem(product, quantity = 1) {
        // Check if the product already exists in the cart
        let existingItem = this.items.find((item) => item.product === product);

        // If exists, update the quantity. Else, add a new item.
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }

        console.log(`${quantity} ${product.name}(s) added to the cart.`);
    }

    removeItem(product, quantity = 1) {
        // Check if the product exists in the cart
        let existingItem = this.items.find((item) => item.product === product);

        if (existingItem) {
            // Decrease the quantity of the existing item
            existingItem.quantity -= quantity;

            // Remove the item if the quantity reaches zero
            if (existingItem.quantity <= 0) {
                let itemIndex = this.items.indexOf(existingItem);
                this.items.splice(itemIndex, 1);
            }

            console.log(`${quantity} ${product.name}(s) removed from the cart.`);
        } else {
            console.log(`${product.name} not found in the cart.`);
        }
    }

    getTotalPrice() {
        return this.items.reduce((total, item) => (total + item.product.price * item.quantity), 0);
    }

    checkout() {
        console.log('Processing payment...');
        // Complex payment processing logic...
        console.log('Payment successful!');
        console.log('Order placed successfully.');

        this.clearCart();
    }

    clearCart() {
        this.items = [];
        console.log('Cart cleared.');
    }
}

// ...

// Simulate user interaction

// Create a user object
let user = new User('admin', 'password');

// Login user
user.login();

// Create a cart object
let cart = new Cart();

// Add some products to the cart
cart.addItem(products[0], 2);
cart.addItem(products[1]);
cart.addItem(products[2], 3);

// Remove a product from the cart
cart.removeItem(products[0]);

// Checkout the cart
cart.checkout();

// Logout user
user.logout();

// ... (more complex program logic)

// End of complex_program.js