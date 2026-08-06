// this is the standard way of writing a function, where, we print a string.
// so we just have to call the function, the print line will automatically invoke it.
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Night"); // this is argument passed.
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
        return `Order confirmed for ${}`
    }
}
