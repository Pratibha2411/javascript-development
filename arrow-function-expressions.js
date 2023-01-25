// Arrow function - => = compact alternative to a traditional function expression. it makes ur code a lot more readable
// (parameters) => {} : here y can eliminate the curly braces{} if ur function uses more than 1 statement

// const bdayGreeting = function(userName){
//     console.log(`Happy Bday ${userName}`);
// }
// bdayGreeting("Pratibha");

const bdayGreeting = (userName) => { 
    //with single argument we can write it like - userName => {} if two parameters should use ()
    console.log(`Happy Bday ${userName}`);
}
bdayGreeting("Pratibhaa");

// another example : calculating percentage %

const percent = (x, y) =>{
    return x / y * 100;
}
console.log(`${percent(77,120)}%`);

// another example : sorting an array of Number
// 1. Using arrow function expression:

let grades = [100, 40, 70, 39, 80, 78];

grades.sort((x,y) => {
    return y - x;
});
grades.forEach(elements => console.log(elements)) //removed () coz it was 1 parameter and removed {} coz only 1 statement was needed to console
