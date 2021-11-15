let produtos = require('./database');

const readLine = require('readline-sync');

estoque();

function estoque() {
    let entradaInicial = readLine.question('Deseja buscar algum produto por categoria?\nS/N\n');

    if (entradaInicial.toLocaleLowerCase() === 's') {
        console.log('Essas são as categorias disponíveis:');
        console.log('Limpeza\nFrios\nLanches\nRefrigerantes\nPerecíveis\n');

        let entradaCategoria = readLine.question('Qual categoria deseja procurar?\n');

        const retorno = produtos.filter(produto => produto.categoria === entradaCategoria);

        console.table(retorno);
        repeteBusca();
    } else {
        let produtosOrdenados = produtos.sort((a, b) => a.id - b.id);
        console.log('Essas são as categorias disponíveis');
        console.table(produtosOrdenados);
        repeteBusca();
    }
}
function repeteBusca() {
    let pergunta = readLine.question('Repetir programa de busca?\nS/N\n')
    if (pergunta.toLocaleLowerCase() === 's') {
        estoque();
    } else {
        return;
    }
}
function Desconto() {
    let perguntaDesconto = readLine.question('Quer aplicar um desconto?\nS/N\n');

    if (perguntaDesconto.toLocaleLowerCase() === 's') {
        let qualDesconto = Number(readLine.question('Quantos porcento de desconto?\n'));
        let idProduto = Number(readLine.question('Qual a id do produto?\n'));

        let produtoDesconto = produtos.filter(produto => produto.id === idProduto);
        idProduto -= 1;

        let valorFinalDesconto = Number(produtoDesconto[0].preco.replace(',', '.').slice(2, 10)) - ((Number(produtoDesconto[0].preco.replace(',', '.').slice(2, 10)) / 100) * qualDesconto);

        console.log(valorFinalDesconto.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }));
    } else {

    }

    repeteDesconto();
}
Desconto();
function repeteDesconto() {
    let pergunta = readLine.question('Repetir programa de desconto?\nS/N\n')
    if (pergunta.toLocaleLowerCase() === 's') {
        estoque();
    } else {
        return;
    }
}