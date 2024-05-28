"use strict"
let items = 1;

function AddtoCart() {
     items = items + 1;
    document.getElementById("itemInCart").innerHTML = items;
}
