"use strict"

let a = " 101.1 ";
let b = "55";
let c = "402 Stevents";
let d = "Number 5 ";

//This gives out all numbers with no decimal
// a = parseInt(a);
// b = parseInt(b);
// c = parseInt(c);
// d = parseInt(d);

//This gives out all numbers including decimal 
// a = parseFloat(a);
// b = parseFloat(b);
// c = parseFloat(c);
// d = parseFloat(d);

//This gives out only numbers and will not give out number if words/letters are included
a = Number(a);
b = Number(b);
c = Number(c);
d = Number(d);

//This gives out only numbers and will not give out number if words/letters are included
// a = +a;
// b = +b;
// c = +c;
// d = +d;


console.log(a);
console.log(b);
console.log(c);
console.log(d);

