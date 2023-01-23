// function = Define code once, and use it many TimeRanges. To perfome functions' code, call the function name.
// functions has access to global variables(it declared outside any function or any {})
// Varables when declared with let keyword aint recognised oustside of the immediate set of {} so we can sent some information to the main function, to pass some information/values or variables to the function, when we invoke the function, within the set of () u can list whatever u'd like to send over. happyBirthday(username, age); so these username and age are known as arguments same things we have to send to the main function there these arguments are known as parameters. like: function happyBirtheday(username, age){}, we can rename these values when we receive in the function but good to give the same name as given in arguments.
// order of the parameters matters in functions


// let userName = "Pratibha";
// let age = 23;

// happyBirthdaySong();
setDetails();
setDetails();
setDetails();

function setDetails(){
    let userName = "Tanu";
    let age = 21;  
    
    happyBirthdaySong(userName, age);
}

function happyBirthdaySong(userName, age){
    console.log("Happy Birthday to you");
    console.log("Happy Birthday to you");
    console.log("Happy Birthday dear", userName);
    console.log("Happy Birthday to you");
    console.log("Happy Birthday", userName, "you are", age, "years old");
}