// arrays can contain, multiple values of other data types.

const myArr = [10, 20, 30, 23, 34]
// console.log(myArr);
// push , pop , array size is not fixed it's dynamic in nature, and hence can be changed

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


// talking about other operations in the array 
// suppose we are having two diff arrays. and we want their data to get combined. -> don't use push

const a1 = [1,2,3,4,5]
const a2 = [10,20,30,40]
// a1.push(a2);

console.log(a1); // [ 1, 2, 3, 4, 5, [ 10, 20, 30, 40 ] ] this output will be print -> it assumes the whole array as a particular element

// so concatenate correctly like [1,2,3,4,5,10,20,30,40] 
const combined = a1.concat(a2);
console.log(combined); // this will show the combined array correctly

// but we don't use concat , like, what if we want to combine so many datas together ?

const combined2 = [... a1, ... a2]; // three dots signifies the "spread" operator which is used to spread all the elements present in either of them
// this spread operator will let me used the values in between too, where concat doesn't

console.log(combined2) // if there would be a3 to be combined it can be written as a same syntax.

// flat() is used to flat something, haha, I mean to say, if there are nested arrays present, then it will return the single array
// it will seperate the current array with commas, and each element will have seperate index

const flatArr = [1,2,3, [4,5,6], [10,20,[30,40]]];

const newFlat = flatArr.flat(Infinity); // here we can pass the arguments as depth, like, till how much depth, we want to flat
// by default flat() flats the array till depth 1 only 
// console.log(newFlat); // so if depth is 1 then output will be -> [ 1, 2, 3, 4, 5, 6, 10, 20, [ 30, 40 ] ]

// to increase the depth of flatiness, we can write "Infinitty" as pass as a argument
console.log(newFlat)


// To check whether, something is Arrays or not. 
console.log(Array.isArray("nisha kumari")) // prints false, becuase this is string

console.log(Array.from("nisha kumari")) // it will create the array as of our choice, or convert it' data type to our array.

console.log(Array.of(1,2,3,3,34,4,4,5)) // create a array I guess. -> yes, it's creates a whole array.

