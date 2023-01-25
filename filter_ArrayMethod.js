// filter method - Array.filter() = creates a new array with all elements that pass the test provided by a function.

let ages = [18, 15, 16, 21, 19, 20, 43, 4];
console.log(`${ages}`);
let adults = ages.filter(checkAge);

adults.forEach(print);

function checkAge(elements){
    return elements >=18;
}
function print(elements){
    console.log(elements);
}