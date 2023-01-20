// Arithmetic expression is a combination of:
//     Operands (values, variables, etc)
//     Operators (+ - * / %) these can be evaluated to a values
//         For ex: y = x + 4;
//     Augmented assignment operator(kind of shortcuts): can be us to reassign the value to the declared variables or same variable only, can not use these while declaration
//         For ex: y += 4;

// Operator precedence:
//     parenthesis ()    
//     exponents *
//     multiplication & division 
//     addition & subtraction

let employee = 20;
let extraEmployeeInThreeTeam;
employee = employee + 1;
// employee = employee - 1;
// employee = employee * 1;
// employee = employee / 1;
extraEmployeeInThreeTeam = employee % 2;
// let extraEmployeeInThreeTeam = extraEmployeeInThreeTeam % 3;
// employee = employee ** 2; //employee to the power 2 or Math.pow(2);
console.log(employee);
console.log(extraEmployeeInThreeTeam);

// now using augmented assignment operator for shortcut
// employee += 1;
employee -= 2;
// employee *= 1;
// employee /= 1;
// extraEmployeeInThreeTeam %= 1;
// employee **= 1;
// let leader = leader % 3; // leader is not decalred before and can not use augmentation while decalration
console.log(employee);


// Operator precedence:
let result = 1 + 2 * (8/4);
console.log(result);