/* 
Create a constructor function Animal that has a method speak() that return 'Animal speaking'.

Then create another constructor Dog that inherits from Animal using prototypes.

The Dog constructor should add a method bark() that returns 'Woof!'. Demonstrate the prototype chain between Dog and Animal. 
*/

function Animal() {
}

function Dog() {
}

Animal.prototype.speak = function () {
    return `Animal speaking`;
}
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.bark = function () {
    return `Woof!`;
}
let dog = new Dog();
console.log(dog.speak());
// in the above code, we can extends the Dog class from Animal. with the help of `prototype` keyword.

/* 
Create a functional constructor Person that takes name and age as parameters. Add a method greet() to the constructor that returns "Hello, my name is [name]".
Modify the Person constructor to throw an error if the age is not a positive number.
 */
function Person(name, age) {
    if (age < 0) {
        throw Error(`Age must be a positive number`);
    }
    this.name = name;
    this.age = age;
}
Person.prototype.greet = function () {
    return `Hello, my name is ${this.name}`;
}
let p1 = new Person("night", 18);
console.log(Person.greet); // this will print `undefined`
console.log(Person.prototype.greet); // this will define the Function (anonymous) 
console.log(p1.greet()); // this will call the greet() method for the object of p1 -> `Hello, my name is night`













