// setTimeout = it invokes a function after a number of milliseconds, it's an asychronous function (dosent pause execution)

let item = "Cryptocurrency";
let price = 480.98;

let timer1 = setTimeout(firstMessage, 2000, item, price);
let timer2 = setTimeout(secondMessage, 4900);
let timer3 = setTimeout(thirdMessage, 7900);

function firstMessage(item, price){
    alert (`Buy this ${item} for ${price}`);
}
function secondMessage(){
    alert (`This is not a scam`);
}
function thirdMessage(){
    alert (`Do It!`);
}

document.getElementById("submitButton").innerHTML = "Buy";

document.getElementById("submitButton").onclick = function(){
    clearTimeout(timer1);
    clearTimeout(timer2);
    clearTimeout(timer3);
    alert(`you clicked on ok for buying, Thanks for buying`);
}


