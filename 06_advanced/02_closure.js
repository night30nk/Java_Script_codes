// Closure -> are the functions is that they remember the enviornment in which they are created.
function outer() {
    let counter = 4;
    return function() {
        counter++;
        return counter;
    }
}
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
// it will increment internally the value of counter everytime after each call.
// so that's it, closure are the functions which retain the memory of it. and stores it. internally for the next call. 