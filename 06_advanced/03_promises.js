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