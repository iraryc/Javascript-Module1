"user strict"

let leapYear = 2028;
 
if ((leapYear % 4 === 0 && 100 != 0) || (leapYear % 400 === 0)) {
    console.log (`yay the year ${leapYear} is a leap year!`);
} else {
    console.log(`Sad this is not a leapyear :(`);
}