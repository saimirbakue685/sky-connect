/*
 * Filename: sophisticated_code.js
 * Content: A complex example showcasing various JavaScript concepts and functionalities.
 */

// Define a class for a person
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Create objects of the Person class
const person1 = new Person("John", 30);
const person2 = new Person("Jane", 25);

// Create an array of people
const people = [person1, person2];

// Iterate over the array and call the sayHello method for each person
for (const person of people) {
    person.sayHello();
}

// Create a closure function to calculate the factorial of a number
function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    return number * factorial(number - 1);
}

// Calculate and display the factorial of 5
const factorialResult = factorial(5);
console.log(`Factorial of 5 is: ${factorialResult}`);

// Create a generator function to generate Fibonacci numbers
function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

// Generate the first 10 Fibonacci numbers and display them
const fibonacciGenerator = fibonacci();
for (let i = 0; i < 10; i++) {
    console.log(fibonacciGenerator.next().value);
}

// Create a class to represent a basic Calculator
class Calculator {
    constructor() {
        this.memory = 0;
    }

    add(value) {
        this.memory += value;
    }

    subtract(value) {
        this.memory -= value;
    }

    multiply(value) {
        this.memory *= value;
    }

    divide(value) {
        if (value === 0) {
            console.log("Error: Division by zero");
        } else {
            this.memory /= value;
        }
    }

    clear() {
        this.memory = 0;
    }
}

// Use the Calculator class to perform various calculations
const calculator = new Calculator();
calculator.add(5);
calculator.multiply(3);
calculator.subtract(2);
calculator.divide(4);
console.log(`Calculator memory: ${calculator.memory}`);

// Implement a function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str.toLowerCase() === reversedStr.toLowerCase();
}

// Check if "racecar" and "hello" are palindromes
console.log(`Is "racecar" a palindrome? ${isPalindrome("racecar")}`);
console.log(`Is "hello" a palindrome? ${isPalindrome("hello")}`);

// Create an async function to fetch data from an API
async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched data:", data);
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

// Fetch data from an API
fetchData("https://api.example.com/data");

// Define a class for a Rectangle shape
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    get perimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create a rectangle object and calculate its area and perimeter
const rectangle = new Rectangle(5, 10);
console.log(`Rectangle area: ${rectangle.area}`);
console.log(`Rectangle perimeter: ${rectangle.perimeter}`);

// Implement a debounce function to limit the frequency of function calls
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Define a function to be debounced
function handleInput(value) {
    console.log(`Input value: ${value}`);
}

// Create a debounced version of the handleInput function
const debouncedHandleInput = debounce(handleInput, 500);

// Simulate input events triggering the debounced function
debouncedHandleInput("Hello");
debouncedHandleInput("World");
debouncedHandleInput("Debouncing");

// Generate a random number between a specified range
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate and display 5 random numbers between 1 and 10
for (let i = 0; i < 5; i++) {
    console.log(getRandomNumber(1, 10));
}

// Create an event emitter class
class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(eventName, listener) {
        if (!this.events[eventName]) {
            this.events[eventName] = [];
        }
        this.events[eventName].push(listener);
    }

    emit(eventName, ...args) {
        const eventListeners = this.events[eventName];
        if (eventListeners) {
            for (const listener of eventListeners) {
                listener.apply(this, args);
            }
        }
    }

    removeListener(eventName, listenerToRemove) {
        const eventListeners = this.events[eventName];
        if (eventListeners) {
            this.events[eventName] = eventListeners.filter(listener => listener !== listenerToRemove);
        }
    }

    removeAllListeners(eventName) {
        delete this.events[eventName];
    }
}

// Create an instance of EventEmitter and add event listeners
const eventEmitter = new EventEmitter();

// Define event listener functions
const listener1 = () => console.log("Event 1 emitted");
const listener2 = () => console.log("Event 2 emitted");

// Add event listeners
eventEmitter.on("event1", listener1);
eventEmitter.on("event2", listener2);

// Emit events
eventEmitter.emit("event1");
eventEmitter.emit("event2");

// Remove event listener
eventEmitter.removeListener("event1", listener1);

// Emit events again
eventEmitter.emit("event1");
eventEmitter.emit("event2");

// Remove all event listeners for the second event
eventEmitter.removeAllListeners("event2");

// Emit events one last time
eventEmitter.emit("event1");
eventEmitter.emit("event2");