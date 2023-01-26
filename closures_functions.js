// closure = A function with preserved and private data.
//            Give you access to an outer function's scope, from an inner function. Means an inner functions has access to an outer function's scope including any declared variables.



// 1. Not effective way without usign closures:
// let userName = "Pratibha";
// let userInbox = 1;

// // problem is that everyone has direct access to these variables, they can troll us by changing em: 
// userInbox = 420.09;
// // So i'd like to inclose these variables within a function for data security to prevent anybody can change these: 

// document.getElementById("submitButton").innerHTML = 'Login';
// document.getElementById("submitButton").onclick = alertUser;

// function alertUser(){
//     alert(`${userName} you have ${userInbox} new messages!`);
//     userInbox = 0;
// }

// 2. Effective way Using Closures:

document.getElementById("submitButton").innerHTML = 'Login';
document.getElementById("submitButton").onclick = login();

userInbox = 420.09; //won't change now coz of closure function

function login(){
    let userName = "Pratibha";
    let userInbox = 1;

    function alertUser(){
        alert(`${userName} you have ${userInbox} new messages!`);
        userInbox = 0;
    }
    return alertUser; //invoking alertUser function
}