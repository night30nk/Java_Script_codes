// Loops 10 challenges

// Challenge 1 
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < tea.length; i++) {
    if (tea[i] ===  "chai") {
        break;
    }
    else {
        selectedTeas.push(tea[i]);
    }
}
console.log(selectedTeas);

// Challenge 2
let city = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];
for (let i = 0; i < city.length; i++) {
    if (city[i] === "Paris") {
        continue;
    }
    else {
        visitedCities.push(city[i]);
    }
}
console.log(visitedCities);

// Challenge 3
let array = [1,2,3,4,5];
let smallNumbers = [];
for (const element of array) {
    if (element === 4) break;
    smallNumbers.push(element);
}
console.log(smallNumbers);

// Challenge 4
let teaArr = ["chai", "green tea", "herbal tea"];
let preferredTeas = [];
for (const element of teaArr) {
    if (element === "herbal tea") {
        continue;
    }
    preferredTeas.push(element);
}
console.log(preferredTeas);

// Challenge 5
let population = {
    "London": 8900000,
    "New York": 8400000,
    "Paris": 2200000,
    "Berlin": 3500000
}
let cityPopulations = {};
for (const key in population) {
    if (key === "Berlin") {
        break;
    }
    cityPopulations[key] = population[key]; // we can directly create a key in new object and assign the value to it. 
}
console.log(cityPopulations);
// Object.freeze() -> statis method freezes an object. It prevents extensions and making existing properties non-writable.
// Object.hasOwn() -> return true if specified object has indicated property as it's own property.

// call, bind, apply are three methods used. 
// 1. invokes immediately with values and individual arguments -> call
// 2. set the values and used to must be call later -> bind
// 3. invokes immediately with values and array of arguments -> apply

// Challenge 6
let worldCities = {
    "Sydney": 5000000,
    "Tokyo": 9000000,
    "Berlin": 3500000,
    "Paris": 2200000
}
let largeCities = {};
for (let key in worldCities) {
    if (worldCities[key] < 3000000) {
        continue;
    }
    largeCities[key] = worldCities[key];
}
console.log(largeCities);

// Challenge 7 
// using for each in tea array 
// it executes a provided function once for each array element.
// so basically in a for-each loop we write a function (a standard way to write a function)
tea = ["green tea", "black tea", "chai", "oolong tea"];
let availableTeas = [];
tea.forEach(element => {
    if (element === "chai") {
        return; // we can't use break, because, we will snap out from function but not from for-each loop.
    }
    availableTeas.push(element);
});
console.log(availableTeas);

// Challenge 8
city = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];
city.forEach(function(cur) {
    if (cur === "Sydney") {
        return;
    }
    traveledCities.push(cur);
});
console.log(traveledCities); 
// in the for each loop, we have used another way of writing functions.
// like for each index of the element, it's creating a function and then when a certain conditions hit, (throw that function)

// Challenge 9


