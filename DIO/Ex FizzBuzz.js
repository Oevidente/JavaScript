//FizzBuzz compara os valores e dá um retorno baseado no valor de entrada
//Divisível por 3 >> fizz
//Divisível por 5 >> buzz
//Divisível por 3 e 5 >> fizzbuzz
//Não divisível por 3 ou 5 >> entrada
//NaN >> 'Nao é um número'
const resultado = fizzBuzz(1);
console.log(resultado);

function fizzBuzz(entrada){
  if(typeof entrada !== 'number')
  return 'Não é um número';
  
  if((entrada % 3 === 0) && (entrada % 5 === 0))
  return'FizzBuzz';
  
  if(entrada % 3 === 0)
  return 'fizz';
  
  if(entrada % 5 === 0)
  return 'buzz';
  
  return entrada;
}