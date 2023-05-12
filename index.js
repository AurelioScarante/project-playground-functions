// Requisito - 1

function compareTrue() {
    const a = 22;
    const b = 18;
    if (a >= 18 && b >= 18) {
        return true
    } else {
        return false
    }
}
console.log(compareTrue())

//Requisito - 2

function calcArea() {
    const base = 2;
    const height = 4;
    const area = (base * height) / 2
    return area
}

console.log(calcArea());

// Requisito - 3

function splitSentence() {
    var strg1 = "Go Trybe";
    var result = strg1.split(" ", 2);

    return result 
}

console.log(splitSentence())