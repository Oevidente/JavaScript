# Tipos de Strings

## Tipo primitivo

```jsx
**const Mensagem = 'Minha primeira mensagem',
console.log(Mensagem);**
```

## Tipo objeto

```jsx
**const outraMensagem = new String('Bom Dia');
console.log(outraMensagem);**
```

## Manipulando Strings

- typeof - exibe o tipo do valor
  
    ```jsx
    **console.log(typeof Mensagem);**
    ```
    
- lenght - exibe o tamanho da string
  
    ```jsx
    **console.log(Mensagem.length);**
    ```
    
- [2] - exibe o terceiro item da string
  
    ```jsx
    **console.log(Mensagem[2]);**
    ```
    
- includes - Verifica se a string tem a palavra fornecida
  
    ```jsx
    **console.log(Mensagem.includes('primeira'));**
    ```
    
- startsWith - Verifica se a string inicia com a palavra fornecida
  
    ```jsx
    **console.log(Mensagem.startsWith('Minha'));**
    ```
    
- endsWith - Verifica se a string termina com a palavra fornecida
  
    ```jsx
    **console.log(Mensagem.endsWith('mensagem'));**
    ```
    
- indexOf - Verifica onde aquela palavra inicia
  
    ```jsx
    **console.log(Mensagem.indexOf('Minha'));**
    ```
    
- Replace - substitui uma palavra por outra declarada
  
    ```jsx
    **console.log(Mensagem.replace('Minha','Sua'));**
    ```
    
- Trim - tira os espaços excedentes
  
    ```jsx
    **console.log(Mensagem.trim());**
    ```
    
- split - corta o texto sempre que encontra o valor definifo
  
    ```jsx
    **console.log(Mensagem.split(' '));**
    ```
    
- `toString()` - transforma em string
- `toUpperCase()` - Transforma todas as letras em maiúsculas
- `toLowerCase()` - transforma todas as letras em minúsculas
- `document.write()` - Escreve no corpo do documento HTML
- `document.writeLn()` - Escreve uma linha no corpo do documento
- `replace(' ', ' ')` - substitue um caracter por outro definido
- `toLocaleString('pt-BR',  {style: 'currency', currency: 'BRL'})` - exibe o texto em padrão monetário