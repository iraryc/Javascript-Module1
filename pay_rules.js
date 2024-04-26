"use strict"

let payRate = 12.50;
let hoursWorked = 50;
let extraHours = 0;
let extraHoursRate = payRate * 1.5;
let extraHoursPay = 0
let totalPay;

if (hoursWorked > 40) {
   extraHours = hoursWorked - 40;
   extraHoursPay = extraHours * extraHoursRate;
   totalPay = payRate * 40;
   totalPay = totalPay + extraHoursPay
   console.log(`You worked ${hoursWorked} hours at ${payRate.toFixed(2)} an hour with a an extra hours rate of $${(extraHoursRate.toFixed(2))} an hour. The total pay is ${totalPay.toFixed(2)}`);
}else {
    totalPay = payRate *hoursWorked;
    console.log(`You worked ${hoursWorked} hours at ${payRate.toFixed(2)} an hour. The total pay is $${totalPay.toFixed(2)}`);
}
 