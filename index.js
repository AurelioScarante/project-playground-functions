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

// Requisito - 4

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

// Requisito - 7

function catAndMouse() {
    var mouse = 10;
    var cat1 = 4;
    var cat2 = 6;
    var distânciaCat1 = mouse - cat1;
    var distânciaCat2 = mouse - cat2;

    if ( distânciaCat1 === distânciaCat2) {
        return "os gatos trombam e o rato foge"
    } 
    else if (distânciaCat2 < distânciaCat1) {
        return "cat2"
    }
    else {
        return "cat1"
    }
}

console.log(catAndMouse());

// Requisito - 8

function fizzBuzz() {
    var numberList = [2, 15, 7, 9, 45];
    var response = [];
    for (let i = 0; i < numberList.length; i +=1) {
        if ((numberList[i]  % 5 === 0) && ( numberList[i] % 3 === 0)) {
            console.log(i)
            response.push("fizzbuzz");
        } else if (numberList[i] % 3 === 0) {
            console.log(i)
            response.push("fizz")
        } else if (numberList[i]  % 5 === 0) {
            console.log(i)
            response.push("buzz");
        } else { console.log(i), response.push("bug!")}
    }
    return response;
}

console.log(fizzBuzz());
