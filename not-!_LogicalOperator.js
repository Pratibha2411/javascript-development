// ! NOT logical operator
// typically used to reverse a condition's boolean value
// and if it's normal variable you have to use ()after ! symbol and if its boolean variable then its not necessary to use ()
// true replace with false & false replace with true

let temprature = 4;
let sunny = false;

if(!(temprature < 0)){
    console.log("Weather is Good!!", typeof temprature);
}
else{
    console.log("Weather is Bad!!", typeof temprature);
}

// boolean value:
if(!(sunny)){
    console.log("Weather is Bad!!", typeof sunny);
}
else{
    console.log("Weather is Good!!" ,typeof sunny);
}