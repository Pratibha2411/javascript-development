// switch statement = statement that examines a value
//                    for a match against many case clauses
//                    more efficient than many "else if" statements

// For ex: 1st use if else then switch =



// let grade = "B";

// if(grade == "A"){
//     console.log("You got", grade);
// }
// else if(grade == "B"){
//     console.log("You got", grade);
// }
// else if(grade == "C"){
//     console.log("You got", grade);
// }
// else if(grade == "D"){
//     console.log("You got", grade);
// }
// else if(grade == "E"){
//     console.log("You got", grade);
// }
// else if(grade == "F"){
//     console.log("You got", grade);
// }
// else {
//     console.log(grade,"is not a grade range");
// }



// let grade = "B";
// switch (grade) {
//   case (grade = "A"):
//     console.log("you got ", grade);
//     break;
//   case (grade = "B"):
//     console.log("you got ", grade);
//     break;
//   case (grade = "C"):
//     console.log("you got ", grade);
//     break;
//   case (grade = "D"):
//     console.log("you got ", grade);
//     break;
//   case (grade = "E"):
//     console.log("you got ", grade);
//     break;
//   case (grade = "F"):
//     console.log("you got ", grade);
//     break;
//   default:
//     console.log(grade, "is not a grade");
// }



let grade = 77;
// if working with condition then we'll use true as a condition in switch
switch(true){
    case grade < 33:
        console.log("You failed ", grade);
        break;
    case grade >=33 && grade < 47:
        console.log("You passed ...barely ", grade);
        break;
    case grade >= 47 && grade < 70:
        console.log("You did okay! ", grade);
        break;
    case grade >= 70 && grade <= 77:
        console.log("You did good!! ",grade);
        break;
    case grade > 77:
        console.log("You did great ", grade);
        break;
    default:
        console.log(grade, " is not a grade");        
}