// this = reference to a particular object but it depends on the immediate context where you use the this keyword. 

const car1 = {
    model: "Mustang",
    color: "red",
    year : 2023,

    drive : function(){
        // console.log(`You drive the ${model}`); //model will coz an error so use this
        console.log(`You drive the ${this.model}`);
    },
    break : function(){
        console.log(`You step on the break`);
    }
}
const car2 = {
    model: "Corvette",
    color: "black",
    year : 2024,

    drive : function(){
        console.log(`You drive the ${this.model}`);
    },
    break : function(){
        console.log(`You step on the break`);
    }
}

car1.drive();
car2.drive();