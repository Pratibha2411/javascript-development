// Map = Object that holds key-value pairs of any data types.

const store = new Map ([
    ["t-shirts", 20],
    ["jeans", 30],
    ["denim", 24],
    ["socks", 10],
    ["undergarments", 49]
]);

// Get method of MAP:
let shoppingCart = 0; //it's for get method to sum up for all items
shoppingCart += store.get("t-shirts");
shoppingCart += store.get("denim");
console.log(`Total of Cart = $${shoppingCart}`);

// Set method of MAP: add key-value pairs
store.set("hat", 40);
store.set("watch", 14);

// Delete method of MAP: delete key-value pairs
store.delete("hat"); //need to type only key to delete

// Check if there is any specific key: gives boolean value, to make it visible m putting it in console.log
console.log(store.has("hat"));   //false
console.log(store.has("watch")); //true

// Size method: it will show total amount of pairs in object
console.log(`Total Pairs: ${store.size}`);

store.forEach((value, key) => console.log(`${key} $${value}`));