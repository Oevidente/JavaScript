//As chaves dentro do objeto pessoa vão receber os valores dados pelo usuário através de uma série de pop-ups
let pessoa = {
  nome: prompt('Qual seu nome?'),
  idade: prompt('Qual sua idade?'),
  carteira: prompt('Possui carteira de trabalho? \n*Responda com sim ou não \n**Tudo minúsculo'),
};

//Declaramos a variavel para que ela receba um valor futuramente
let maiorDeIdade;

//A variavel a seguir vai verificar se a idade do candidato é maior ou igual a 18
//Se sim, a variável maiorDeIdade recebe o valor declarado pelo usuário, caso contrário ela recebe false
let idadeVerifica = pessoa.idade >= 18 ? maiorDeIdade = pessoa.idade : maiorDeIdade = false;

//Mesmo esquema, declaramos a variavel para receber o valor futuramente
let possuiCarteiraDeTrabalho;

//A variavel a seguir vai verificar se o candidato possui ou não carteira de trabalho
//Se sim, a variável possuiCarteiraDeTrabalho recebe o valor true, caso contrário ela recebe false
let carteiraVerifica = pessoa.carteira == 'sim' ? possuiCarteiraDeTrabalho = true : possuiCarteiraDeTrabalho = false;

//Se compara os valores usando o operador lógico &&
let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

//Se o valor de podeAplicar for true, é emitido um alerta com o nome e a mensagem que o candidato se aplica à vaga, caso contrário emite-se outro alerta com seu nome, dizendo que ele não se aplica 
let resultado = podeAplicar === true ? alert('O candidato ' + pessoa.nome + ' se aplica à vaga.') : alert('O candidato '+ pessoa.nome + ' não se aplica à vaga.') ;

if(carteiraVerifica === false){
  alert('Não possui Carteira de Trabalho');
}

if(idadeVerifica === false){
  alert('Não possui idade suficiente');
}