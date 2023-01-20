// Two ways to accept user input:

// 1. Easy way - with a window.prompt
// let usrName = window.prompt("What's your name?")
// console.log("Name is " + usrName);

// 2. More practical way - Using HTML textbox
// ()=>{} is same as function(){} - that's how we create funtion
let username;
document.getElementById("submitButton").innerHTML = "Submit";
document.getElementById("name").innerHTML = "What's your name?";
document.getElementById("submitButton").onclick = () =>{
    username = document.getElementById("yourName").value;
    document.getElementById("name").innerHTML = "You are welcome " + username;
    console.log(username);
}

