// Module ES import files

// the below is the default import
import multiply from "./07_export";
console.log(multiply(2, 4));

// the below is the named import
import {add, subtract} from "./07_export";
console.log(add(2, 4));
console.log(subtract(45, 23));

// now below is the common JS import files being imported. 
const mathOp = require("./07_export.js");
console.log(mathOp.add1(2, 3));
console.log(mathOp.subtract1(45, 32));



// just make sure, we can't use the both on the same files.



