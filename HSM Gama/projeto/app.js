const livros = require('C:\\workspace\\JavaScript\\HSM Gama\\projeto\\database.js');

const readLine = require('readline-sync');

const entradaInicial = readLine.question('Deseja buscar um livro? \n S/N');//Se for sim, mostrar as categorias disponíveis, pergunta qual categoria escolhe

if (entradaInicial.toLocaleUpperCase() === 'S') { //transformar a entrada string em maiúscula e comparar se é igual a S
    console.log('Essas são as categorias disponíveis'); //Mostrar ao usuário as categorias disponíveis
    console.log('Produtividade', '/História brasileira', '/Americas', '/Tecnologia', '/Estilo de vida', '/Tecnologia');

    const entradaCategoria = readLine.question('Qual categoria voce escolhe:');//Pergunta ao usuário a categoria que ele quer ler

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);//filtra o array "livros" pelo atributo categoria e compara com a entrada do usuário

    console.table(retorno);//exibe a categoria escolhida
} else {
    const livrosOrdenados = livros.sort((a, b) => a.paginas - b.paginas);//Recebe o array "livros" ordenado pelo atributo páginas
    console.log('Essas são todas as categorias disponíveis');
    console.table(livrosOrdenados);//Exibe TODAS as categorias disponíveis
}

//Se não, mostra todos os livros em ordem crescente de páginas