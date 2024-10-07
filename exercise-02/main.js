console.log('Iterations')

let userValues = [];
for (let i = 0; i < 5; i++) {
    userValues[i] = prompt(`Input value ${i+1}: `);
    userValues[i] = Number(userValues[i]);
}

for (let i = 0; i < userValues.length; i++) {
    ;
}

console.log(userValues);

let maxValue = userValues[0];
for (let i = 0; i < userValues.length; i++) {
 
    if (userValues[i] > maxValue) { 
        maxValue = userValues[i]; 
    
    }
 
}

let output = maxValue;

alert(`The maximum value is: ${output}`);
