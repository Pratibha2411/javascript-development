// reduce method - Array.reduce() = reduces an array to a single value
// a fantastic use of reduce method is to sum up an array of values like- items in the shopping cart and create the total

let prices = [20, 30, 38, 40, 14, 3];
let total = prices.reduce(checkout);

console.log(`The total of your cart is $${total}`);

function checkout(total, elements){
    return total + elements;
}
