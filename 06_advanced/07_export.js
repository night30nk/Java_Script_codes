// the below is the ES module to import and export things.
export function add(a, b) {
    return a+b;
}
export function subtract(a, b) {
    return a-b;
}
export default function multiply(a, b) {
    return a*b;
}


// we can also use the common js to import and export things. 
// names export 
function add1(a, b) {
    return a+b;
}
function subtract1(a, b) {
    return a-b;
}
function multiply1(a, b) {
    return a*b;
}

module.exports = {
    add1, 
    subtract1,
    multiply1
};

// just make sure, we can't use the both on the same files.