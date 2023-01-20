// Type Conversion: change the datatype of a value to another datatype
// For ex: x = Number("Tank") //it cant conversate coz Tank is a string u can only change a number whose dataType is string using TypeConversions

let userAge;
let x;
let y;
let z;

document.getElementById("age").innerHTML = "Tell us above How old are you??";
document.getElementById("submitButton").innerHTML = "Submit";


document.getElementById("submitButton").onclick = () => {
        userAge = document.getElementById("yourName").value;
        console.log("User Age is", userAge, typeof userAge);

        userAge = Number(userAge);

        console.log("User Age is", userAge, typeof userAge);

        document.getElementById("age").innerHTML = "Your age is " + userAge;
    }
    
x = Number("21");
// x = Number("Tanu")
y = String(2);
z = Boolean("");
// z = Boolean("Tanu")

console.log(x, typeof x);
console.log(y, typeof y);
console.log(z, typeof z);


