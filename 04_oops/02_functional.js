// constructor function helps us to create a blueprint of the class with the help of functions.
function Person(name, age) {
    this.name = name
    this.age = age 
}
function Car(make, model) {
    this.make = make 
    this.model = model
}
// we can further create out instances from these constructor functions or objects.
let myCar = new Car("toyota", "camry");
let myNewCar = new Car("tata", "safari");
// so the above mentioned are two different objects, of the same class. `function car()`
// we have used two keywords "new" and "this" which have linking property to connect it with the internal variables.
console.log(myCar);
console.log(myNewCar);

// example 2 
function Tea(type) {
    this.type = type
    this.describe = function () {
        return `This is the cup of ${this.type} tea.`;
    };
}
let tea1 = new Tea("lemon")
console.log(tea1.describe());

// example 3
function Animal(species) {
    this.species = species
}
Animal.prototype.sound = function () {
    return `${this.species} makes a sound`;
}
Animal.prototype.speak = function() {
    return `${this.type} also speaks`;
}
let dog = new Animal("Dog");
console.log(dog.sound(), dog.speak()); // we can access, the sound() function with the help of prototype keyword, which addded with the help of prototype keyword.

// `new.target` is the error phase, to throw the error when used doesn't enter. 
function Drink(name) {
    // if (!new.target) {
    //     throw new Error("Drink must be called with new keyword");
    // }
    this.name = name;
}
let tea2 = new Drink("Tea");
let tea3 = Drink("Tea");

console.log(tea2, tea3);
// without doing the console log, this will still show me the error displaying that. `not using new keyword`
// but if comment out the error line, it will execute properly, stating the undefined. for `tea3`

// there is a concept of prototypal chain wehere we connect the prototypes of different objects.

// We can also create the prototype of an Array so that we can use it for the arrays. 
Array.prototype.print = function() {
    return `${this} -> Custom printing array`;
}
let myArray = [1,2,3];
let myArray2 = [1,2,3,4,5,6];
console.log(myArray.print());
console.log(myArray2.print());
// with the help of the above protottype created, we can directly access the print() function. 










