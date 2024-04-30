"use strict";

let a = 3;
let b = 2;
let c = 4;
// let smallest; 

if ( a < b && a < c) {
    // let smallest = a;
    console.log(`The smallest value is ${a} `);
}
else if (b < a && b < c) {
    console.log(`The smallest value is ${b}`);
}
else {
    console.log(`The smallest value is ${c}`);
}

if(a > b && a > c) {
    console.log(`The largest value is ${a} `);
}
else if ( b > a && b > c) {
    console.log(`The largest value is ${b} `);
}
else {
    console.log(`The largest value is ${c} `);
}
// if (a < b && a < c) {
//     // let smallets = a;
//     console.log(`The smallest value is: ${a}`);
//   } else if (b < a && b < c) {
//     console.log(`The smallest value is: ${b}`);
//   } else {
//     console.log(`The smallest value is: ${c}`);
//   }