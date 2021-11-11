const alunesSemPantim = ['Carol', 'Alice', 'Bárbara', 'Bagagem', 'Gildo', 'André']

//Acessar infos num array
console.log(alunesSemPantim[3]);

//Operador spread (...) 
//copia todos os itens de um array sem alterar o original

const alunesGama = [...alunesSemPantim, 'Geórgia']
console.log(alunesGama);

//Métodos de iteração

for (let i = 0; i < alunesGama.length; i++) {
    console.log(alunesGama[i]);
}

const alunes = ['André', 'Gildo', 'Alice', 'Carol'];

alunes.map(alune => console.log(alune))

const numeros = [22, 19, 35, 47, 28, 70];

let numerosPares = numeros.filter(numero => numero%2 === 0)

let numerosImpares = numeros.filter(numero => numero%2 !== 0)

console.log(numerosPares)
console.log(numerosImpares)

const produtos = ['sofá', 'mesa', 'cama', 'mesinha de centro'];

let encontraProdutos = produtos.find(produto => produto === 'cama');
console.log(encontraProdutos);

let num = [1, 2, 3, 4, 5, 6];

let crescente = num.sort((a,b) => a-b);
let decrescente = num.sort((a,b) => b-a);

console.log(crescente)
console.log(decrescente)

const arraySoma = [1, 19, 20]
let soma = arraySoma.reduce((valor1, valor2) => valor1 + valor2)

console.log(soma)


