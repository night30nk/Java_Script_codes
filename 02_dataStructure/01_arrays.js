// arrays can contain, multiple values of other data types.

const myArr = [10, 20, 30, 23, 34]
// console.log(myArr);

myArr.unshift(90); // it adds the values in the starting of the index
myArr.shift(); // it deleted the starting element of the array

console.log(myArr);

// i can compare other things in the array things like -> includex, indexOf
// if I talk about changing the type of the array to the string then I can do so by (.join) method

const arrStr = myArr.join();
console.log(typeof arrStr); // it will show that it's type is string.

// there are two intresting operations in the arrays. -> slice and -> splice

// slice mein end mein range include nahi hoti hain. (slice mein array which is original, isn't manipulated)
// splice main end mein range include hoti hian. (splice mein array which is original, gets manipulated)

const arr1 = myArr.slice(1, 3);

console.log(arr1);
console.log("A = " + myArr); // here array will remain the same,

const arr2 = myArr.splice(1, 3);

console.log(arr2)
console.log("B = " + myArr); // here the remainig part will be there, after splicing it from index 1 to 3



