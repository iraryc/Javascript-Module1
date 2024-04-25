//Decalte variables 

let firstname;
let favoritemeal; 
let favoritemeal1 = "Torta";
let favoritemeal2  = "Tacos";
let favoritemeal3 = "Steak";

console.log(favoritemeal) //undefined because we have not given it a value yet 

console.log('Hi, my name is andrea and my 3 favorite meals are: ' + favoritemeal1, favoritemeal2, 'and ' + favoritemeal3);

console.log(`Hi, my name is Andrea and my 3 favorite meals are: ${favoritemeal1}, ${favoritemeal2}, and ${favoritemeal3}`);

let favoriteMeals = ["Sushi", "Steak", "Torta", "Sonoran Hotdog"]
console.log(favoriteMeals[0]);

console.log (`Hi my name is Andrea and my 3 favorite meals are: ${favoriteMeals[0]}, ${favoriteMeals[1]}, ${favoriteMeals[2]} and ${favoriteMeals[3]}`);

let priceMeal1 = 40;
let priceMeal2 = 50;
let priceMeal3 = 10;
let priceMeal4 = 3;
let total = priceMeal1 + priceMeal2 + priceMeal3 + priceMeal4;
console.log(`The total price of our 4 favorite meals is ${total}`);

let taxes = 0.08;
let totalWTaxes = (total * 0.08) + total;

console.log(`The total price of our 4 favorite meals is ${totalWTaxes}`);

console.log (`Hi my name is Andrea and my 3 favorite meals are: ${favoriteMeals[0]}, ${favoriteMeals[1]}, ${favoriteMeals[2]} and ${favoriteMeals[3]}. 
The total price of this whole meal would be ${(totalWTaxes)}`);
