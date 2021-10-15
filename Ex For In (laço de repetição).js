//For… in 
//Feito para iterar sobre propriedades de um objeto ou array
const pessoa = {
  nome: 'André',
  idade: 24
};
//Busca a informação dentro de PESSOA
//key--value | chave nome, valor André
for(let chave in pessoa) {
  console.log(chave, pessoa.nome);
}

const cores = ['vermelho', 'azul', 'verde'];

for(let indice in cores) {
  console.log(cores[indice]);
}