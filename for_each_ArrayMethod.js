// array.forEach() = executes a provided callback function once for each array element

let students = ["light", "el", "kira", "luke"];
students.forEach(capitalize);
students.forEach(print);

function capitalize(element, index, array){
        array[index] = element[0].toUpperCase() + element.substring(1);

}
console.log(`${students}`); //not-effective way to print all elements of an array so creating print function 
// console.log(students[0]);

function print(element){
    console.log(element);
}