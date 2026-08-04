// Challenge 1 

let teaFlavors = ["green tea", "black tea", "oolong tea"];
const firstTea = teaFlavors[0];

// Challenge 2

let cities = ["London", "Tokyo", "Paris", "New York"];
const favoriteCity = cities[2];

// Challenge 3 

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";

// Challenge 4

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin"); // citiesVisited[2] = "Berlin" (work✅)

// Challenge 5

let teaOrders = ["chai", "iced tea", "matcha", "earl grey"];
const lastOrder = teaOrders.pop();

// Challenge 6

let popularTeas = ["green tea", "oolong tea", "chai"];
const softCopyTeas = popularTeas;

// Challenge 7

let topCities = ["Berlin", "Singapore", "New York"];
let hardCopyCities = [...topCities]; // (...) -> spread operator 

// Challenge 8

let europeanCities = ["Paris", "Rome"];
let asianCities = ["Tokyo", "Bangkok"];
let worldCities = [...europeanCities, ...asianCities]; // concat method -> also work

// Challenge 9

let teaMenu = ["masala chai", "oolong tea", "green tea", "earl grey"];
let menuLength = teaMenu.length;

// Challenge 10

let cityBuckedList = ["Kyoto", "London", "Cape Town", "Vancouver"];
let isLondonInList = false;
for (let i = 0; i < cityBuckedList.length; i++){
    if (cityBuckedList[i] == "London") {
        isLondonInList = true;
    }
}
// let isLondonInList = cityBuckedList.includes("London"); -> also works






