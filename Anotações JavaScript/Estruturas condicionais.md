# Estruturas condicionais

## São instruções para realizar determinadas tarefas a partir de uma condição, seja de decisão ou repetição.

### Ex.: Um jogo precisa mudar o placar toda vez que um jogador marca ponto.

Podemos usar as palavras reservadas "if" para estabelecer uma condição:

```jsx
//Ex.:  
let jogador1 = 1;
let jogador2 = 0;
let placar;
//Como ler: se o jogador1 tiver valor maior que 0, ele marcou ponto.
//Estabelecendo com operadores ternários
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são válidos') :
console.log('Jogadores Inválidos');
//usando if
if (jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto');
    placar = jogador2 > jogador1;
}
//Usando else
else {
    console.log('ninguem marcou ponto');
}
```

# Usando switch/case

O "switch/case" funciona como uma estrutura condicional também.

```jsx
switch (placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhou!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhou!');
        break;
    default:
        console.log('Ninguém ganhou.');
}
```