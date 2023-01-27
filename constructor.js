// Constructor = A special method of a class, its' job is to accepts arguments and assigns properties or anything else y'd like to do when you construct an object.

class Student{

    constructor(name, age, gpa){
        this.name = name;
        this.age = age;
        this.gpa = gpa;
    }
    study(){
        console.log(`${this.name} is studying`);
    }
}

const student1 = new Student("Pratibha", 22, 9.4);
console.log(student1.name);
console.log(student1.age);
console.log(student1.gpa);
student1.study();

const student2 = new Student("Baloriya", 23, 1.4);
console.log(student2.name);
console.log(student2.age);
console.log(student2.gpa);
student1.study();3

const student3 = new Student("Prati", 21, 8.4);
console.log(student3.name);
console.log(student3.age);
console.log(student3.gpa);
student1.study();