// Gives us the ability to check more than 1 condition concurrently
// && AND (BOTH consiotions must be true)
// || OR (Either condition can be true)

let temerature = 10;
let sunny = true;

// && AND- Logical operator:
if(temerature > 0 && temerature < 30 && sunny){
    console.log("The Weather is good!");
}
else{
    console.log("The weather is bad");
}

// || OR- Logical operator:
temerature = -14;

if(temerature <= 0 || temerature >= 30){
    console.log("The weather is bad!");
}
else{
    console.log("The Weather is good!");
}