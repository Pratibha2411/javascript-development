// 0. Rectangle Pattern:
        // 123456789
        // 123456789
        // 123456789
//            OR
        // *********
        // *********
        // *********
let symbol = window.prompt("Any symbol:");
let rowsss = window.prompt("Enter rowsss:");
let columns = window.prompt("Enter columns:");

for(let row = 1; row <= rowsss; row++){
    for(let col = 1; col <= columns; col++){
        // document.getElementById("anyText").innerHTML += col; 
        document.getElementById("anyText").innerHTML += symbol; 
    }
    document.getElementById("anyText").innerHTML += "<br>";
}


// 1. Half Pyramid Pattern using numbers:
        // 1
        // 12
        // 123
        // 1234
// let rowsss = window.prompt("Enter rows:");
// let columns = window.prompt("Enter columns:");

// for(let row = 1; row <= rowsss; row++){
//     for(let col = 1; col <= row; col++){
//         document.getElementById("anyText").innerHTML += col;
//     }
//     document.getElementById("anyText").innerHTML += "<br>";
// }


// 2. Print a solid rectangle:
        // ****
        // ****
        // ****
        // ****
        // ****
// let rowsss = window.prompt("Enter rowsss, EX:five");
// let columns = window.prompt("Enter columns, EX:4");

// for(let row = 1; row <= rowsss; row++){
//         for(let col = 1; col <= columns; col++){
//             document.getElementById("anyText").innerHTML += "*";
//         }
//         document.getElementById("anyText").innerHTML += "<br>";
// }


// 3. Print a hollow rectangle:

// let rowsss = window.prompt("Enter rowsss:");
// let columns = window.prompt("Enter columns:");

// for(let row = 1; row <= rowsss; row++){
//     for(let col = 1; col <= columns; col++){
//         if(row ==1 || row == rowsss || col == 1 || col == columns){
//             document.getElementById("anyText").innerHTML += "*";
//         }
//         else{
//             // document.getElementById("anyText").innerHTML += "<br>";
//         }
//     }
//     document.getElementById("anyText").innerHTML += "<br>";
// }

// KEEP CONTINUE FROM HERE