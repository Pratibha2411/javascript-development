let count;
count = document.getElementById("labelText").innerHTML = 0;
document.getElementById("labelText1").innerHTML = "Increase";
document.getElementById("labelText2").innerHTML = "Reset";
document.getElementById("labelText3").innerHTML = "Decrease";

document.getElementById("labelText1").onclick = () =>{
    count += 1;
    document.getElementById("labelText").innerHTML = count;
}

document.getElementById("labelText2").onclick = () =>{
    count = 0;
    document.getElementById("labelText").innerHTML = count;
}

document.getElementById("labelText3").onclick = () =>{
    count -= 1;
    document.getElementById("labelText").innerHTML = count;
}

