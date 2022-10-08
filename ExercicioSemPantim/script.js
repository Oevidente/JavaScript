let recebeNum = window.prompt('Digite 5 números (separe-os por ,)'); //recebe os valores digitados pelo usuário.
let arrayNum = recebeNum.split(','); //separa os valores sempre que tiver uma vírgula

let tamanho = arrayNum.length; //recebe a quantidade de itens do array arrayNum

let listaNum = []; //variável que vai receber os valores convertidos em inteiros

for (let i = 0; i < tamanho; i++) {
  //para cada item do array ele vai executar o código abaixo
  listaNum.push(parseInt(arrayNum[i])); //adiciona o item convertido em inteiro do arrayNum na variável listaNum
}

let numImpar = []; //array que vai receber os números ímpares

for (let i = 0; i < tamanho; i++) {
  //para cada item do array listaNum ele executa o código abaixo
  if (listaNum[i] % 2 === 1) {
    //se o resto for 1 (ímpar)
    numImpar.push(listaNum[i]); //adicione ao array numImpar
  }
}

numImpar.sort(); //organiza de forma crescente

console.log(numImpar);

window.alert('Os números ímpares que você digitou são: ' + numImpar);
