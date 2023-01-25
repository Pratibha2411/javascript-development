let grades = [100, 50, 90, 60, 80, 70, 0];

grades = grades.sort(descendingSort);
grades.forEach(print);

grades = grades.sort(ascendingSort);
grades.forEach(print);

function descendingSort(x,y){
    return y - x;
}
function ascendingSort(x,y){
    return x - y;
}
function print(elements){
    console.log(elements);
}