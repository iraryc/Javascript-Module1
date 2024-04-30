"use strict"

let currentHour = 1700;
let greeting;
// if(currentHours < 1000) {
//     console.log(`Good morning! Its currently ${currentHours} in the morning!`);
// }
// else if (currentHours <= 1659) {
//     console.log(`Have a good day so far!`);
// }
// else {
//     console.log(`Have a goodnight and sleep tight!`);
// }

//This is Remsey approach 

if (currentHour < 10) {
    greeting = "Good morning!";
} else if (currentHour >= 10 && currentHour < 17) {
    greeting = "Good day!";
} else {
    greeting = "Good evening!";
}