"use strict"

// let payRate = 12.50;
// let hoursWorked = 50;
// let extraHours = 0;
// let extraHoursRate = payRate * 1.5;
// let extraHoursPay = 0
// let totalPay;

// if (hoursWorked > 40) {
//    extraHours = hoursWorked - 40;
//    extraHoursPay = extraHours * extraHoursRate;
//    totalPay = payRate * 40;
//    totalPay = totalPay + extraHoursPay
//    console.log(`You worked ${hoursWorked} hours at ${payRate.toFixed(2)} an hour with a an extra hours rate of $${(extraHoursRate.toFixed(2))} an hour. The total pay is ${totalPay.toFixed(2)}`);
// }else {
//     totalPay = payRate *hoursWorked;
//     console.log(`You worked ${hoursWorked} hours at ${payRate.toFixed(2)} an hour. The total pay is $${totalPay.toFixed(2)}`);
// }

//Input (declaring variables)
//Make variables as descriptive as possible
let payRate = 17.30;
let hoursWorked = 45;
let overtimeHours = null;
let grossPay = null;
let overTimePay = null;

//Algoritme (calculation or step by step)
//Write down the steps in plain english
// If > 40, every hour above it should be 1.5x payrate
// How many hours overtime ?

if(hoursWorked > 40 )
{
    overtimeHours = hoursWorked - 40;
   // console.log(overtimeHours)
    overTimePay = (overtimeHours * (1.5 * payRate));
    grossPay = 40 * payRate;
    grossPay+= overTimePay;
}
else {
    grossPay = hoursWorked * payRate;
}
//Output
// Remsey has worked 40 hours this week. his payrate 17.30 
console.log(`Remsey has worked ${hoursWorked} this week. His payrate is $${payRate} per hour.
His grosspay is $${grossPay.toFixed(2)}`);