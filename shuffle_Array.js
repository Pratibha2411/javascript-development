// A good example where we can apply this would be a CARD GAME

let cards = ['A', '2', '3', '4', '7', '8', '9', '10', 'J', 'Q', 'K'];

shuffle(cards);
console.log(`${cards}`);
console.log(cards[0]);
cards.forEach(elementsOfArray => console.log(`here: ${elementsOfArray}`));

function shuffle(array){
    let currentIndex = array.length;

    while(currentIndex != 0){
        let randomIndex = Math.floor(Math.random() * array.length);
        currentIndex -= 1;

        let temp = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temp;
    }
    return array;
}
