//Crie uma função que ixibe a quantidade de * que aquela linha possui
exibirAsteristicos(10);
function exibirAsteristicos(linhas) {
    //enquanto linha (1) for menor ou igual ao parâmetro linhas, padrão recebe string vazia, 
    //e enquanto i for menor que linha (1) padrão recebe "*", exibe o o valor de padrão, i recebe mais 1, linha recebe mais 1
    for(linha = 1; linha <= linhas; linha++){
        let padrão = '';
        for(let i = 0; i < linha;  i++){
            padrão += '*';
        }
        console.log(padrão);
    }
}