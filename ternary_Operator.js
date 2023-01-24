// ternary operator = 
//                 Shortcut for an 'if/else statement'
//                 Takes 3 operands -
    //                 1. a condition with ?
    //                 2. expression if True :
    //                 3. expression if False 
                
// Syntax = 
//         condition ? exprIfTrue : exprIfFalse   

let age = window.prompt("What's your age?");

checkAge(age);
function checkAge(age) {
    // if(age >= 18){
    //     console.log("You are adult");
    // }
    // else{
    //     console.log("You are not adult");
    // }
    return age >= 18 ? console.log("You are adult") : console.log("You are not adult");
}
          
// Another example: working with boolean value and no need for returning anything: 

checkWinner(true); //invoking function and passing argument as bollean value true
function checkWinner(win){
    win ? console.log("You WIN") : console.log("You LOSE");
}
