//criar um método para ler propriedades de um objeto e exibir somente as propriedades do tipo string que estão nesse objeto

//declara o objeto pessoa
const pessoa = {
    nome: 'André Luiz',
    sobrenome: 'Alves',
    idade: 24,
    emprego: 'Dev jr',
    endereço: 'Rua Rio Itororo, 225'
  };

//declara uma função que vai buscar as propriedades dentro do objeto e comparar essa propriedade a uma string 
exibirPropriedades(pessoa);
function exibirPropriedades(obj) {
  for (prop in obj)
    if (typeof obj[prop] === 'string') {
      console.log(prop+': ',obj[prop]);
    }
}