/*
   Filename: SophisticatedCode.js
   Description: An elaborate and complex JavaScript code example
*/

// Define global variables
var num1 = 10;
var num2 = 5;

// Create a function to calculate the factorial of a number
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

// Create an object representing a person
var person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  getFullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

// Create an array of numbers
var numbers = [1, 2, 3, 4, 5];

// Perform some calculations using the numbers array
var sum = numbers.reduce((a, b) => a + b, 0);
var average = sum / numbers.length;
var max = Math.max(...numbers);
var min = Math.min(...numbers);
var squared = numbers.map(num => num * num);

// Create a class representing a car
class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  getDetails() {
    return this.brand + " " + this.model + " (" + this.year + ")";
  }
}

// Create instances of the Car class
var car1 = new Car("Ford", "Mustang", 2020);
var car2 = new Car("Tesla", "Model S", 2021);

// Generate a random number between two given values
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Use a loop to print the factorial of numbers from 1 to 10
for (var i = 1; i <= 10; i++) {
  console.log("Factorial of " + i + ": " + factorial(i));
}

// Print the person's full name
console.log("Person's full name: " + person.getFullName());

// Print the calculated values from the numbers array
console.log("Sum: " + sum);
console.log("Average: " + average);
console.log("Max: " + max);
console.log("Min: " + min);
console.log("Squared: " + squared);

// Print the details of the car instances
console.log("Car 1: " + car1.getDetails());
console.log("Car 2: " + car2.getDetails());

// Generate a random number between 1 and 100
var randomNumber = getRandomNumber(1, 100);
console.log("Random Number: " + randomNumber);

// ... Continue with additional complex operations and functionality ... (over 200 lines)