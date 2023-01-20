// formula: C = √a2 + b2


let valueA;
let valueB;
let valueC;

document.getElementById("submitButton").innerHTML = "Submit"

document.getElementById("submitButton").onclick = () => {
    
    valueA = document.getElementById("inputnText").value;
    valueB = document.getElementById("inputnAnotherText").value;
    
    valueA = Number(valueA);
    valueB = Number(valueB);
    
    valueC = Math.sqrt(Math.pow(valueA) + Math.pow(valueB));

    console.log(valueC);

    document.getElementById("submitButton").innerHtml = "C = √a2 + b2 === " + valueC;
}