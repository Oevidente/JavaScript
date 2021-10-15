//Operador lógico NOT (!) | Retorna true se os valores forem FALSE.

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;
let candidatoRecusado = !podeAplicar;

//Retornar true pois todos os valores são false, ele atesta uma negação
console.log('Não aplicável?', candidatoRecusado); 

let resultado = podeAplicar === true ? console.log('O candidato se aplica à vaga.') : console.log('O candidato não se aplica à vaga.');