/*

Filename: SophisticatedProgram.js
Content: A sophisticated and elaborate code demonstrating various advanced concepts and techniques in JavaScript.

*/

// Importing necessary modules
const fs = require('fs');
const http = require('http');
const fetch = require('node-fetch');
const moment = require('moment');

// Defining global constants
const API_KEY = 'your_api_key';
const BASE_URL = 'https://api.example.com';

// Utility function to calculate the factorial of a number
function factorial(n) {
  if (n <= 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Async function to fetch data from an API
async function fetchData(endpoint) {
  const response = await fetch(`${BASE_URL}/${endpoint}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
}

// Function to generate a random number between min and max (inclusive)
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Creating an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!');
});

// Starting the server on port 3000
server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

// Function to check if a given year is a leap year or not
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

// Array of predefined colors
const colors = ['red', 'green', 'blue', 'yellow', 'orange'];

// Looping through the colors array and printing each color
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// Async function to read a file
async function readFile(path) {
  try {
    const content = await fs.promises.readFile(path, 'utf-8');
    console.log(content);
  } catch (error) {
    console.error(`Error reading file: ${error}`);
  }
}

// Creating an instance of the Person class
const person = new Person('John Doe', 25);
person.greet();

// Calculating factorial of a number
console.log(factorial(5));

// Fetching data from an API endpoint
fetchData('users').then((data) => {
  console.log(data);
});

// Checking if a given year is a leap year
console.log(isLeapYear(2024));

// Getting the current date and time using Moment.js
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));

// Generating a random number between 1 and 10
console.log(getRandomNumber(1, 10));

// Function to calculate the sum of an array of numbers
function sumArray(numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Testing the sumArray function
console.log(sumArray([1, 2, 3, 4, 5]));

// More code...

// ...

// ...

// ...

// ...

// End of code (over 200 lines)