// here we will investigate and convert from one type to another

// let's say if I have a number and I want to convert it into string
let num = 123
console.log(typeof (num)); // it will print the type of number 

let numToString = String(num); // it will convert it into stirng
console.log(typeof (numToString));

let isPossible = true;

let booleanToInt = Number(isPossible); // it convett the boolean to number
console.log(booleanToInt); // it will print 1 

let string = "nisha";
console.log(Number(string)); // it will print NaN

// String to Number conversion
// "" -> 0
// "123abc" -> NaN (not a number)
// "123" -> 123 

// Boolean to Number conversion and vice versa
// true -> 1, false -> 0

// null -> to Number (0) print
// undefined -> to Number (NaN) print


