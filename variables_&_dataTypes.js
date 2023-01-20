// A variable is a container for storing DataTransfer
// variable behaves as if it was the value that it container


// Two steps:
// 1. Declaration (var, let, const)
// 2. Assignment (= assignment operator)

// Data types:
// Two types Primitive and Non-Primitive
// 1.  Primitive (primitive value, primitive data type) is data that is not an object and has no methods or properties.: SSNNBBU(to remember)
//     String
//     Symbol
//     Number
//     Null(let marks = NULL;)
//     Boolean
//     BigInt(can be used to store integer values that are too big to be represented by a normal JavaScript Number)
//     Undefined(let marks;)
// 2.  Non-primitive(Objects and has methods or properties): Old AF(to remeber)
//     Object
//     Array
//     Function
    
// typeof operator:
// typeof "Hey" Returns String

// Arithmatic Operators (2 + 3 here 2,3 are operand and + is operator)    
// +	Addition
// -	Subtraction
// *	Multiplication
// **	Exponentiation (ES2016): let z = x ** 2; (x ** y produces the same result as Math.pow(x,y))
// /	Division
// %	Modulus (Remainder)
// ++	Increment
// --	Decrement

let firstname = "Tanu";
// firstname = typeof "Tanu";
let age = 21;
let passed = true;
let forthOfAge = age / 4; 

console.log(firstname + " " + typeof firstname);
console.log(age + " " + typeof age);
console.log(passed + " " + typeof passed);
console.log(forthOfAge + " " + typeof forthOfAge );


// Rendering on DOM
document.getElementById("name").innerHTML = "Your name is: " + firstname;
document.getElementById("age").innerHTML = "Your age is: " + age;
document.getElementById("passed").innerHTML = "Did you pass: " + passed;
document.getElementById("forthOfAge").innerHTML = "4th part of your age is: " + forthOfAge;