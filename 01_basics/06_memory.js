// there are two types of memory 
// 1. Stack (Primitive) and 2. Heap (Non-Primitive)

let userOne = {
    email : "nisha@gmail.com",
    upi : 253023
}

let userTwo = userOne;
// here userOne and userTwo are pointing to the same refrence created in heap 
// If values are changes in either of it, will reflect in both


let oneName = "Nisha"
let otherName = oneName
otherName = "Sahil"
// here both are differnt and if otherName is changes then, oneName will not change 
// Because of copy created here.