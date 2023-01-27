// Objects = A group of properties and methods.A
//           Properties: What an object has.  
//           Methods: What an object can do.
//           Use - To access properties and methods.

const car = {
    model: "Mustang",
    color: "red",
    year: 2023,

    drive : function(){
        console.log(`You drive the car ${car.model}`);
    },
    break : function(){
        console.log(`You step on the breaks`);
    }
}
const car1 = {
    model: "Corvette",
    color: "black",
    year: 2024,

    drive : function(){
        console.log(`You drive the car`);
    },
    break : function(){
        console.log(`You step on the breaks`);
    }
}

console.log(car.model); 
console.log(car.color); 
console.log(car.year); 

car.drive();
car.break();

console.log(car1.model); 
console.log(car1.color); 
console.log(car1.year); 

car1.drive();
car1.break();