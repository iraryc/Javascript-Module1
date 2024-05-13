"use strict"
let payRate = 3;
let hoursWorked = 40;
let overtimeHours = null;
let grossPay = null;
let overTimePay = null;
let filingStatus = "married";
let grosspay = payRate * hoursWorked;
let annualGrossPay = grosspay * 52;
let taxrate;
let taxratetotal;

// Filing Status Single 

if(filingStatus == "single" && annualGrossPay < 12000) {
    taxrate = .05;
    taxratetotal = annualGrossPay * taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}
else if(filingStatus == "single" && annualGrossPay < 25000) {
    taxrate = .10;
    taxratetotal = annualGrossPay * taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}
else if(filingStatus == "single" && annualGrossPay < 75000) {
    taxrate = .15;
    taxratetotal = annualGrossPay * taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}
else if(filingStatus == "single" && annualGrossPay > 75000) {
    taxrate = .20;
    taxratetotal = annualGrossPay * taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}

//Filing Status Married 

if(filingStatus == "married" && annualGrossPay < 12000) {
   console.log(`No annual tax witholdings!`);
   console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is none`)
}
else if(filingStatus == "married" && annualGrossPay < 25000) {
    taxrate = .06;
    taxratetotal = annualGrossPay *taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}
else if(filingStatus == "married" && annualGrossPay < 75000) {
    taxrate = .11;
    taxratetotal = annualGrossPay *taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}
else if(filingStatus == "married" && annualGrossPay > 75000) {
    taxrate = .20;
    taxratetotal = annualGrossPay *taxrate;
    console.log(`You worked ${hoursWorked} hours this period.
    Because you earn ${payRate} per hour, your gross pay is ${grosspay}
    Your filing status is ${filingStatus}
    Your tax withholdings this year is ${taxratetotal}`)
}


