let answer = Math.floor(Math.random()*10 + 1);
let guessCount = 0;
let guessingInput;


document.getElementById("mainHeading").innerHTML += "Number Guessing Game";
document.getElementById("mainHeading").innerHTML += "Pick any # between 1-10"+"<br>";
document.getElementById("mainHeading").innerHTML += "Enter a guess in input Any Text then submit :";
document.getElementById("submitButton").innerHTML += "Submit"

document.getElementById("submitButton").onclick = () => {
    guessingInput = document.getElementById("inputnText").value;
    guessCount+=1;
    if(guessingInput == answer){
        alert(`Correct & You had ${guessCount} attempt`);
    }
    else if(guessingInput > answer){
        alert(`Too High`);
    }
    else{
        alert(`Too Small`);
    }
}