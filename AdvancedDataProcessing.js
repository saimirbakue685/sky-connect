/*
Filename: AdvancedDataProcessing.js

This code performs advanced data processing operations.

Note: This code is purely for demonstration purposes and does not serve any specific functionality.

*/

// Define sample data
const dataSet = [
  { id: 1, name: 'John', age: 25, city: 'New York' },
  { id: 2, name: 'Sarah', age: 32, city: 'London' },
  { id: 3, name: 'David', age: 20, city: 'Paris' },
  { id: 4, name: 'Jessica', age: 28, city: 'Tokyo' },
  { id: 5, name: 'Michael', age: 35, city: 'Sydney' },
];

// A highly sophisticated function to calculate the average age
function calculateAverageAge() {
  let sum = 0;
  for (let i = 0; i < dataSet.length; i++) {
    sum += dataSet[i].age;
  }
  return sum / dataSet.length;
}

// Sort the data by age in ascending order
function sortByAge() {
  dataSet.sort((a, b) => a.age - b.age);
}

// Find the oldest person in the dataset
function findOldestPerson() {
  return dataSet.reduce((oldest, current) => (current.age > oldest.age ? current : oldest));
}

// Group data by city
function groupByCity() {
  const groupedData = {};
  dataSet.forEach((person) => {
    if (groupedData[person.city]) {
      groupedData[person.city].push(person);
    } else {
      groupedData[person.city] = [person];
    }
  });
  return groupedData;
}

// Perform some complex data processing operations

console.log('Average Age:', calculateAverageAge());

console.log('Oldest Person:', findOldestPerson());

sortByAge();
console.log('Sorted by Age:', dataSet);

const groupedData = groupByCity();
console.log('Grouped by City:', groupedData);

// ... and so on with more complex operations

// Finally, perform some other important functionality...

function someOtherFunction() {
  // ... code for a very important operation
}

someOtherFunction();

console.log('Data processing complete!')