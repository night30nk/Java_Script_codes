// synchronized is the way in which things are defined and are shown the result as defined. 
// asynchronous -> I don't want to do the things in a certain way or having a pause in the coding part (async) 
// javascript don't have async behaviour like netwrok calls, write/read files, time functions, user input.

console.log("start"); // -> 1
function sayHello() {
    console.log("I would like to say Hello"); // -> 3
}
setTimeout(() => {
    sayHello();
}, 2000);

for (let i = 0; i < 5; i++) {
    process.stdout.write(i + " "); // -> 2
}
// console.log();
// here, the sequence of the code doesn't follows exactly how we think of because of setTimeout thing, where it shows the asynchronus behaviour

// Event Loop -> when javascript couldn't solve or handle the timer functions or setTimeOut functions, it generally give it to the browser/dom/bun/deno or anything, where it then passes to the queue (fast/regular) queue where in the meanwhile time, it handles the other functions. 

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

// Promises -> We can manually create this asynchronous behaviour with the help of promises which helps in creating those situations in neat way.
function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = false;
            if (success) {
                resolve("Data fetched successfully") // we can then send any data, either string, object, arrays.
            }
            else {
                reject("Error fetching data");
            }
        }, 1000);
    })
}
let response = fetchData();
console.log(response); // It gives Promise { <pending> } as an output

response
    .then((data) => console.log(data))
    .catch((error) => console.log(error))
// we can add mutliple .then() statements before catch one and can do multiple level of chains which is called Promise chaining
// In the above code, if the success -> false, and we didin't handle that with catch() rejected state, then it will give error like `Unhandled Promise Rejection` 


