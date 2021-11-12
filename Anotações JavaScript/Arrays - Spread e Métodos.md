# Arrays - Spread e Métodos

# Spread

Copia todos os itens de um array sem alterar o original

```jsx
const alunesSemPantim = ['Carol', 'Alice', 'Bárbara', 'Bagagem', 'Gildo', 'André'];

const alunesGama = [...alunesSemPantim, 'Geórgia']
console.log(alunesGama); => ['Carol', 'Alice', 'Bárbara', 'Bagagem', 'Gildo', 'André', 'Geórgia']
```

# Métodos de Iteração

## forEach

```jsx
alunesGama.forEach(function(item){console.log(item)});
```

## for

```jsx
for (let i = 0; i < alunesGama.length; i++) {
    console.log(alunesGama[i]);
}
```

## .map

Retorna um novo array sem alterar o array original. Criando uma cópia com as alterações que desejamos.

```jsx
alunes.map(alune => console.log(alune))
```

## .filter

Retorna um novo array com os elementos filtrados.

```jsx
const numeros = [22, 19, 35, 47, 28, 70];

let numerosPares = numeros.filter(numero => numero%2 === 0)

let numerosImpares = numeros.filter(numero => numero%2 !== 0)
```

## .find

Encontra e retorna o primeiro elemento que achar igual ao elemento passado no parâmetro.

```jsx
const produtos = ['sofá', 'mesa', 'cama', 'mesinha de centro'];

let encontraProdutos = produtos.find(produto => produto === 'cama');
```

## .sort

Ordena os itens de um array.

Espera recerber uma arrow function.

Caso não receba, por padrão ele ordena a lista do menor para o maior.

```jsx
let num = [1, 2, 3, 4, 5, 6];

let crescente = num.sort((a,b) => a-b);
let decrescente = num.sort((a,b) => b-a);
```

## .reduce

Reduz um array a um resultado de uma operação matemática

```jsx
const arraySoma = [1, 19, 20]
let soma = arraySoma.reduce((valor1, valor2) => valor1 + valor2)
```