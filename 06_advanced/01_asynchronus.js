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

// Prototypal Inheritance -> inheritance of prototypes
function Person(name) {
    this.name = name;
}
Person.prototype.greet = function () {
    return `Hello, I'm ${this.name}`;
}
let night = new Person("Night");
console.log(night.greet());

// Event Loop -> when javascript couldn't solve or handle the timer functions or setTimeOut functions, it generally give it to the browser/dom/bun/deno or anything, where it then passes to the queue (fast/regular) queue where in the meanwhile time, it handles the other functions. 