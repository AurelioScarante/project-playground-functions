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

console.log(splitSentence());

//Concatenação de strings**

//Escreva uma função com o nome `concatName` que, ao receber uma array de strings, retorne uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM'`, independente do tamanho da array.

//Isso quer dizer que, caso o parâmetro passado para `concatName` seja a Array ['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'], a função deverá retornar `Paolillo, Lucas`.

Requisito - 4
function concatName() {
    var arrayString = [ 'Aurelio', 'Anelise', 'Millena', 'Júlia', 'Lorenzo' ];
    var result =(arrayString [4] + ", " + arrayString [0]);

    return result;
}

console.log(concatName());

// Requisito - 5

function footballpoints(wins,ties) {
    var wins = 10;
    var ties = 5;

    var totalPoints = wins * 3 + ties;

    return totalPoints;
}

console.log(footballpoints());

// Requisito - 6

function highestCount(numberList) {
    var numberList = [9, 1, 2, 3, 9, 5, 9, 7, 9, 6, 8, 9,];
    var repeatedNumber = 0;
    var highestNumber = numberList[0];

    for (i in numberList) {
        if (numberList[i] > highestNumber) {
            highestNumber = numberList[i];
        }
    }

    for (i in numberList) {
        if(numberList[i] === highestNumber) {
            repeatedNumber += 1;
        }
    }

    return repeatedNumber;

}

console.log(highestCount());
