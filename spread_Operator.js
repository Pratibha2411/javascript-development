// Spread operator(...) = allows an interable such as an array or string to be expanded in places where zero or more argument are exprected(basically it unpacks the elements)

let numbers = [1,2,3,4,3,2,1,9,8,7,8,9];
let anotherNumber = [0, ...numbers, 0]
let userName = "Pratibha Baloriya"
let class1 = ["John", "Cena", "Luke"];
let class2 = ["Light", "El", "Kira"];


console.log(`without spread operator ${numbers}`);
console.log(...numbers, "With spread operator");
console.log(...anotherNumber);
console.log(`${userName} without spread operator`);
console.log(...userName, `with spread operator`);

class1.push(class2); //old method and not effective
console.log(`old not effective method ${class1}`);
console.log(class1); //old method and not effective
console.log(...class1); // effctive way is:


// Find maximum value
// ez way without passing any arguments is using spread operator
let maxNum = Math.max(...numbers);
console.log(`${maxNum} max number`);
let minNum = Math.min(...numbers);
console.log(`${minNum} min number`);
