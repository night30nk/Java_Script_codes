// javascript is a prottotype based programming language.
// but it's also a oops language.

// class is the blueprint and objects/instances are the copies of the blueprints.
 
// 1. Prototype based 
// 2. object-class based 

// Javascript supports everything, but behind the scnes, it's a prototype based programming language only.

let myVals = [1,2,3];
// [[Prototype]]: Array(0) 
// in console, every myVals is a prototype inbuild.
// Prototype basically means, extra functionality in any datatype.
let computer = {cpu: 12};
let lenovo = {screen: "HD"}

// we can use dunder prototype
console.log(lenovo.__proto__); // [Object: null prototype] {} ->  will be printed.
// basically __proto__ gives access to the objects to the other objects.
// so, even if, lenovo contains a `__proto__` then, we are able to access computer too.

let car = {tyres: 4};
let tesla = {
    driver: "AI"
};
Object.setPrototypeOf(tesla, car);
console.log("tesla", Object.getPrototypeOf(tesla));
// in the above code, we first, set the prototype, of car inside the tesla. further, we can access them using. the functionality of `getProrotypeof`. 
