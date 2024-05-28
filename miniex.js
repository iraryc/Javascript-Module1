"use strict"

let quirkDescriptionOne = function(heroName, quirk) {
    return heroName + " has a quirk called " + quirk + ".";
}

let quirkSentence = quirkDescriptionOne("Deku", "One for All");
console.log(quirkSentence);

function isquirckDangerous(quirk) {
    if (quirk === "yes") {
        return "This quirk is scary dangerous";

    } else {
        return "Not even a little dangerous";
    }
}

let response = isquirckDangerous("no");
console.log(response);

function quirkDescription(heroName, quirk) {
    return `${heroName} has a quirk called ${quirk}`;
}
console.log(quirkDescription("Deku", "One for All"));
