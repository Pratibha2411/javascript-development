// super = It refers to the parent class.
//         Commonly used to invoke constructor of a parent class

// unEffective/repeated code method: throw error
// class Animal{
   
// }
// class Rabbit extends Animal{
//     constructor(name, age, runSpeed){
//          this.name = name;
//         this.age = age;
//         this.runSpeed = runSpeed;
//     }
// }
// class Fish extends Animal{
//     constructor(name, age, swimSpeed){
//          this.name = name;
//         this.age = age;
//         this.swimSpeed = swimSpeed;
//     }
// }
// class Hawk extends Animal{
//     constructor(name, age, flySpeed){
//          this.name = name;
//         this.age = age;
//         this.flySpeed = flySpeed;
//     }
// }


// 2nd Effective method and less code:
class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }
}
class Fish extends Animal{
    constructor(name, age, swimSpeed){
        super(name, age);
        this.swimSpeed = swimSpeed;
    }
}
class Hawk extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }
}

const rabbit = new Rabbit("rabbit", 1, 40);
const fish = new Fish("fish", 100, 20);
const hawk = new Hawk("hawk", 80, 120);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);