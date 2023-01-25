// Known as anonymous fucntion.
// function expression/anonymous fucntion = function without a name(Also known as anonymous function) it help us to avoid polluting global scope with random function names, we can stop thinking about "what name shoulf i give this function :)", Write it and forget about it.
// we generally create a variable(using const)/or some another entity and make it., we use them when the functions is not gonna use again in project

// Bad practice:
// bdayGreeting();
// function bdayGreeting(){
//     console.log(`Happies B'day`);
// }butt


// Effective way using function expressions/anonymous fucntion:
const greetings = function(){
    console.log(`Happies B'day`);
}

greetings();

 
// Another ex: creating increasing and decresing countNumber

let count = 0;

document.getElementById("IncreseButton").onclick = function(){
    count += 1;
    document.getElementById("anyText").innerHTML = count + ` SEE HERE COUNT`;
    console.log(count);
}
document.getElementById("DecreaseButton").onclick = function(){
    count -= 1;
    document.getElementById("anyText").innerHTML = count + ` SEE HERE COUNT`;
    console.log(count);
}
