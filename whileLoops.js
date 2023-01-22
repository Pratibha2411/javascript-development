// While loop = 
//     repeat some code while some condition is true it could potentially run infinite times

let userName = "";

while(userName == "" || userName == null){
    userName = window.prompt("Enter your name??");
    console.log("Yeah, u wrote name = ", userName);
}
console.log("Hello ", userName);
