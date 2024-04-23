// adding a comment to the code //
// Creating variables (storing information in the memory of the pc)//
//size, color, type, addresses 
// string: used to represent text

let shoeName = "Nike Air Max";

let color = "black";

let shoePrice = 150.50;
let available = 5;
let isAvailable = true; //Boolean mean (true or false)

//Create 5 Variable (firstname, lastname, email addreess, age, hasaPartner = true/false)

let firstName = "Andrea";
let lastName = "Ceballos";
let emailAddress = "iraryc@gmail.com";
let age = 28;
let hasPartner = true; 
let birthday = new Date(1995,3,29);

let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

let formattedDate = birthday.toLocaleDateString('en-US', options);

function getZodiacSign(date) {
    let month = date.getMonth() + 1; // JavaScript's getMonth() returns 0-11, so add 1 to align with calendar months
    let day = date.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        return "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        return "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        return "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        return "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        return "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        return "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        return "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        return "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        return "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        return "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        return "Sagittarius";
    } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
        return "Capricorn";
    }
}



//Display information use console.log
console.log('My name is ' + firstName);
console.log('My last name is ' + lastName);
console.log('My email is ' + emailAddress);
console.log('My age is ' + age);
console.log("I have a partner: " + hasPartner)
console.log(birthday.toLocaleDateString());
console.log("My birthdate (Long Format): " + formattedDate);
console.log('My Zodiac sign is ' + getZodiacSign(birthday));
