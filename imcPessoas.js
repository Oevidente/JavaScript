//Classe pessoa que serve como molde para a criação dos objetos "residente" no array listaResidentes
let contador = 0;
let mediaR = 0;
let mediaIMC = 0;
let mediaIdade = 0;

class pessoa {
  nome = prompt('Digite o nome:');
  idade = parseInt(prompt('Digite a idade:'));
  peso = parseFloat(prompt('Digite o peso:'));
  altura = parseFloat(prompt('Digite a altura:'));
  renda = parseFloat(prompt('Digite a renda:'));
}
let listaResidentes = []; //Lista que contém os residentes e seus dados

//função que cadastra os residentes e os adiciona à lista
function cadastrar() {
  listaResidentes.push(new pessoa());
  adicionar();
}

//Pergunta ao usuário se ele deseja adicionar um novo residente
function adicionar(resposta) {
  ++contador;
  if (contador > 1) {
    resposta = prompt('Deseja cadastrar mais um residente?');
  } else {
    resposta = prompt('Deseja cadastrar um residente?');
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
    mediaR += renda;
  });

  alert(
    `A média de renda na residência é: R$${mediaR / listaResidentes.length}`,
  );
}
function imcMedio() {
  listaResidentes.forEach(function (residente) {
    let peso = residente.peso;
    let altura = residente.altura;
    let imc = peso / altura ** 2;
    mediaIMC += imc;
  });

  alert(
    `A média do IMC na residência é:${(
      mediaIMC / listaResidentes.length
    ).toFixed()}`,
  );
}
function idadeMedia() {
  listaResidentes.forEach(function (residente) {
    let idade = residente.idade;
    mediaIdade += idade;
  });

  alert(
    `A média de idade na residência é: ${(
      mediaIdade / listaResidentes.length
    ).toFixed()}`,
  );
}
rendaMedia();
imcMedio();
idadeMedia();
