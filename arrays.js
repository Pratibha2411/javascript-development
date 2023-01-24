// array = think of it as a variable that can store multiple values

let fruits = ["apple", "orange", "banana"];

// fruits[2] = "coconut"; //add element on given index and replce present one if there is any

fruits.push("Lemon"); //add an element at the end
// fruits.pop();  //removes last element
fruits.unshift("Mango"); //add an element at beginning
// fruits.shift();  //removes element from beginning

let lengthOfFruits = fruits.length; //shows no of element in an array
let indexOfFruits = fruits.indexOf("apple");
// let indexOfFruit = fruits.indexOf("Kiwi");

console.log(lengthOfFruits);
console.log(indexOfFruits);
// console.log(indexOfFruit);
console.log(fruits);