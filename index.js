// 1 - Usando o operador &&
// JavaScript possui um operador lógico &&, o qual recebe dois valores e retorna true se ambos os valores são verdadeiros, e retorna false se algum dos valores não o for.

// Considerando isso, crie uma função chamada compareTrue que, ao receber dois booleanos:

// Retorne true se ambos os valores são verdadeiros;
// Retorne false se um ou ambos os parâmetros são falsos.
// Faça a função de operador &&.
let value1 = 25;
let value2 = '25';
function compareTrue(value1 , value2) {
    if ((value1 === true) && (value2 === true)) {
        return true
    } else {
        return false
    }
}

console.log(compareTrue());