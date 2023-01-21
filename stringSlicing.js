// Slice Method: 
//     slice():    
//         extracts a section of a String,
//         and returns it as a new String,
//         without modifying the original string

// let fullName = "Jon Cina";
let fullName = "Pratibha Baloriya"
let firstName;
let lastName;

console.log(fullName);

firstName = fullName.slice(0,3);
lastName = fullName.slice(4,8);
console.log(firstName);
console.log(lastName);

// right way to reder first and last name
firstName = fullName.slice(0, fullName.indexOf(" "));
lastName = fullName.slice(fullName.indexOf(" ")+1);
console.log(firstName);
console.log(lastName);