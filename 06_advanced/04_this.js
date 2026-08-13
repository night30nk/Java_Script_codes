// This Binding -> sometimes the context doesn't transfer when we store the objects into others and it's lost
const person = {
    name: "night",
    greet() {
        console.log(`Hi, Don't forget to take ${this.name} with you.`);
    },
};
person.greet(); // this will print correctly, with the name mentioned
const anotherPerson = person.greet;
anotherPerson(); // so here when it's called it will give the underfines result. 
// therefor we have to bind the this contest and we can do so by the above code 
const bindPerson = person.greet.bind({name: "night2"});
bindPerson(); // now this will give the results correctly.

// bind, call and apply are the three concepts.