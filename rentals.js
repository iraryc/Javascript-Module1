"use strict"

let people = 38;
let vanpeople = 15;
let vancost = 250; 

let totalVansNeeded= people / vanpeople;

let totalvancost = vancost * Math.ceil(totalVansNeeded);

let amoutperperson = totalvancost / people



console.log(Math.ceil(totalVansNeeded));

console.log(totalvancost.toFixed(2));

console.log(`The amount per person would be $${amoutperperson.toFixed(2)}`);