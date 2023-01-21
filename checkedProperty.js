// checked property of an input:
//                             can use with checkBox
//                             and with radio buttons

document.getElementById("submitButton").innerHTML = "Submit";

document.getElementById("submitButton").onclick = () => {
    const myCheckbox = document.getElementById("labelText0");
    const paytm = document.getElementById("paytm");
    const googlePay = document.getElementById("googlePay");
    const phonePe = document.getElementById("phonePe");

    if(myCheckbox.checked){
        console.log("You Subscribed");
    }
    else{
        console.log("You aint subscribed");
    } 

// Payment mode: checked property
    if(paytm.checked){
        console.log("Selected Paytm");
    }
    else if(googlePay.checked){
        console.log("Selected Google Pay");
    }
    else if(phonePe.checked){
        console.log("Selected phonePe");
    }
    else{
        console.log("Choose any of the payment mode");
    }
}
