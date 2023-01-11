let carrinho = [
  {
    produto: 'sabao',
    quantidade: 1,
    preco: 14,
  },
  {
    produto: 'sabao em pó',
    quantidade: 6,
    preco: 3.69,
  },
  {
    produto: 'arroz',
    quantidade: 2,
    preco: 4.59,
  },
];
const checkout = carrinho.map(function (produto) {
  return {
    produto: produto.produto,
    preco: produto.preco * produto.quantidade,
  };
});

console.log(checkout);

const totalCompra = checkout.reduce((soma, prod) => {
  return soma + prod.preco;
}, 0);

console.log(totalCompra);
