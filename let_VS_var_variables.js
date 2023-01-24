// variable scope: where a variable is accessible

// let = variables are limited to block scope(a set of {}).
// var = variables are limited to a function(){}

// global variables = is declared outside any function(If global, var will CHANGE browser's properties so USE let as global variables)

let userName = "Pratibha";

for(let i =1; i <= 3; i++){
    console.log(i);
}
console.log(i); //throw an error i isnt defined

// using var:
for(var ij =14; ij < 17; ij++){
    console.log(ij);
}
console.log(ij); //no error

// using var withing a function:
doSomething();

function doSomething(){
    for(var j =7; j <= 10; j++){
        console.log(j);
    }
}
console.log(j); //throw an error

// && now that's where we discuss global variables:
// let name = "Pratibha"; //correct way
var name = "Prati"; //it'll change browser properties, inspect file and in console type window and enter then lool for name object:
