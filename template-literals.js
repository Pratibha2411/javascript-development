// Template literals = delimited with(``)instead of double or single quotes.
//                     allows embedded variables and epressions and value

let userName = "Pratibha";
let items = 3;
let total = 47;
let text;

// console.log("Hello", userName);
// console.log("You  have", items, "itmes in your cart");
// console.log("Your total is $", total);

text = `Hello ${userName}<br> 
You have ${items} items in your cart<br> 
Your total is $${total}`;

document.getElementById("anyText").innerHTML = text;
console.log(text);