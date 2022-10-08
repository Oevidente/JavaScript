//Classe pessoa que serve como molde para a criação dos objetos "residente" no array listaResidentes

let totalRenda = 0;
let mediaRenda = 0;
let totalIMC = 0;
let mediaIMC = 0;
let totalIdade = 0;
let mediaIdade = 0;
const section = document.querySelector('.section');

class Pessoa {
  nome = document.querySelector('#nomeIn').value;
  idade = parseInt(document.querySelector('#idadeIn').value);
  peso = parseFloat(document.querySelector('#pesoIn').value);
  altura = parseFloat(document.querySelector('#alturaIn').value);
  renda = parseFloat(document.querySelector('#rendaIn').value);
}
const listaResidentes = []; //Lista que contém os residentes e seus dados
if (section.innerText === '') {
  document.querySelector('.section').classList.add('invisivel');
}
//função que cadastra os residentes e os adiciona à lista
function cadastrar() {
  listaResidentes.push(new Pessoa());
  alert(`Residente adicionado com sucesso!`);
  console.log(listaResidentes);
}
function calcular() {
  rendaMedia();
  imcMedio();
  idadeMedia();
}
//Pergunta ao usuário se ele deseja adicionar um novo residente

//E adicione funções que calculem os seguintes dados: renda média por residente, IMC médio na residência e idade média dos residentes.

function rendaMedia() {
  listaResidentes.forEach(function (residente) {
    let renda = residente.renda;
    totalRenda += renda;
    console.log(totalRenda);
  });

  document.querySelector('.section').classList.remove('invisivel');
  section.innerHTML = `<div> <h5>Renda Média</h5>
    <p>A média de renda na residência é: <strong>${
      totalRenda / listaResidentes.length
    }</strong> </p> </div> `;
}
function imcMedio() {
  listaResidentes.forEach(function (residente) {
    let peso = residente.peso;
    let altura = residente.altura;
    let imc = peso / altura ** 2;
    totalIMC += imc;
    console.log(totalIMC);
  });
  if (section.innerHTML.includes(`<h5>Renda Média</h5>`) == true) {
    section.innerHTML += `<div>  <h5>IMC Médio</h5>
    <p>A média do IMC na residência é: <strong>${(
      totalIMC / listaResidentes.length
    ).toFixed()}</strong> </p> </div>`;
  }
}
function idadeMedia() {
  listaResidentes.forEach(function (residente) {
    let idade = residente.idade;
    totalIdade += idade;
    console.log(totalIdade);
  });
  if (section.innerHTML.includes(`<h5>Renda Média</h5>`) == true) {
    section.innerHTML += `<div>  <h5>Idade Média</h5>
    <p>A média de idade na residência é: <strong>${(
      totalIdade / listaResidentes.length
    ).toFixed()}</strong> </p> </div>`;
  }
}
