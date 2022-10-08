let produto;
let quantidade;
let index; //posição do produto na lista
let preco;
let section = document.getElementById('section'); //section do html
let listaProdutos = [
  (produto01 = {
    nome: 'laranja',
    preco: 10,
    codigo: 01,
  }),
  (produto02 = {
    nome: 'banana',
    preco: 20,
    codigo: 02,
  }),
  (produto03 = {
    nome: 'maçã',
    preco: 15,
    codigo: 03,
  }),
  (produto04 = {
    nome: 'detergente',
    preco: 8,
    codigo: 04,
  }),
  (produto05 = {
    nome: 'frango',
    preco: 19,
    codigo: 05,
  }),
  (produto06 = {
    nome: 'carne',
    preco: 25,
    codigo: 06,
  }),
  (produto07 = {
    nome: 'polpa',
    preco: 6,
    codigo: 07,
  }),
  (produto08 = {
    nome: 'queijo',
    preco: 35,
    codigo: 08,
  }),
  (produto09 = {
    nome: 'manteiga',
    preco: 17,
    codigo: 09,
  }),
  (produto10 = {
    nome: 'café',
    preco: 5,
    codigo: 10,
  }),
]; //llista de produtos
let total = 0; //valor total da compra

//--------------------------------------------------------------------------
function esolherProduto() {
  /*eu preciso de uma maneira de "salvar" o texto que o usuário digitou,
  no caso, vou atribuir esse valor convertido em inteiro à uma variável
  chamada produto, pra ser usado depois.*/
  produto = parseInt(
    window.prompt('Qual produto deseja comprar? Digite o código.'),
  );
  quantidade = parseInt(window.prompt('Quanto desse produto deseja comprar? '));

  //Encontrar produto no array (retorna o indice)
  index = listaProdutos.findIndex(
    (listaProdutos) => listaProdutos.codigo == produto,
  );
  //recebe o preço do produto encontrado
  preco = listaProdutos[index].preco;
}

//--------------------------------------------------------------------------

//Crio uma função chamada comprar.
function subtotal() {
  esolherProduto();
  //subtotal é equivalente à quantidade de produtos * seu valor
  subtot = preco * quantidade;

  //retorna o valor do subtotal e incrementa (soma) ao valor da variável total.
  return (total += subtot);
}
function retronarSubtotal() {
  //informar o subtotal do valor.
  console.log(
    'Produto: ' +
      listaProdutos[index].nome +
      '\n Subtotal: R$' +
      subtot +
      ',00',
  );
  window.alert(
    'Produto: ' + listaProdutos[index].nome + '\nSubtotal: R$' + subtot + ',00',
  );
  section.innerHTML += `<p>
  Produtos: ${listaProdutos[index].nome} <br>Subtotal: R$${subtot},00 <br>Quantidade: ${quantidade}
  </p>`;

  prosseguir();

  function prosseguir() {
    resposta = window.prompt('Deseja comprar mais?');

    //Perguntar se quer comprar mais algo, se quiser eu chamo novamente a função comprar.
    if (resposta == 'sim') {
      subtotal();
      retronarSubtotal();
    } else {
      //Caso não queira continuar eu encerro a função e exibo o valor total.
      console.log(total);
      section.innerHTML += `<p>
      Total: R$${total},00
      </p>`;
    }
  }
}

//--------------------------------------------------------------------------
subtotal();
retronarSubtotal();
