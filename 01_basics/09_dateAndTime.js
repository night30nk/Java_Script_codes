
// if we talk about how we write DATES and TIMES in javascript 
// we create a object of a date and initialised it with a variable instance. 

const currDate = new Date();
console.log(currDate);
// now we have various readable format to read the date
console.log(currDate.toDateString())
console.log(currDate.toLocaleDateString());

// we can also create our own date.
// in javascript, months are initialised with 0. 0-> january. 1-> februrary

let timeStamp = Date.now() // if we print this, then this will be printed in milliseconds

console.log(currDate.getTime()) // these are printed in the milliseconds

console.log(currDate.getMonth() + 1) // this will give the month of the total time stamp provided
// there are various functions available to play with dates and times. 

// toLocaleString is very intresting method as it provides various other features to set by default 
currDate.toLocaleString('default', {
    weekday : "long",
    day : "2-digit"
})
// we can customize our currDate according to our needs. 

