console.log('Arrays');

let userNr = prompt('How many values will you provide?');
userNr = Number(userNr);

let values = [];
for (let i = 0; i < userNr; i++) {
    values[i] = prompt(`Input value ${i + 1}`);
    values[i] = Number(values[i]);
}

for (let i = 0; i < values.length; i++) {
    ;
}

console.log(values);

let nrMsg1 = [];
let nrMsg2 = [];
let nrMsg3 = [];

for (let i = 0; i < userNr; i++) {

    if(values[i] % 3 == 0) {
        nrMsg1.push(values[i]);
    }
    if(values[i] % 3 == 1) {
        nrMsg2.push(values[i]);  
    }
    if(values[i] % 3 == 2) {
        nrMsg3.push(values[i]);
    }
}

console.log(nrMsg1);
let msg1 = `${nrMsg1.length} numbers that you provided have the remainder of division by 3 equal to 0`;
alert(msg1);

console.log(nrMsg2);
let msg2 = `${nrMsg2.length} numbers that you provided have the remainder of division by 3 equal to 1`;
alert(msg2);

console.log(nrMsg3);
let msg3 = `${nrMsg3.length} numbers that you provided have the remainder of division by 3 equal to 2`;
alert(msg3);
