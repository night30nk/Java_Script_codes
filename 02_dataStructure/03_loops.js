// there are several loops 
// 1. while
// 2. do while 
// 3. for 
// 4. for/in 
// 5. for/each 
// 6. for/of 

// So, we will directly start with the challenges. 

// Challenge 1
let idx = 1;
let sum = 0;
while (idx <= 5) {
    sum += idx; // process.stdout.write(idx + " ");
    idx++;
}
console.log(sum); // gives the sum from 1 to 5 

// Challenge 2
let countdown = [];
idx = 5;
while (idx >= 1) {
    countdown.push(idx);
    idx--;
}
console.log(countdown); // countdown happens from 5 to 1 and storing in array

// Challenge 3
/* 
let teaCollection = [];
let favoriteTeaType;
do {
    favoriteTeaType = prompt(`Enter your favority tea type (tyep "stop" to terminate)`);
    
    if (favoriteTeaType !== "stop") {
        teaCollection.push(favoriteTeaType);
    }
}
while (favoriteTeaType !== "stop");
console.log(teaCollection);


 */
// in the above code, we have used "prompt" -> which will give error
// because that word is in javascript, but we are using it in node.js
// it will work in the inspect version of console.

// Challenge 4
let total = 0;
idx = 1;
do {
    total += idx;
    idx++;
}
while (idx <= 3);
console.log(total); // just calculate the sum from 1 to 3 

// Challenge 5
let array = [2,4,6];
let multipliedNumbers = [];
for (let i = 0; i < array.length; i++) {
    multipliedNumbers.push(array[i]*2);
}
console.log(multipliedNumbers);

// Challenge 6
let cityList = [];
for (let i = 0; i < 4; i++) {
    let city = prompt(`Enter the city:`);
    cityList.push(city);
}
console.log(cityList);

// (4) ['papa', 'paris', 'new york', 'maldevies']
// 0: "papa"
// 1: "paris"
// 2: "new york"
// 3: "maldevies"
// length: 4
// [[Prototype]]: Array(0)

// this is the output of the above code in browser console.



