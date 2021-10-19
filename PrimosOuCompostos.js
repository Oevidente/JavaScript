//Criar função para mostrar os números primos

//Primos são inteiros divisíveis por 1 ou eles mesmos
//Composto é qualquer número que pode ser escrito como resultado da multiplicação entre números primos.

//Ex: 10, 11
//10 não é primo pois pode ser dividido por 1, 2, 5 ou 10
//11 é primo pos só pode ser dividido por 1 e 11
exibirNumPrimos(15);

function exibirNumPrimos(limite) {
    for (let numero = 2; numero <= limite; numero++) {
        if (numPrimo(numero)) console.log(numero);
    }
}

function numPrimo(numero){
    //começa com dois para descartar o num 1 e o próprio numero pos todo ele será dividido por 1 e por ele mesmo
    for (let divisor = 2; divisor < numero; divisor++) {
        //Se a expressão resultar em 0 o número não é prim
        if (numero % divisor === 0) {
            return false;
        }
        return true;
    }
}