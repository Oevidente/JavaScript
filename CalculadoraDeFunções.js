//Resolução

function calculadora() {
    const operação = number(prompt('Escolha uma operação:\n 1 - Scoma (+)\n 2 - subtração (-)\n - 3 multiplicação (*)\n 4 - Divisão real (/)\n 5 - Divisão inteira (%)\n 6 - Potenciação (**)'));
}

let n1 = number(prompt('Insira o primeiro valor'));
let n2 = number(prompt('Insira o segundo valor'));
let resultado;

function soma() {
    resultado = n1 + n2;
    //definir com crase permite declarar strings e numeros
    alert(`${n1} + ${n2} = ${resultado}`)
}
function subtracao() {
    resultado = n1 - n2;
    alert(`${n1} - ${n2} = ${resultado}`)
}
function multiplicacao() {
    resultado = n1 * n2;
    alert(`${n1} * ${n2} = ${resultado}`)
}
function divisaoReal() {
    resultado = n1 / n2;
    alert(`${n1} / ${n2} = ${resultado}`)
}
function divisaoInt() {
    resultado = n1 % n2;
    alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
}
function potenciacao() {
    resultado = n1 ** n2;
    alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
}
if (operação === 1) {
    soma();
} else if (operação === 2) {
    subtracao();
} else if (operação === 3) {
    multiplicacao();
} else if (operação === 4) {
    divisaoReal();
} else if (operação === 5) {
    divisaoInt();
} else if (operação === 6) {
    potenciacao();
}
calculadora();