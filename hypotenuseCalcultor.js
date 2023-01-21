// formula: C = √a2 + b2


let valueA;
let valueB;
let valueC;


document.getElementById("anyText").innerHTML = "Above Find Hypotenuse C = √a2 + b2";
document.getElementById("submitButton").innerHTML = "Submit"

document.getElementById("submitButton").onclick = () => {
    
    valueA = document.getElementById("inputnText").value;
    valueA = Number(valueA);

    valueB = document.getElementById("inputnAnotherText").value;
    valueB = Number(valueB);
    
    valueC = Math.sqrt(Math.pow(valueA, 2) + Math.pow(valueB, 2));

    document.getElementById("anyText").innerText = "C = √a2 + b2 is: " + valueC;
    console.log(valueC);
    
} 