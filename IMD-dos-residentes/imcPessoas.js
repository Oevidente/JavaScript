//Classe pessoa que serve como molde para a criação dos objetos "residente" no array listaResidentes
let contador = 0;
let totalRenda = 0;
let totalIMC = 0;
let totalIdade = 0;

class Pessoa {
  nome = prompt('Digite o nome:');
  idade = parseInt(prompt('Digite a idade:'));
  peso = parseFloat(prompt('Digite o peso:'));
  altura = parseFloat(prompt('Digite a altura:'));
  renda = parseFloat(prompt('Digite a renda:'));
}
let listaResidentes = []; //Lista que contém os residentes e seus dados

//função que cadastra os residentes e os adiciona à lista
function cadastrar() {
  listaResidentes.push(new Pessoa());
  adicionar();
}

//Pergunta ao usuário se ele deseja adicionar um novo residente
function adicionar(resposta) {
  ++contador; //incrementa antes de verificar o valor, ou seja, antes de ler o valor o programa adiciona 1.
  if (contador > 1) {
    resposta = prompt('Deseja cadastrar mais um residente?').toLowerCase(); //recebe a resposta e transforma em caixa baixa
  } else {
    resposta = prompt('Deseja cadastrar um residente?').toLowerCase();
    if (resposta == 'sim') {
      cadastrar();
    } else {
      alert('Até mais!');
    }
  }
}
adicionar();

//E adicione funções que calculem os seguintes dados: renda média por residente, IMC médio na residência e idade média dos residentes.

function rendaMedia() {
  listaResidentes.forEach(function (residente) {
    let renda = residente.renda;
    totalRenda += renda;
  });

  alert(
    `A média de renda na residência é: R$${
      totalRenda / listaResidentes.length
    }`,
  );
}
function imcMedio() {
  listaResidentes.forEach(function (residente) {
    let peso = residente.peso;
    let altura = residente.altura;
    let imc = peso / altura ** 2;
    totalIMC += imc;
  });

  alert(
    `A média do IMC na residência é:${(
      totalIMC / listaResidentes.length
    ).toFixed()}`,
  );
}
function idadeMedia() {
  listaResidentes.forEach(function (residente) {
    let idade = residente.idade;
    totalIdade += idade;
  });

  alert(
    `A média de idade na residência é: ${(
      totalIdade / listaResidentes.length
    ).toFixed()}`,
  );
}
rendaMedia();
imcMedio();
idadeMedia();
