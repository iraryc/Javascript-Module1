"use strict"

function ClickTheAddButton() {
    let numberOne = Number (document.getElementById('numberOne').value);
    let numberTwo = Number (document.getElementById('numberTwo').value);

    console.log("Number One:", numberOne);
    console.log("Number Two:", numberTwo);

    let answer = numberOne + numberTwo;

    document.getElementById('answer').value = answer;

    console.log("Answer:", answer);
}

function ClickTheSubButton() {
    let numberOne = Number (document.getElementById('numberOne').value);
    let numberTwo = Number (document.getElementById('numberTwo').value);

    console.log("Number One:", numberOne);
    console.log("Number Two:", numberTwo);

    let answer = numberOne - numberTwo;

    document.getElementById('answer').value = answer;

    console.log("Answer:", answer);
}

function ClickTheMulButton() {
    let numberOne = Number (document.getElementById('numberOne').value);
    let numberTwo = Number (document.getElementById('numberTwo').value);

    console.log("Number One:", numberOne);
    console.log("Number Two:", numberTwo);

    let answer = numberOne * numberTwo;

    document.getElementById('answer').value = answer;

    console.log("Answer:", answer);
}

function ClickTheDivButton() {
    let numberOne = Number (document.getElementById('numberOne').value);
    let numberTwo = Number (document.getElementById('numberTwo').value);

    console.log("Number One:", numberOne);
    console.log("Number Two:", numberTwo);

    let answer = numberOne / numberTwo;

    document.getElementById('answer').value = answer;

    console.log("Answer:", answer);
}

