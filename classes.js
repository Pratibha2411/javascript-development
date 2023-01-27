// class = A blueprint for creating objects within a class we can define what properties and methods that type of object should have and it typically contains a constructure to assign some unique properties.


class Player{

     score = 0;

     pause(){
        console.log(`You paused the game`);
     }
     exit(){
        console.log(`You exited the game`);
     }
}

const Player1 = new Player();
const Player2 = new Player();
const Player3 = new Player();
const Player4 = new Player();

Player1.score += 1;

console.log(Player1.score);
console.log(Player2.score);
console.log(Player1.pause());
console.log(Player2.exit());
Player1.pause();
Player2.exit();
