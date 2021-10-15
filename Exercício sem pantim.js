let pessoa = {
  nome: prompt('Qual seu nome?'),
  idade: prompt('Qual sua idade?'),
  carteira: prompt('Possui carteira de trabalho? \n*Responda com sim ou não \n**Tudo minúsculo'),
};

let maiorDeIdade;
let idadeVerifica = pessoa.idade >= 18 ? maiorDeIdade = pessoa.idade : maiorDeIdade = false;

let possuiCarteiraDeTrabalho;
let carteiraVerifica = pessoa.carteira == 'sim' ? possuiCarteiraDeTrabalho = true : possuiCarteiraDeTrabalho = false;

let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

let resultado = podeAplicar === true ? alert('O candidato ' + pessoa.nome + ' se aplica à vaga.') : alert('O candidato '+ pessoa.nome + ' não se aplica à vaga.') ;