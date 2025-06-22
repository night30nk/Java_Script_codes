// here we will study some operations and checks

// arithmetic operations
// 2 + 2, 2 - 2 -> addition and subtraction
// 2 * 2 -> multiplication
// 2 ** 3 -> used for power
// 4 / 2 -> division
// 4 % 2 -> reminder

console.log(2 ** 3); // print 8

// here it's not good practice to write everything in the console log,
// like writing diff variables parameters, like string, number, boolean together

console.log("1" + 2 + 2); // it will print 122 -> it converted everything into string
console.log(1 + 2 + "2"); // it will print 32 -> first number additon then converted into string

// this happens because compiler read the things from left to right

console.log(+true); // it will print 1 -> '+' sign did the type conversion
console.log(+""); // it will print 0 -> "" empty string has 0 value in number

// if we check and compare the two datatypes
console.log(null > 0); // print false
console.log(null == 0); // print false
console.log(null >= 0); // print true
// this behaviour is seen because equality check (==) and comparison(>, >=, <=, <) works differntly

// equality check generally don't convert the number
// comparisons convert the null to '0' 
// therefore the last condtion seems out to be true -> 0 >= 0

console.log(undefined == 0); // print false
// in all cases it will print false, because undefined is remained unchanged

// "===" is used for strict check
console.log("2" === 1) // print false -> because "2" is a string and 1 is a number