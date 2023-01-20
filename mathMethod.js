// Math functions are An intrinsic object that provides basic mathematics functionality and constants(LIKE: PI=3.14.....).

let x = 3.87;
let y = 4;
let z = 3.88
let maximum;
let minimum;
let a;

x = Math.round(x);
// x = Math.floor(x);
// x = Math.ceil(x);
// x = Math.pow(x, 2);
// x = Math.abs(x);
a = Math.sqrt(y);
maximum = Math.max(x,y,z);
minimum = Math.min(x,y,z);

console.log(x, a, maximum, minimum);