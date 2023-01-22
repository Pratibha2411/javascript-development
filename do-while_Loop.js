// do while loop is a variation(a change or slight difference in condition, amount, or level, typically within certain limits.)of while loop = 
        // do something first then check the CSSConditionRule, repeat if condition is true
        
// Comparing with while and do while:     

let userName;
// userName = ""; 

// While loop = 
while(userName == ""){
    userName = window.prompt("Enter your name?");
    console.log("You are ", userName);
}

// Do while loop
do{
    userName = window.prompt("Enter your Sername?");
}
while(userName == "" || userName == null);