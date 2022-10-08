let residentes = [];
let quantResidentes = parseInt(
  window.prompt('Quantas pessoas residem no domicílio?'),
);
let i = 1;
while (i <= quantResidentes) {
  i++;
  residentes.push({
    nome: window.prompt('Digite o nome:'),
    idade: parseInt(window.prompt('Digite a idade:')),
    peso: parseFloat(window.prompt('Digite o peso:')),
    altura: parseFloat(window.prompt('Digite a altura:')),
    renda: parseFloat(window.prompt('Digite a renda:')),
  });
}
//console.log(residentes[0].nome);

//renda média

function rendaMedia(renda) {}

//IMC médio

//idade média
