// Practicing things what we've learnt yet.
// Celsius:    (temprature - 32) * (5/9);
// Fahrenheit: temprature * 9/5 + 32;

let temprature;

document.getElementById("submitButton").innerHTML = "Submit";

document.getElementById("submitButton").onclick = () => {
    
    if(document.getElementById("cbutton").checked == true){
        temprature = document.getElementById("temperature").value;
        temprature = Number(temprature);
        temprature = toCelsius(temprature);
        document.getElementById("afterSubmitClick").innerHTML = temprature +"°C"
    }
    else if(document.getElementById("fbutton").checked){
        temprature = document.getElementById("temperature").value;
        temprature = Number(temprature);
        temprature = toFahrenheit(temprature);
        document.getElementById("afterSubmitClick").innerHTML = temprature +"°F"
    }
    else{
        document.getElementById("afterSubmitClick").innerHTML = "Select any unit"
    }
}

function toCelsius(temperature){
    return (temperature -32) * (5/9);
}
function toFahrenheit(temperature){
    return temperature * 9 / 5 + 32;
}


