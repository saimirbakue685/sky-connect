/* 
   File Name: ComplexCode.js
   Description: This code demonstrates a complex algorithm for solving the travelling salesman problem using a genetic algorithm approach.
   Author: Jane Doe
*/

// Create a list of cities with their coordinates
const cities = [
  { name: "City A", x: 100, y: 100 },
  { name: "City B", x: 200, y: 150 },
  { name: "City C", x: 300, y: 200 },
  { name: "City D", x: 400, y: 250 },
  { name: "City E", x: 500, y: 300 },
  { name: "City F", x: 600, y: 350 },
];

// Generate an initial population of candidate solutions (routes)
function generateInitialPopulation(size) {
  const population = [];
  
  for(let i = 0; i < size; i++) {
    const route = cities.slice();
    shuffleArray(route);
    population.push(route);
  }
  
  return population;
}

// Randomly shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Calculate the total distance of a route
function calculateTotalDistance(route) {
  let totalDistance = 0;
  
  for (let i = 0; i < route.length - 1; i++) {
    const currentCity = route[i];
    const nextCity = route[i + 1];
    
    const distance = calculateDistance(currentCity, nextCity);
    totalDistance += distance;
  }
  
  return totalDistance;
}

// Calculate the Euclidean distance between two cities
function calculateDistance(city1, city2) {
  const dx = city1.x - city2.x;
  const dy = city1.y - city2.y;
  
  const distance = Math.sqrt(dx * dx + dy * dy);
  return distance;
}

// Perform tournament selection to select parents for the mating pool
function performTournamentSelection(population, tournamentSize) {
  const matingPool = [];
  
  for (let i = 0; i < population.length; i++) {
    const tournament = [];
    
    for (let j = 0; j < tournamentSize; j++) {
      const randomIndex = Math.floor(Math.random() * population.length);
      tournament.push(population[randomIndex]);
    }
    
    const bestRoute = getBestRouteFromTournament(tournament);
    matingPool.push(bestRoute);
  }
  
  return matingPool;
}

// Get the best route from a tournament
function getBestRouteFromTournament(tournament) {
  let bestRoute = tournament[0];
  let bestDistance = calculateTotalDistance(bestRoute);
  
  for (let i = 1; i < tournament.length; i++) {
    const route = tournament[i];
    const distance = calculateTotalDistance(route);
    
    if (distance < bestDistance) {
      bestRoute = route;
      bestDistance = distance;
    }
  }
  
  return bestRoute;
}

// Perform single-point crossover to create offspring
function performSinglePointCrossover(parent1, parent2) {
  const crossoverPoint = Math.floor(Math.random() * parent1.length);
  
  const child1 = parent1.slice(0, crossoverPoint);
  const child2 = parent2.filter(city => !child1.includes(city));
  
  return [child1.concat(child2)];
}

// Perform mutation by swapping two cities in a route
function performMutation(route) {
  const mutatedRoute = route.slice();
  
  const index1 = Math.floor(Math.random() * mutatedRoute.length);
  const index2 = Math.floor(Math.random() * mutatedRoute.length);
  
  [mutatedRoute[index1], mutatedRoute[index2]] = [mutatedRoute[index2], mutatedRoute[index1]];
  
  return mutatedRoute;
}

// Perform genetic algorithm to solve the travelling salesman problem
function solveTSP(populationSize, tournamentSize, elitismRate, mutationRate) {
  let population = generateInitialPopulation(populationSize);
  let bestRoute = population[0];
  
  for(let i = 0; i < 1000; i++) {
    const matingPool = performTournamentSelection(population, tournamentSize);
    const elitismSize = Math.floor(populationSize * elitismRate);
    const elites = population.slice(0, elitismSize);
    
    population = elites.concat(matingPool);
    
    for(let j = elitismSize; j < population.length; j++) {
      if (Math.random() < mutationRate) {
        population[j] = performMutation(population[j]);
      }
    }
    
    for(let j = elitismSize; j < population.length; j++) {
      const parent1Index = Math.floor(Math.random() * population.length);
      const parent2Index = Math.floor(Math.random() * population.length);
      
      const parent1 = population[parent1Index];
      const parent2 = population[parent2Index];
      
      const [child] = performSinglePointCrossover(parent1, parent2);
      
      population[j] = child;
    }
    
    const bestRouteDistance = calculateTotalDistance(bestRoute);
    
    for(const route of population) {
      const distance = calculateTotalDistance(route);
      
      if (distance < bestRouteDistance) {
        bestRoute = route;
      }
    }
  }
  
  console.log("Best Route:", bestRoute);
  console.log("Best Distance:", calculateTotalDistance(bestRoute));
}

// Solve the travelling salesman problem using the genetic algorithm
solveTSP(100, 5, 0.2, 0.01);
