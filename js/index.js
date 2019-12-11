let name = prompt('Enter your name:');

if(name == ""){
    name = promt('Enter your name again:');
} else {
    alert("Your name is " + name + ". Please guess a number from 1 to 100.");
}

const max = 100;
const min = 1;

let number = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(number);

let guess = prompt("Which number i guessed?");
let numberOfGuesses =  0;

while(guess !== number) {
    if(guess > number) {
        guess = prompt('Мало. Попробуй ще раз');
        numberOfGuesses++;
    } else if(guess < number) {
        guess = prompt('Забагато. Спробуй ще раз');
        numberOfGuesses++;
    }

    alert("Ти вгадав це число " + guess + ". Всього за " + numberOfGuesses + " спроб.");
}

function error () {
    for( let i = 0; i > Number.MAX_VALUE; i++) {
    console.log('Hack the system');
}
}
error();
