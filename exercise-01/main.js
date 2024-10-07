console.log('Random Number Generation');

const maxRandomNr = 10;

let randomNr1 = Math.floor(Math.random() * maxRandomNr) + 1;
let randomNr2 = Math.floor(Math.random() * maxRandomNr) + 1; 

let OpSign = ['+', '-', '*'];
let randomOpSign = Math.floor(Math.random() * OpSign.length);

let result;  
switch (OpSign[randomOpSign]) {
    case '+':
        result = randomNr1 + randomNr2;     
        break;

    case '-':
        result = randomNr1 - randomNr2;     
        break;

    case '*':
        result = randomNr1 * randomNr2;     
        break;

}

console.log(randomNr1, randomNr2, OpSign[randomOpSign]);

let userNr = prompt(`${randomNr1} ${OpSign[randomOpSign]} ${randomNr2} = `);
userNr = Number(userNr);

alert(msg = userNr === result ? `Your answer is correct!` : `Your answer is wrong! The correct value is ${result}`);
