// Map = Object that holds key-value pairs of any data types.

const store = new Map ([
    ["t-shirts", 20],
    ["jeans", 30],
    ["denim", 24],
    ["socks", 10],
    ["undergarments", 49]
]);

store.forEach((value, key) => console.log(`${key} $${value}`));