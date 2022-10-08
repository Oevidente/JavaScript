# Importando códigos e recebendo inputs NPM

Usa-se `**require('')`** para importar os dados de um arquivo.

Ex.:

### No arquivo a ser importado escreva:

```jsx
let variávelX = {}

**module.exports = variávelX**
```

### No arquivo que vai receber esse export escreva:

```jsx
const recebeVariavelX = require('./nomeDoArquivo')
```

Para receber um input deve-se criar uma constante pare receber o valor.
E nela utilizar o `**require('')`** passando o nome da biblioteca utilizada no **json**.

Ex.:

```jsx
const readLine = require('readLine-sync')
```

# Trabalhando com inputs e questions

Similar ao prompt que retorna o valor digitado pelo usuário, o question serve para receber esse valor via terminal.
Ex.:

```jsx
const entradaInicial = readLine.question('Deseja buscar um livro? \n S/N');//Se for sim, mostrar as categorias disponíveis, pergunta qual categoria escolhe
```