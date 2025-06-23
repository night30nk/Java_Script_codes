// here we will study the strings in detail

// for concatenation we generally used. 
let name = "Nisha"
let age = 20

console.log(name + " " + age);
// but the above is very outdated and generally not recommended to use

console.log(`Hello, my name is ${name} and my age is ${age} years old`);
// although both will give the same results but the above is used mostly

// we can also declare the string like this 
const gameName = new String("Night_Ki_SmashKarts");

console.log(gameName); // It will define the String datatype with the gameName decided

// it will provide me the numerous features to perform the various functions on the strings.
// generally these are initialised inside, as a key value pair.
console.log(gameName[0]);

// console.log(gameName.__proto__) -> this is used to access all functions.
// but we can access them like this only, as I access them in java.

console.log(gameName.length);
console.log(gameName.toLowerCase()); // converts the string to the lowercase

const names = "nisha-kumari-ritu-kumari-chudasama-etc-etc"

console.log(names.split('-')) // split the names on the basis of '-'
console.log(names.replace('mari', 'udama')) // changes the first kumari to kudama

console.log(names.includes('kumari')) // prints true as kumari is there in the string names

console.log(names.charAt(25))
console.log(names.indexOf('n')) 
// both other 'charAt' and 'indexOf' will give the particular index and character which are present right now in the names.

// there are various other functions which are helpful in strings and can be googles using 'mdn' 
