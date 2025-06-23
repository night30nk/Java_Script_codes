// here we will study about the numbers which are defines by new keyword 

const balance = new Number(100) // suppose user has a balance of 100

console.log(balance); // it will print the Number datatype and it's score value

// this Number provides us various functionality and prototypes to work on
console.log(balance.toString()); // it will convert the abovve balance to string datatypes and we can access the properties of strings
console.log(balance.toFixed(4)); /// it fixed the balance values and set it's precision to 4 decimal places

// wow, we can also set the balance to the indian system or foriegn system
// like this 10000000 -> 10,000,000 or 1,00,00,000

const currMoney = 10000000
console.log(currMoney.toLocaleString('en-IN')); // convert in the indian ruppees system
console.log(currMoney.toLocaleString()); // convert in the foreign currency values i.e 10 millions


console.log(Math); // this is the object defined in the javascript which provide various funcitons.
// Math functions provide various methods. like in java
// Math.PI, Math.abs(), Math.ceil(), Math.max(), Math.min(), 
// Math.random() -> always gives values between 0 and 1 like decimal one

// so, random values generate between 0 to 9 but what if we want the values from min till max in between 
// Can we derive a forumula for it ? 

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min); // now this will give me, the values in between max and min 
