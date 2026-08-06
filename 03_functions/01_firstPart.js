// this is the standard way of writing a function, where, we print a string.
// so we just have to call the function, the print line will automatically invoke it.
function greet1(name) {
    console.log(`Hello ${name}`);
}
greet1("Night"); // this is argument passed.
// and function has a parameter passed

// Challenge 1
function makeTea(typeOfTea) {
    return `Making ${typeOfTea}`; // with the keyword return it ends the function. 
}
let teaOrder = makeTea(`Green Tea`);
console.log(teaOrder);

// Challenge 2
function orderTea(teaType) {
    function confirmOrder() {
        return `Order confirmed for ${teaType}`;
    }
    return confirmOrder();
}
let orderConfirmation = orderTea("chai");
console.log(orderConfirmation);
// as soon as the "confirmOrder" function dies, it stores the result in that line, where it's called.
// so, eventaully "orderTea" function will also die, as it returns.
// a function creates it own "execution context"

// Challenge 3
// we will study about arrow functions here, 
function greet2() {} // this is the normal function
const greet3 = () => {} // this is hte arrow function.
() => {} // also works as it's an un-named function.
// now the challenge is. 
const calculateTotal = (price, quantity) => {
    return price * quantity;
} 
// int the above syntax, there is no need to write return and braces for the one line of code as it's work in implicit way.
let totalCost = calculateTotal(5, 10);
console.log(totalCost);
// so, calculateTotal is the name of the function.

/* --------- THIS KEYWORD --------- */

// this -> basically a context. happens in brower console.
// this keyword is a reference to the execution context in which code is running, specifically pointing to the object that is currently executing or calling the function.
// Arrow Functions: These do not have their own 'this' binding; instead, they inherit this from the surrounding lexical scope where they were defined. 
 
/* --------------------------------- */

// Challenge 4
// "teaType" and "teaFunction" are the placeholder, and they can be anything. 
// in this challenge, you have to create a function and pass another function as a parameter.
function makeTea(teaType) {
    return `${teaType} accepted`;
} 
function processTeaOrder(teaFunction) {
    return teaFunction("you");
}
let reuslt = processTeaOrder(makeTea); // this is the way of calling function inside a function. 
// as the function is invoked inside the "processTeaOrder" then only we can pass the parameter in it while returning.
console.log(reuslt);
// 60 -> 57 -> 58 -> 54 (these are the lines which will a function call made)
// Higher order function -> First-class Function
// The above behaviour is just like a function is passed as an argument to other functions, can be returned by another function and can be assigned as a value to a variable.

// Challenge 5

/* 
function createTeaMaker() {
    return function(teaType) {
        return `Making ${teaType}`;
    };
}
 */
// in the above code, if you will store the value of the "createTeaMaker" -> let res = createTeaMaker() <- like this. 
// then it will return -> [Function (anonymous)]

function fn(teaType) {
    return `making ${teaType}`;
}
function createTeaMaker() {
    return fn('green tea');
}
let teaMaker = createTeaMaker();
console.log(teaMaker);
// So, whenver we create a function, all the inner function have access to them.
 
// Lexical Scope → A function can access variables from its surrounding scope.
// Closure → A function keeps access to those variables even after the outer function has finished executing.





