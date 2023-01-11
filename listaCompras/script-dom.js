let carrinho = []; //productList
let listaUl = document.querySelector('.listaProdutos');
let totalUl = document.querySelector('.totalProdutos');

const removeButton = document.getElementById('removerProduto');
const productNameField = document.getElementById('productNameField');
let totalCompra = 0;

function listaETotal() {
  const item = document.querySelector('.input-produto').value; //product
  const preco = parseInt(document.querySelector('.input-quantidade').value);
  const quantidade = parseFloat(document.querySelector('.input-preco').value);

  //cria um novo objeto com nome do produto e preço
  /* newProduct */
  let novoProduto = {
    produto: item,
    preco: preco * quantidade,
  };
  // add um produto ao array de produtos
  carrinho.push(novoProduto);

  // cria um novo li
  const li = document.createElement('li');

  // Adiciona o nome do elemento
  li.textContent = `Produto: ${novoProduto.produto} | Total: R$${novoProduto.preco}`;

  // append the li element to the ul
  listaUl.appendChild(li);
  // create a button element
  const btn = document.createElement('button');
  // Adiciona o nome do elemento
  btn.textContent = 'Remover produto';
  btn.classList.add('remove-button');
  btn.setAttribute('produto', carrinho.produto);
  btn.addEventListener('click', removerProduto);
  // append the btn element
  li.appendChild(btn);
  console.log(carrinho);
}

// Função para remover um produto do array e da lista ul
const removerProduto = (event) => {
  // Obtém a li do botão que foi clicado
  const li = event.target.parentNode;
  // Obtém o texto do li
  const textoProduto = li.innerText;

  // Remove o botão de "remover" do texto
  const indoProduto = textoProduto.replace('Remover', '');

  // split o texto para pegar o nome do produto
  const produto = indoProduto.split('-')[0].trim();

  // procura o índice do produto no array
  const indexProduto = carrinho.findIndex((p) => p.produto === produto);

  // Remove o produto do array usando o splice
  carrinho.splice(indexProduto, 1);
  console.log(carrinho);
  // Remove a li da ul
  li.remove();

  totalCompra = 0;
};

function totalCompras() {
  totalCompra = carrinho.reduce((soma, prod) => {
    return soma + prod.preco;
  }, 0);

  const li = document.querySelector('.total');
  // Adiciona o nome do elemento
  li.textContent = `Total: ${totalCompra}`;

  console.log(totalCompra);
}
