// return Statement: 
//                 return = thid uses in function and returns a value back to the place where you invoked(call) a function.
// Area of rectangle is:
//                 area = width * height;

let area;
let width = window.prompt("What's width:");
let height = window.prompt("What's height:");

// getArea(width, height);
area = getArea(width, height); //Effective way
console.log("This is area returned",area);
console.log(area);

function getArea(width, height){
    // result = width * height;
    return width * height; //if u wanna return small piece then do it like that otherwise |
    console.log(area);
}



