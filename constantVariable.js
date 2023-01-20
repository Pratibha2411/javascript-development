/// Constant(const) = a variable that can't be changed so that it can provides security to out code.

// program for Circumfrence of a circle:
    // (Circumfrence) C = 2*Pi*r
    // good practice to make variables name in ALL CAPITAL

// lets try same program using let and const:
//  let & const:

// let pi = 3.141;
const PI = 3.141;
let radius;
let Circumfrence;

pi = 234;  // it'll replace pi with 234 and doesnt throw error
//PI = 234; //it'll throw an error so that's why we use const for variables which ain't changable in code

document.getElementById("radius").innerHTML = "Above there Give radius for the circle";
document.getElementById("submitButton").innerHTML = "Submit";

document.getElementById("submitButton").onclick = () => {
    radius = document.getElementById("inputnText").value;
    radius = Number(radius);

    // Circumfrence = 2 * pi * radius;
    Circumfrence = 2 * PI * radius;
    document.getElementById("radius").innerHTML = "Circumfrence of the circle whose radius is " + radius + " = " + Circumfrence;
}

