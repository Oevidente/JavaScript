let input = require('fs').readFileSync('dev/stdin', 'utf8');
let lines = input.split('\n');
//Leia dois valores inteiros (ex: 5) e armazene-os nas variáveis A e B.

let A = lines.shift();
let B = lines.shift();

//Efetue a soma de A e B atribuindo o resultado na variável X.

let X = A + B;

/*Imprima X conforme exemplo apresentado abaixo

Ex:
X = 10
*/

console.log('X = ' + X);
