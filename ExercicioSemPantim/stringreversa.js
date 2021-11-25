/*
Proposta:
Criar uma função que imprima na tela o texto reverso ao que foi escrito pelo usuário.
 */

let novaString = "";

function stringReversa(str) {
    for (let indice = str.length - 1; indice >= 0; indice--) {
        novaString += str[indice];
    }
    console.log(novaString);
}

stringReversa('Dale, boy!')