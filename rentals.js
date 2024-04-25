"use strict"

let people = 38;
let vanpeople = 15;
let vancost = 250; 

let totalVansNeeded= people / vanpeople;

let totalvancost = vancost * totalVansNeeded;



console.log(Math.ceil(totalVansNeeded));