let dice1;
let dice2;
let dice3;

document.getElementById("submitButton").innerHTML = "Click to roll dice between 1-10";
document.getElementById("submitButton").onclick = () => {
    dice1 = Math.floor(Math.random() * 10) + 1;
    dice2 = Math.floor(Math.random() *10) + 1;
    dice3 = Math.floor(Math.random() * 10) + 1;
    
    document.getElementById("labelText1").innerHTML = dice1;  
    document.getElementById("labelText2").innerText = dice2;
    document.getElementById("labelText3").innerText = dice3;

}
