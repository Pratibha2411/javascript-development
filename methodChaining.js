// Method chaining: calling one method after another in one continous line of code also can say suSequence method to 2nd/later methods

let userName = "Pratibha Baloriya"

// let letter = userName.char, 7);
// letter = letter.toUpperCase(); //not good practice

let letter = userName.charAt(0).toUpperCase().trim();

console.log(letter);