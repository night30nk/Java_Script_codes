/* 
Task 1: Simulating Asynchronous Behavior
Create a function simulateAsyncTask() that logs “Task started”, then after 2 seconds logs “Task finished”.
Use setTimeout to simulate this behaviour.
 */
function simulateAsyncTask() {
    console.log(`Task started`);
    setTimeout(function() {
        console.log(`Task finished`);
    }, 2000);
}

/* 
Task 2: Simulate Multiple Async Tasks with Different Delays
Create a function simulateMultipleTasks() that starts three asynchronous tasks with different delays (1 second, 2 seconds, and 3 seconds).
Each task should log "Task [n] finished" where [n] is the task number. Ensure the tasks run asynchronously.
 */
function simulateMultipleTasks() {
    setTimeout(function() {
        console.log(`Task 1 finished`);
    }, 1000);
    setTimeout(function() {
        console.log(`Task 2 finished`);
    }, 2000);
    setTimeout(function() {
        console.log(`Task 3 finished`);
    }, 3000);
}

/* 
Task 3: Async Task with Callback Function
Create a function fetchDataWithCallback(callback) that simulates fetching data asynchronously using setTimeout (after 2 seconds).
Once the data is “fetched”, it should invoke the provided callback function with "Fetched data" as an argument.
 */
function fetchDataWithCallback(callback) {
    setTimeout(function() {
        callback("Fetched data"); // here callback is a function call.
    }, 2000);
}

/* 
Task 4: Rate Limiter Function
Create a function rateLimiter(fn, limit) that returns a new function. The returned function allows calling fn only once within a limit time in milliseconds. If it is called again before the limit is reached, it should return "Rate limit exceeded".
 */
function rateLimiter(fn, limit) {
    let lastCalled = 0; // we have to check how much time has passed
    // with the help of closure we can achieve that
    return function (...args) { 
        let cur = Date.now(); // gives you the current time.
        // console.log(cur);
        if (cur - lastCalled < limit) {
            return `Rate limit exceeded`;
        }
        lastCalled = cur;
        // console.log(`argumenets :`);
        return fn(...args);
    }
}
function fn(papa) {
    return `this is parameter: ${papa}`;
}
let ans = rateLimiter(fn, 5000);
console.log(ans("mera dukh")); // here ans is function 

/* 
Task 5: Memoization Function
Write a function memoize(fn) that returns a memoized version of fn. The memoized function should cache the results of function calls, and return the cached result if the same inputs are provided again.
 */
function memoize(fn) {
    let cache = {};
    return function(...args) {
        // JSON.stringify() converts a JavaScript value (such as an object, array, string, number, boolean, or null) into a JSON-formatted string.  This serialization is essential for storing data in localStorage or transmitting structured data to a web server via HTTP requests.
        let cur = JSON.stringify(args);
        if (cache[cur]) {
            return cache[cur];
        }
        else {
            let res = fn(...args);
            cache[cur] = res;
            return res;
        }
    }
}

/* 
Task 6: Prototypal Inheritance examples
 */
function Animal(name) {
    this.name = name;
}
Animal.prototype.makeSound = function () {
    return `Animal sound`;
}
function Dog() {}
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.bark = function () {
    return `Woof!`;
}

function Shape(color) {
    this.color = color;
}
Shape.prototype.getColor = function () {
    return this.color;
}
function Rectangle(width, height, color){
    this.width = width;
    this.height = height;
    this.color = color;
}
Rectangle.prototype = Object.create(Shape.prototype);
Rectangle.prototype.getArea = function () {
    return this.height*this.width;
}

/* 
Task 7: Promises, Promise.all() and Promise.race()
 */
function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(`User data`);
        }, 1000);
    })
}
function fetchPosts() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(`Posts data`);
        }, 1000);
    })
}
async function fetchAllData() {
    // here, it will wait for both of them to finish and then executes both of them after that.
    const [d1, d2] = await Promise.all([fetchUser(), fetchPosts()]);
    console.log(d1);
    console.log(d2);
}

function fetchSuccess() {
    return new Promise((resolve) => {
        setTimeout(function() {
            resolve(`Success`);
        }, 1000);
    })
}
function fetchFailure() {
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            reject(`Error occurred`);
        }, 1000);
    })
}
async function handlePromises() {
    try {
        // here we only print the resolve statement, which is coming from the fetchSuccess()
        const [d1, d2] = await Promise.all([fetchSuccess(), fetchFailure()]);
        console.log(d1);
    } 
    catch (error) {
        console.log(error);
    }
}

// Think of a race between two promises -> Promise.race()
function fetchWithTimeout(promise, timeout) {
    // we created the another promise, which is taking the defined timeout time.
    const timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(function() {
            reject("Timeout exceeded");
        }, timeout);
    });
    // this will execute that promise first, which has less timeout defined.
    return Promise.race(
        [timeoutPromise,
        promise]  
    );
}
function fetchData() {
  return new Promise(resolve => setTimeout(() => resolve('Data fetched'), 3000));
}
// Promise.race() — it decides which result you receive first; it doesn't cancel the losing promise.

/* 
Task 8: Generator functions with next() method
 */
// Whenever we create an object of next, it contains two things [value: ____, done: ____]
function rangeIterator(start, end) {
    let cur = start;
    // next() is simply a method that we created ourselves.
    // We're creating an object that has a method called next.
    // Calling next() returns an object that contains value and done.
    return {
        next() {
            if (cur <= end) {
                return {
                    value: cur++,
                    done: false
                };
            }
            return {
                value: undefined,
                done: true
            };
        }
    };
}
// the below will generate the fibonacci numbers from the infinite times. 
function* fibonacciGenerator() {
    let a = 1, b = 1;
    
    while (true) {
        yield a;
        let temp = a+b;
        a = b;
        b = temp;
    }
}

