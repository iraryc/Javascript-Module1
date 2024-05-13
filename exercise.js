"use strict";

var customerID = 'J4t3S';
var firstName = 'Chris';
var middleName = 'Pe';
var lastName = 'Bacon';
var gender = 'male';
var birthday = new Date(1995,3,29);
var driveNum = 'D34256FEF'
var policyNum = 34345534; 

var myName = 'Andrea';
var mymiddleName = 'Irary';
var mylastName = 'Ceballos Mendez';
var city = 'Obregon'
var state = 'Sonora'

console.log(`Hi my name is ${myName} ${mymiddleName} ${mylastName} and I was born in ${city}, ${state}. `)

var foodCost = 80.54;
var tax = 8.00;
var tip = 15;

var total = foodCost + tax + tip;

console.log(`The total amount for dinner yesterday was ${total}`);

//Declare variables to store the information for my signup form
let firsname = 'andrea';
let lastname = 'ceballos';
let emailaddress = 'iraryc@gmail.com';
let password = 'dhej#42';
let recievingEmails = true; //either can be true or false in this case true 

console.log(`Full Name: ${firsname} ${lastname}`);
console.log(`Email: ${emailaddress}`);
console.log(`Password: ${password}`);
console.log(`Recieving emails: ${recievingEmails}`);

//We can do calculatons

let shoeprice = 300.40;
let taxess = 0.09;
let discount = 5; 

let totalshoe = ((shoeprice * taxess) + shoeprice) - discount;


console.log(`total shoe price is ${totalshoe.toFixed(2)}`); // the toFixed lets us work with how many decimals we want



