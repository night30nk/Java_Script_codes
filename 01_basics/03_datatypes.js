// here we will see the datatypes present in the javascript
// number, string, boolean, bigint, null, undefined, symbol

console.log(3 + 3) // our code should be readable so we avoid writing unreadable codes

let number = 123 // interger type 
let name = "nisha" // string type
let isPossible = true // boolean type
let score = null // it's null as, we have defined that no value is present 
let point // it's values is undefines right now

// null -> this is stand alone value 
// undefines -> it's those variables which are initialised but not defined right now
// symbol -> this is used for uniqueness like in tools like Figma 

console.log(typeof point) // undefined variable generally have (undefined) type
console.log(typeof score) // null vairbale generally have (object) type

// alert(3) // it's undefined behaviour and it's not defined in vs compiler but it's shows diff behaviour in online compiler
// hence above code will give error right now.

// there are two types of data-types 
// 1. Primitive and Non-primitive


// Primitive are those datataypes which are passed by their copies 
// 7 types -> String, boolean, null, undefined, Symbol(to represent the uniquness), number, BitInt




const data = 123;
const BigData = 1234932432648347832479n; // to represent it's BigInt

const ID = Symbol('234-Nisha');
const anotherID = Symbol('456-Sahil');

console.log(ID === anotherID); // print false -> both are diff symbols and both are unique in their own ways

// Non-primitive are those which are passed by their refrences
// 3 types -> Arrays, Objects, Functions.
