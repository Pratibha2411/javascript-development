// setInterval() = it invokes a function repeatedly after a number of milliseconds and it is asynchronous function (doesn't pause execution)


let count = 0;
let max = window.prompt(`Count uo to What #`);
max = Number(max);

let timer = setInterval(countTimer, 1000);

function countTimer(){
    count++;
    document.getElementById("afterSubmitClick").innerHTML += count + "<br/>";
    console.log(count);
    if(count >= max){
        clearInterval(timer);
    }
}