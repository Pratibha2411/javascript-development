//1. Non Effective method:

// class Car{
//     constructor(modal, year, color){
//         this.modal = modal;
//         this.year = year;
//         this.color = color;
//     }
//     drive(){
//         console.log(`Yeah, you drive ${this.modal}`);
//     }
// }

// const car1 = new Car("Mustand", 2023, "red")
// const car2 = new Car("Corvette", 2024, "black")
// const car3 = new Car("Lambo", 2022, "yellow")

// const cars = [car1, car2, car3];

// console.log(cars[0].modal);
// console.log(cars[0].year);
// console.log(cars[0].color);

// cars[0].drive();
// cars[1].drive();
// cars[2].drive();


// 2. Effective method:
class Car{
    constructor(modal, year, color){
        this.modal = modal;
        this.year = year;
        this.color = color;
    }
    drive(){
        console.log(`Yeah, you drive ${this.modal}`);
    }
}

const car1 = new Car("Mustand", 2023, "red")
const car2 = new Car("Corvette", 2024, "black")
const car3 = new Car("Lambo", 2022, "yellow")
const car4 = new Car("Ferari", 2021, "white")

const cars = [car1, car2, car3, car4];

startRace(cars);

function startRace(cars){
    for(const car of cars){
        car.drive();
    }
}

