// Async Await -> we can also use the promises in async await syntax with the try catch block
// just like in promises we did the asynchronus behaviour
function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject({name: "night", hobby: "overthinking"}) 
            // we can then send any data, either string, object, arrays.
        }, 1000);
    })
}
async function fetchData() {
    try {
        console.log("Fetching Data....");
        const userData = await getUserData();
        console.log("Data fetched: ", userData);
        
    } catch (error) {
        console.log("Error fetching Data: ", error)
    }
}
fetchData();
// If you used the same function name, JavaScript behaves differently depending on whether you're using normal functions or function declarations, so automatically you are just creating the multiple instances of the async operations.
// We can also create two diffferenct function and we can also async await for them also.

// so for that await provied a keyword Promise.all([data1()], [data2()]);
// which can be stored in a array keyword.
// const [d1, d2] = await Promise.all([data1()], [data2()]);