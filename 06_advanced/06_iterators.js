// Generator function -> Doesn't execute the things all at once, it generates the results again and again.
// Instead of return you can use yield.
// the below is the generator function not a normal function.
function* numberGenerator() {
    yield 1
    yield 2
    yield 3
}
let gen = numberGenerator();
console.log(gen); // this is the Object but of generator one. but we can't execute gen() -> because it will show that it's not a function.
// here next() is an iterator basically which keeps tracks of the whole thing.
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
// if we log the prints more than three times, it won't show anything other than undefined. 
let gen2 = numberGenerator();
// here, the reference is stored from the start, so this will again start form 1.

