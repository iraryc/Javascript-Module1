"use strict"

let currentHours = 1300;

if(currentHours <= 1000) {
    console.log(`Good morning! Its currently ${currentHours} in the morning!`);
}
else if (currentHours <= 1659) {
    console.log(`Have a good day so far!`);
}
else {
    console.log(`Have a goodnight and sleep tight!`);
}