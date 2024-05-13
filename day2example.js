"use strict"
//Working with numbers 

let numberA = 57;
let numberB = 78;
let totalnumb = numberA + numberB;

let age = 15;
let retireage = 20;

let amountofyears = retireage - age;

console.log(`I will retire in ${amountofyears} years`);

let newage = age **2;
console.log(newage);



if(age > 20) {
    console.log('You are old enough to enter website, Welcome!');
}
else
{
    console.log(`You are not old enough to enter the party you need ${amountofyears} more years to get in!`);
}