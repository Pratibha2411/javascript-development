// 2D arrays = An array of arrays

let fruits =     ["Apple", "Orange", "Banana"];
let vegetables = ["Carrots", "Onions", "Potatoes"];
let meats =      ["Eggs", "Chicken", "Fish"];

let groceryList = [fruits, vegetables, meats];
groceryList[0][0] = "Mango";
groceryList[1][2] = "Cabage";
groceryList[2][1] = "Steak";

for(list of groceryList){
    // console.log(list);
    for(listItems of list){
        console.log(listItems);
    }
}
