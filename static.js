// static = a member that is static weather it's property or method belongs to a class and not any objects created from that class. 
//          it belongs to the class, not the objects.
//             properties: useful for caches, fixed-configurations
//             methods: useful for utility functions   


class Car{

    static numberOfCars = 0; //without using static keyword number would be always 1 for each object.
    constructor(model){
        this.model = model;
        Car.numberOfCars += 1;
    }
    static startRaceMethod(){
        console.log(`3....2....1...GO!`); //without using static keyword for startRaceMethod anyone can start race by their own convinince so precede the method name with "static".
    }
}

const car1 = new Car("Mustang");
// console.log(car1);
const car2 = new Car("Corvette");
// console.log(car2);
const car3 = new Car("BMW");
const car4 = new Car("Ferari");

console.log(Car.numberOfCars);
Car.startRaceMethod();