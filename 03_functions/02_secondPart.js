// In the below function "is.NaN" is the keyword used to check whether that number is NaN or not. 
function stringToNumber(input) {
    if (Number.isNaN(Number(input))) {
        return "Not a number";
    }
    return Number(input);
}

// '!' not operator is used to convert a compliment of the upcoming result.
function flipBoolean(input) {
    let boolInput = Boolean(input);
    return !boolInput;
}

// normal string interpolation code
function whatAmI(input) {
    return `I'm a ${typeof(input)}!`;
}

// here whatever the input is coming, it's converted into the boolean type
// here, ternary operators are used, for in-line if-else code.
function isItTruthy(input) {
    return Boolean(input) ? "It's truthy!" : "It's falsey!";
}

//The filter() method of Array instances creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.
function filterNumbers(arr) {
    // this takes the function inside, and filter according to that. 
    return arr.filter(item => typeof(item) === 'number');
}

function reverseArray(arr) {
    arr.reverse(); // reverse the given array.
    return arr;
}

function findMax(arr) {
    return Math.max(...arr); // this will iterate on all array. and calculate the max of it. 
}

function removeDuplicates(arr) {
    return [...new Set(arr)]; // this will create a new array with set (arr)
}

function flattenArray(arr) {
    // takes a nested array and flats it.
    return arr.flat(Infinity);
}

function sumOfN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function printMultiplicationTable(n) {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push(`${n} * ${i} = ${n*i}`);
    }
    return arr;
}

function countVowels(str) {
    // the below code can be run in an optimized manner.
    // with the help of "include" function. 
    // const vowels = 'aeiouAEIOU'
    let cnt = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == 'a' || str.charAt(i) == 'A' || 
            str.charAt(i) == 'e' || str.charAt(i) == 'E' ||
            str.charAt(i) == 'i' || str.charAt(i) == 'I' ||
            str.charAt(i) == 'o' || str.charAt(i) == 'O' ||
            str.charAt(i) == 'u' || str.charAt(i) == 'U') {
            
            cnt++;        
        }
    }
    return cnt;
}

// The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.
const squareNumbers = (arr) => (
    arr.map(x => x*x) // here it's just manipulate the array as according we need.
);

// here, it's filter the certain elements in the array. (like filtering out all even number)
const filterEvenNumbers = (arr) => (
    arr.filter(items => (items % 2 === 0))
);

// here first we filter the array, and then later we reduce so that we can calculate the positive sum only.
// here, sum := accumulator, num := current value of the array.
const sumPositiveNumbers = (arr) => (
    arr.filter(items => (items >= 0)).reduce((sum, num) => sum+num, 0)
);

const getNames = (arr) => (
    arr.map(x => x.name)    
);

// here order of (long, curr) matters, because, in js, the order of accumulator matters. 
// long := accumulator, and curr := is the current value
const findLongestWord = (arr) => (
    arr.reduce((long, curr) => curr.length > long.length ? curr : long, "")  
);

// here, the below person is an object and it has two attributes and one function
// so, using 'this' operator assignes the values which are originally present in the object.
const person = {
    name: 'Hitesh',
    year: '19.5',
    introduce() {
        return `Hi, my name is ${this.name} and I am ${this.year} years old`;
    }
};

// here, nested function example is there. 
function outer() {
    function inner() {
        return `Inner function called`;
    }
    return inner();
}

