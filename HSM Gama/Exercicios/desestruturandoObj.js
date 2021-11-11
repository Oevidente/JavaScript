const filmes = [
    {
        id: 1,
        titulo: 'Toy Story',
        descricao: 'Uns brinquedos muito loucos se mentendo em altas confusoes',
        duracao: 120
    },
    {
        id: 2,
        titulo: 'Megamente',
        descricao: 'E se seu amigo cabecudo tivesse poderes?',
        duracao: 140
    },
    {
        id: 3,
        titulo: 'Shrek',
        descricao: 'Somebody once told me…!!!',
        duracao: 130
    }
]

//Desestruturando

let [{id, titulo, descricao, duracao}] = filmes;

filmes.map(filme => console.log(filme.descricao))