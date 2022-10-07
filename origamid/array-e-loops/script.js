/* 
ARRAY

É um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável.
*/

let videoGames = ['Switch', 'PS5', 'Xbox'];

console.log(videoGames[0]);
console.log(videoGames[2]);

//Acesse um elemento da array utilizando [n]
/* ------------------------------------------------------ */

//MÉTODOS E PROPRIEDADES DE UMA ARRAY
videoGames.pop(); //Remove o último item e retorna o array
console.log(videoGames);
videoGames.push('Steam Deck'); //Adiciona ao final do array
console.log(videoGames);
console.log(videoGames.length);
/* 
Existem diversos outros métodos,
como map, reduce, forEach e
mais que veremos mais à frente
*/

/* ------------------------------------------------------ */

//FOR LOOP
//Fazem algo repetidamente até que uma condição seja atingida.

for (let num = 0; num < 10; num++) {
  /* enquanto num menor que 10 execute o código e ao final incremente num */
  console.log(num);
  //Retorna de 0 a 9 no console
}

/* O for loop possui 3 partes,
início, condição, e incremento */

/* ------------------------------------------------------ */
