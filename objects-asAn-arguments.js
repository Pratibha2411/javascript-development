class Car{

    constructor(modal, year, color){
        this.modal = modal;
        this.year = year;
        this.color = color;
    }
}

const car1 = new Car("Mustang", 2023, "red");
const car2 = new Car("Corvette", 2024, "black");
const car3 = new Car("Lambo", 2022, "yellow");

displayInfo(car2);
changeColor(car3, "white");
displayInfo(car3);

function displayInfo(car){
    console.log(car.modal);
    console.log(car.year);
    console.log(car.color);
}

function changeColor(car, color){
    car.color = color;
}