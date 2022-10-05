let input = require('fs').readFileSync('dev/stdin', 'utf8');
let lines = input.split('\n');
let [idadeMonica, idadeFilho1, idadeFilho2] = lines
  .shift()
  .trim()
  .split(' ')
  .map((x) => parseInt(x));

let idadeFilhos = [idadeMonica, idadeFilho1, idadeFilho2]; //lista com as idades dos filhos de Dona Mônica e ela mesma

let idadeFilho3 = idadeMonica - idadeFilho1 - idadeFilho2;
idadeFilhos.push(idadeFilho3);
idadeFilhos.sort(function (a, b) {
  return a - b;
}); //ordena do menor para o maior
idadeFilhos.reverse(); //reverte a ordem
idadeFilhos.shift(); //remove primeiro item

console.log(idadeFilhos[0]);
