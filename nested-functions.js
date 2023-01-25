// nested functions = Functions inside other functions.Functions
//                    Outer functions have access to inner functions.
//                    Inner functions are "hidden"  from outside of outer functions.(it add some data security to the code).
//                    it used in closures(we'll learn later).

let userName = "Pratibha";
let userInbox = 0;

// displayUserName();  //throw an error not defined it will only show when user will first login
// displayUserInbox(); //throw an error not defined it will only show when user will first login    
login(); //if cmnt it wont show anything in console

function login(){

    displayUserName();
    displayUserInbox();

    function displayUserName(){
        console.log(`Welcome ${userName}`);
    }
    function displayUserInbox(){
        console.log(`You have ${userInbox} new messages`);
    }
}


// this would be sending u userInformation before even logging in so use nested functions insted this

// function displayUserName(){
//     console.log(`Welcome ${userName}`);
// }
// function displayUserInbox(){
//     console.log(`You have ${userInbox} new messages`);
// }