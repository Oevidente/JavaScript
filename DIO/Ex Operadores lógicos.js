//Operadores lógicos
//Operador lógico (&&) | Retorna TRUE se  os dois operandos forem true

console.log(true && true); //Retorna true

//Exemplo: Uma pessoa só pode aplicar pra uma vaga se for maior de 18 anos e tiver carteira de trabalho
let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = true;
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

let resultado = podeAplicar === true ? console.log('O candidato se aplica à vaga.') : console.log('O candidato não se aplica à vaga.');