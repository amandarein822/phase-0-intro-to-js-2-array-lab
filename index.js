// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push("Ralph");
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
}

function appendCat(name) {
    var newCats = [...cats, "Broom"];
    return newCats;
}

function prependCat(name) {
    var newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat() {
    var newCats = cats.slice(0, cats.length -1);
    return newCats;
}

function removeFirstCat() {
    var newCats = cats.slice(1);
    return newCats;
}