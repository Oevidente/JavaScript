//Objeto endereço

// Criar um objeto endereço que contem:
// Rua
// Cidade
// CEP
//exibirEndereco(endereco)

let endereco = {
    rua: prompt('Digite a rua:'),
    num: prompt('Qual o número da casa?'),
    bairro: prompt('Digite o bairro:'),
    cidade: prompt('Digite a cidade:'),
    estado: prompt('Diga qual é o Estado:'),
    CEP: prompt('Digite o CEP:'),
}
function exibirEndereco(endereco) {
    alert(`O endereço é ${endereco.rua} - ${endereco.num}, ${endereco.bairro}, ${endereco.cidade} - ${endereco.estado} | ${endereco.CEP}`);
}

exibirEndereco(endereco);