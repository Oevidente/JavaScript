let produtos = [
    {
        id: 1,
        nome: 'Detergente Ypê lavanda',
        codBarras: 1000000000000,
        validade: new Date('Dec 19, 2021'),
        lote: 191,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 200,
        categoria: 'Limpeza'
    },
    {
        id: 2,
        nome: 'Água sanitária Brilux 5L',
        codBarras: 2000000000000,
        validade: new Date('Jan 19, 2022'),
        lote: 201,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (14.35).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 150,
        categoria: 'Limpeza'
    },
    {
        id: 3,
        nome: 'Pizza Grande Mussarela',
        codBarras: 3000000000000,
        validade: new Date('Nov 21, 2021'),
        lote: 19,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (17.99).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 20,
        categoria: 'Frios'
    },
    {
        id: 4,
        nome: 'Doritos',
        codBarras: 4000000000000,
        validade: new Date('Mar 21, 2022'),
        lote: 519,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (7.99).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 170,
        categoria: 'Lanches'
    },
    {
        id: 5,
        nome: 'Coca-Cola 2L',
        codBarras: 5000000000000,
        validade: new Date('Feb 18, 2022'),
        lote: 659,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (8.99).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 220,
        categoria: 'Refrigerantes'
    },
    {
        id: 6,
        nome: 'Queijo Coalho kg',
        codBarras: 6000000000000,
        validade: new Date('Dec 21, 2021'),
        lote: 300,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (24.89).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 50,
        categoria: 'Frios'
    },
    {
        id: 7,
        nome: 'Guaraná Antártica',
        codBarras: 7000000000000,
        validade: new Date('Jan 18, 2022'),
        lote: 1019,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (7.99).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
        quantidade: 190,
        categoria: 'Refrigerantes'
    },
    {
        id: 8,
        nome: 'Polpa de frutas',
        codBarras: 8000000000000,
        validade: new Date('Mar 19, 2022'),
        lote: 449,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (5.90).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        quantidade: 20,
        categoria: 'Frios'
    },
    {
        id: 9,
        nome: 'Fatia Pastelão de Frango',
        codBarras: 9000000000000,
        validade: new Date('Nov 30, 2021'),
        lote: 546,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (4.90).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        quantidade: 8,
        categoria: 'Lanches'
    },
    {
        id: 10,
        nome: 'Feijão Turquesa 1kg',
        codBarras: 1000000000001,
        validade: new Date('Dec 25, 2021'),
        lote: 411,
        //FAVOR ALTERAR APENAS OS NÚMEROS DENTRO DOS PARÊNTESES
        preco: (12.99).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}),
        quantidade: 90,
        categoria: 'Perecíveis'
    }
];
module.exports = produtos;