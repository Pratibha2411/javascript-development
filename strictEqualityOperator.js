// =       Assignment Operator
// ==      Comparison Operator
// ===     Strict Equality Operator

let x = 3.14;
let y = "3.14";

// Assignment Operator = :
if(x = 3.1417){
    console.log("this is pi", x, typeof(x));
}
else{
    console.log("its not pi", x, typeof x);
}

// Comaparison Operator == :
x = 3.14;
y = "3.142";

if(x == 3.14 && y == 3.14){
    console.log("this is PI", x, typeof(x));
}
else{
    console.log("its not PI coz x is", x, typeof x, ",but y's value is", y, typeof y, ",dataType doesnt matter");
}

// Strict Equality Operator === :
x = 3.14;
y = "3.14";

if(x === 3.14 && y === 3.14){
    console.log("this is pi", x, typeof(x));
}
else{
    console.log("its not PI coz x is", x, typeof x, ",but y is string", y, typeof y, ",dataType matters");
}
