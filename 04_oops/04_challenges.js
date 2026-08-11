/* Task-1
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

/* Task-2
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

/* Task-3
Create a class Vehicle with properties make and model, and a method getDetails() that returns a string "Make: [make], Model: [model]". Create a subclass Car that extends Vehicle and adds a method startEngine() that returns "Engine started".
Extend the Vehicle class from the previous task to include a method move() that returns "The vehicle is moving". Then, override the move() method in the Car class to return "The car is driving".
Add a static method isVehicle(obj) to the Vehicle class that checks if a given object is an instance of Vehicle. The method should return true if the object is a Vehicle or a subclass of Vehicle, and false otherwise. 
*/

class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  getDetails() {
      return `Make: ${this.make}, Model: ${this.model}`;
  }
  move() {
      return `The vehicle is moving`;
  }
  static isVehicle(obj) {
      if (obj instanceof Vehicle) {
          return true;
      }
      return false;
  }
}
class Car extends Vehicle {
    startEngine() {
        return `Engine started`;
    }
    move() {
        return `The car is driving`;
    }
}


/* Task-4
Create a class BankAccount with a private property _balance. Add methods deposit(amount) and withdraw(amount). Use getters and setters to access and modify the _balance while ensuring the balance never goes negative.
 */

class BankAccount {
    constructor(balance = 0) {
        this.balance = balance;
    }
    get balance() {
        return this._balance;
    }
    set balance(amount) {
        if (amount < 0) {
            throw new Error(`Balance cannot be negative`);
        }
        if (amount >= 0) {
            this._balance = amount;
        }
        return this._balance;
    }
    deposit(amount) {
        if (amount < 0) {
            throw new Error(`Deposit can't be negative`);
        }
        this.balance += amount;
        return this.balance;
    }
    withdraw(amount) {
        if (amount < 0) {
            throw new Error(`Withdraw can't be negative`);
        }
        if (amount > this.balance) {
            throw new Error("Insufficient funds");
        }
        this.balance -= amount;
        return this.balance;
    }
}

/* Task-5
Create a class Shape with a method area() that returns 0. Create two subclasses Circle and Rectangle that override the area() method to calculate the area of a circle and a rectangle, respectively. 
*/

class Shape {
    area() {
        return 0;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super(); // we have to used super to take access of the parent class in the derived classes
        this.radius = radius;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}
class Rectangle extends Shape{
    constructor(length, width) {
        super();
        this.length = length;
        this.width = width;
    }
    area() {
        return this.length * this.width;
    }
}











