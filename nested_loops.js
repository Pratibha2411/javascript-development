//          Nested loop = a loop inside of another loop

//          Nested loops' varables are generally named(counter for loops: variabbles' name) as j and outer loops' variable named as i

//          Once we complete all of our inner iterations of the nested loop we then complete one iteration of outer loop then again complete inner iteration of the nested loop then again with outer loop keep continue till condition stop matching
           
//          Outer loop will always be incharge of the rows and inner loop will always be incharge of coloumns


// 1st instance 
for(let i = 1; i <= 3; i += 1){
    for(let j = 3; j >= 1; j-=1){
        // console.log(j);
    }
}
 

// drawing rectangle :

let rows = window.prompt("Enter # of rows");
let columns = window.prompt("Enter # of columns");

for(let i = 1; i <= rows; i+=1){
    // console.log(i);
    for(let j = 1; j <= columns; j+=1){
         document.getElementById("anyText").innerHTML += columns;
    }
    document.getElementById("anyText").innerHTML += "<br>";
}