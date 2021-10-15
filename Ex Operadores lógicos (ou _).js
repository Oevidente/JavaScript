//Operador lógico ou (||) | Retorna TRUE se um dos operandos for true

let maiorDeIdade = true;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

let resultado = podeAplicar === true ? console.log('O candidato se aplica à vaga.') : console.log('O candidato não se aplica à vaga.');