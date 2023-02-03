// get = to create getters we use get keyword
//       it's job is to binds an object property to a function when that property is accessed.
        //  it increases data security and another is that we can perform some additional logic when we access this property directly.
        
// set = to create setters we use set keyword
        //  it's job is to binds an object property to a function when that property is assigned a value.           

class Car{
    constructor(horsePower){
        this._horsePower = horsePower;
        this._gas = 20;
        this._petrol = 40;
    }
    get horsePower(){
        return `${this._horsePower}hp`;
    }
    get gas(){
        return `${this._gas}L (${this._gas / 40 * 100}%)`;
    }
    get petrol(){
        return `${this._petrol}L (${this._petrol / 80 * 100}%)`;
    }
    set petrol(value){
        if(value > 80){
            value = 80;
        }
        else if(value < 0){
            value = 0;
        }
        this._petrol = value;
    }
}        

let car = new Car(300);
// car.horsePower = 1000000; // this chnage nothing coz we need _horsePower and developers know that _horsePower is protected property(symbol: _propertyName)
// car._horsePower = 101;

car.petrol = 100;

console.log(car.horsePower);
console.log(car.gas);
console.log(car.petrol);