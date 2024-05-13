"use strict"

let foodCost = 79.25; 
let tax = 6.54;
let tip = 0.08;

let tipdue = (foodCost * tip) 
let totaldue = (foodCost*tip) + foodCost + tax

console.log(`The tip due is ${tipdue}.`);

console.log(`Food cost is ${foodCost} and the tax is ${tax}. Plus the tip is ${tip.toFixed(2)}, so the total is ${totaldue.toFixed(2)}.`);

