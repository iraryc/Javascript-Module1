"use strict"

let age = 20;

if (age > 18) {
    console.log('You are old enough to watch the movie Avengers');
}
else if (age < 8) {
    console.log('You are not old enough please watch a different movie');

}
else {
    console.log('There are many other movies to watch');

}

//Define movie title
let movieTitle = 'The Avengers';

if(movieTitle == 'The Avengers') {
    console.log("Prepare for an epic assemply of heroes and action");
} else {
    console.log("Not watching the 'The Avenger'? Hopefully, you still chose a great movie!");
}

// List of Avengers
let avengers = ['Iron Man', 'Thor', 'Hulk', 'Captain America']; // Array

// Check if Hulk is part of the team
if (avengers.includes('Hulk')) {
    console.log("The Hulk is in! Expect some smashing action!");
} else {
    console.log("It seems the Hulk is out. Hope the rest can handle it!");
}

//Check if its the weekend
let dayofWeek = 'Tuesday';

if (dayofWeek === 'Saturday' || dayofWeek === 'Sunday' ) {
    console.log("yay its the weekend!");
} else {
    console.log("Booo! Its a weekday:(");
}

let friendInvited = 6;
let costPerPerson = 15;
let totalCost = friendInvited*costPerPerson;
let discount = .10;


if(friendInvited < 5) {
    console.log(`The total cost for an epic Avengers movie night with ${friendInvited} friends is $${totalCost}`);
} 
else if(friendInvited >= 5) {
totalCost = (costPerPerson*discount) + costPerPerson;
    console.log(`Yay we have more than 5 friends coming we get a discount of 10%. It will now be $${totalCost} per person`);
}



