//Operadores aritiméticos
let salário = 100;

// +, -, *, /, **

console.log(salário + salário);
console.log(salário - salário);
console.log(salário * salário);
console.log(salário / salário);
console.log(5 ** 5);

//Operadores de incremento e decremento
//++ e --

let idade = 18;
// ++ ou -- antes para exibir de imediato o valor incrementado ou decrementado
console.log(++idade);
// console.log(idade++) exibe o valor atual, o incremento só será exibido caso haja um próximo console.log

//ele vai exibir 18 novamente pois já havia sido incrementado 1
console.log(--idade);

//decremente novamente para exibir o valor 17
//console.log(--idade);

// Exemplo de um laço de repetição de incremento, enquanto idade for menor que 30 incremente 1
idade = 0;
do{
  idade++;
  console.log(idade)
} while(idade < 30);