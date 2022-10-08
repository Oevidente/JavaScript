# Objetos

# O que são?

Dados que possuem **propriedades** e **valores** que definem suas características. Deve ser declarado entre chaves "**{}".**

Ex.: imagine uma xícara azul. Ela tem cor, pode ter vários tamanhos e funções (quero cafééé). Pode ser declarada assim:

```jsx
**let** xícara = {
	cor: 'azul',
	tamanho: 'p',
	função: tomarCafe(),
}
```

# Manipulando objetos

As propriedades de objetos podem ser atribuídas à variáveis, facilitando a manipulação do objeto. Chamamos isso de desestruturação.

```jsx
Ex.: 
let xícara = {cor: 'azul', tamanho: 'p', função: tomarCafe()}
let cor = xicara.cor;
let tamanho = xicara.tamanho;
let função = tomarCafe();
```

Outra forma de fazer a desestruturação é utilizando chaves ao declarar a variável:

```jsx
Ex.:
let xícara = {cor: 'azul', tamanho: 'p', função: tomarCafe()}
let {cor,tamanho,função} = xicara;
```

# Desestruturando objetos

A desestruturação permite chamar as propriedades individualmente sem a necessidade de colocar o nome do objeto com ponto.

### Declara-se o objeto

```jsx
let pessoa = {
nome: 'André',
idade: 25,
cidade: 'Recife',
}
```

### Como desestruturar

```jsx
let {nome, idade, cidade} = pessoa;
```