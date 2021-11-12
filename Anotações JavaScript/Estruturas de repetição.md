# Estruturas de repetição

## São estruturas condicionais que repetem uma instrução até atingir determinada condição:

- For;
- For/in;
- For/of;
- While;
- Do/while;

# For

### Funciona como uma repetição de instrução até que a condição seja falsa:

```jsx
for([expressãoInicial];[condição];[incremento]){
    declaração}
//Ex.: 
let array = ['valor', 'valor2', 'valor3', 'valor4', 'valor5']

let object = {
    propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3', propriedade4: 'valor4', propriedade5: 'valor5'
}
//dor executa uma instrução até que ela seja falsa
for (let indice = 0; indice < array.length; indice++) {
    console.log(indice);
}
```

# For/in

### For/in executa repetição a partir de uma propriedade:

```jsx
// for/in com array
for (let i in array) {
    console.log(i);
}
// for/in com object
for (i in object) {
    console.log(i);
}
```

# For/of

### Funciona como uma repetição a partir de um valor:

```jsx
// for/of com array
for (i of array) {
    console.log(i);
}
```

### O **For/of** não funciona com objetos por as propriedades variam, diferentes do índice em um array que sempre serão números inteiros.

### Mas e se eu quiser pegar o valor mesmo assim?

```jsx
// for/of com object
for (i of object.propriedade1) {
    console.log(i);
}
//porém cada caractere dentro do valor será impresso em linhas separadas.
```

# While

## Executa uma instrução “enquanto” determinada condição for
verdadeira, a verificação é feita antes da execução.

```jsx
let a = 0;
while (a < 10) {
a++;
console.log(a);
}
// como ler: enquanto a variável a for menor que 10 ela vai receber mais um e imprimir no console.
```

# Do/while

## Executa uma instrução “até que” determinada condição seja falsa,
a verificação é feita depois da execução.

```jsx
let a = 0;
do {
a++;
console.log(a);
} while (a < 10)

// como ler: a variável a vai receber mais um e imprimir no console até que seu valor chegue a 10
```