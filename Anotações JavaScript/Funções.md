# Funções

## São blocos de comandos e instruções para a execução de determinadas tarefas:

```jsx
function funcao() {
    console.log('Essa mensagem veio de uma função');
}

funcao();
```

## Como declarar?

Geralmente se utiliza a palavra reservada **“function”** seguida de parênteses **“()”** e chaves **“{}”**:

```jsx
function funcao() {
    console.log(“mensagem”);
}

funcao();
```

***() – indica que é um objeto do tipo function;
{} – indica que é um bloco de instrução;***

## Funções com parâmetros

As funções podem receber em sua declaração, parâmetros, que servem como variáveis, onde sua atribuição pode ser feita durante a chamada da função:

```jsx
function mensagem(primeiro,segundo) {
    console.log(primeiro, segundo);
}

mensagem('Tudo certo','jovem!');
```

## Funções declarativas

São funções que possuem o uso mais comum, deve ser declarada usando a palavra reservada **“function”** seguida do nome da função, parênteses **“()”** e chaves **“{}”**:

```jsx
// o nome da função é obrigatório;
function funcao() {
    console.log('Sou uma mensagem de uma função declarativa');
}
```

## Expressões de Funções

São funções atribuídas à expressões. 

A nomeação das funções por expressão é opcional:

```jsx
let funcao = function funcao() {

    console.log('Sou uma mensagem de função de expressão!');
}
// OU 
let funcao = function () {

    console.log('Sou uma mensagem de função de expressão!');
};
```

## Arrow Function

São funções de expressão de sintaxe curta. Arrow functions sempre serão anônimas, e devem ser declaradas como variáveis.
deve ser declarada com parênteses "()", seguido de "=>" e depois chaves "{}"

```jsx
let funcao = () => {
    console.log('Sou uma arrow function!');
}
```

O que vem depois da seta é um `return`.
Quando há apenas um parâmetro, não se faz necessário o uso de parênteses.

```jsx
let digaOla = nome => `Olá ${nome}`;
console.log(digaOla(André)); => 'Olá André'
```

# Exercício:

## Funções aritméticas

### Criando uma calculadora

Para este exercício vamos utilizar alguns métodos nativos do JavaScript:

- Number() – para converter valores em números;
- Prompt() – para registrar entradas de usuário;
- Alert() – para mostrar mensagem ao usuário;
- Template Strings – para usar strings junto com expressões;

```jsx
//Resolução

function calculadora() {  const operacao = Number(prompt(`Escolha uma operação:
1 - Soma (+)
2 - Subtração (-)
3 - Multiplicação (*)
4 - Divisão real (/)
5 - Divisão inteira (%)
6 - Potenciação (**)`));

    if (!operacao || operacao >= 7) {
        alert('Erro - Operação inválida!');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if (!n1 || !n2) {
            alert('Erro - Parâmetros inválidos!');
            calculadora();
        } else {
            function soma() {
                resultado = n1 + n2;
                //definir com crase permite declarar strings e numeros
                alert(`${n1} + ${n2} = ${resultado}`)
                novaOperacao();

            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao();

            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao();

            }
            function divisaoReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao();

            }
            function divisaoInt() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao();

            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`)
                novaOperacao();
            }
            function novaOperacao() {
                let opcao = Number(prompt('Deseja fazer outra operaçao?\n 1 - Sim\n 2 -Não'));

                if (opcao === 1) {
                    calculadora();
                } else if (opcao === 2) {
                    alert('Até mais!');
                } else {
                    alert('Digite uma opção válida!');
                    novaOperacao();
                }
            }
        }

        // if (operacao === 1) {
        //     soma();
        // } else if (operacao === 2) {
        //     subtracao();
        // } else if (operacao === 3) {
        //     multiplicacao();
        // } else if (operacao === 4) {
        //     divisaoReal();
        // } else if (operacao === 5) {
        //     divisaoInt();
        // } else if (operacao === 6) {
        //     potenciacao();
        // }
        switch (operacao) {
            case 1:
                soma();
                break;
            case 2:
                subtracao();
                break;
            case 3:
                multiplicacao();
                break;
            case 4:
                divisaoReal();
                break;
            case 5:
                divisaoInt();
                break;
            case 6:
                potenciacao();
                break;
        }
    }
}
calculadora();
```