//Crie um código que imprima a contagem de 0 até um número colocado pelo usuário, imprimindo apenas números ímpares.
let num = parseInt(prompt('Digite um número: '));
//Recebe o valor digitado pelo usuário e transforma em inteiro (lembrando que qualquer valor digitado no prompt ou no html é uma String)

let a = 0;
while (a <= num) {
  if (a % 2 != 0) {
    console.log(a);
  }
  a++;
}
