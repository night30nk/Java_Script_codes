/* -------- Classes -------- */
class Vehicle {
    // as soon as functions go inside the classes, they are termed as methods.
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    start() {
        return `${this.model} is a car from ${this.make}`;
    }
}

/* -------- Inheritance -------- */
class Car extends Vehicle {
    drive() {
        return `${this.make} : This is an inheritance example`;
    }
}
let myCar = new Car("Toyoto", "corolla");
console.log(myCar.drive()); // ineheriting the properties.

/* -------- Encapsulation -------- */
// encapsulation - I want to restrict direct access to the object data. I can access inside the class but, no one else, can access them.
class BankAccount {
    #balance = 0; // acts as a private with `#` 

    deposit(amount) {
        this.#balance += amount;
        return this.#balance;
    }
    getBalance() {
        return `$ ${this.#balance}`;
    }
}
let ac1 = new BankAccount();
console.log(ac1.getBalance()); // with the help of methods we can access them.

/* -------- Abstraction -------- */
//Abstraction -> it hides the complex works behind.
class CoffeMachine {
    start() {
        // call DB
        // filter value
        return `Starting the machine...`;
    }
    brewCofee() {
        return `Brewing coffe..`;
    }
    pressStartButton() {
        let msg1 = this.start();
        let msg2 = this.brewCofee();

        return `${msg1} + ${msg2}`;
    }
}
let myMachine = new CoffeMachine();
console.log(myMachine.start());
console.log(myMachine.brewCofee());
// we can create a method, where we can access both of the method functions;
console.log(myMachine.pressStartButton());

/* -------- Polymorphism -------- */
// Polymorphism -> the ability of something to have or to be displayed in more than one form.
class Bird {
    fly() {
        return `flying....`;
    }
}
class Penguin extends Bird {
    fly() {
        return `Penguins can't fly`;
    }
}
let bird = new Bird();
let penguin = new Penguin();
console.log(bird.fly()); // print flying...
console.log(penguin.fly()); // rpint Penguins can't fly...


