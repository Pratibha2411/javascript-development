// useful string properties and methods

let userName = "  Pratibha Baloriya  ";
let phoneNumber = "912-128-1289";

console.log(userName.length);
console.log(userName.charAt(9));
console.log(userName.indexOf("P"));
console.log(userName.lastIndexOf("b"));

userName = userName.trim(); //remove spaces for end and start
console.log(userName);

userName = userName.toUpperCase();
console.log(userName);
userName = userName.toLowerCase();
console.log(userName);

phoneNumber = phoneNumber.replaceAll("-","/");
console.log(phoneNumber);