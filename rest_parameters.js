//  rest parameters = represents an indefinite number of parameters(packs arguments into an array)

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 7;
let f = 8;

// Without rest parameter: Non-effective way:
// console.log(sum2(a,b));
// console.log(sum3(a,b,c));
// console.log(sum4(a,b,c,d));

// function sum2(a,b){
//     return a+b;
// }
// function sum3(a,b,c){
//     return a+b+c;
// }
// function sum4(a,b,c,d){
//     return a+b+c+d;
// }

// Effective way:
console.log(sum(a,b,f,d));

function sum(...numbers){
    let total = 0;
    for(numberItems of numbers){
        total += numberItems;
    }
    return total
}