/*Crie um código que imprima para o usuário a tabuada de certo número. 
Preferencialmente trabalhe com uma caixa de input e um botão na sua página. */
let num = 0;
let input = document.querySelector('#numero'); num = parseInt(input.value);
console.log(num);
function tabuada() {
  console.log(`
  ${num * 1}
  ${num * 2}
  ${num * 3}
  ${num * 4}
  ${num * 5}
  ${num * 6}
  ${num * 7}
  ${num * 8}
  ${num * 9}
  ${num * 10}
  `);
}
