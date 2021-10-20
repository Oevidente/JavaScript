# Tipos de Strings

### Tipo primitivo

** <p style="color:red">**const**</p> **Mensagem = 'Minha primeira mensagem';**

**console.log(Mensagem);**

### Tipo objeto

**const outraMensagem = new String('Bom Dia');**

**console.log(outraMensagem);**



### typeof - exibe o tipo do valor

**console.log(typeof Mensagem);**



### lenght - exibe o tamanho da string

console.log(Mensagem.length);



### [2] - exibe o terceiro item da string

**console.log(Mensagem[2]);**



### includes - Verifica se a string tem a palavra fornecida

**console.log(Mensagem.includes('primeira'));**



### startsWith - Verifica se a string inicia com a palavra fornecida

**console.log(Mensagem.startsWith('Minha'));**



### endsWith - Verifica se a string termina com a palavra fornecida

**console.log(Mensagem.endsWith('mensagem'));**



### indexOf - Verifica onde aquela palavra inicia

**console.log(Mensagem.indexOf('Minha'));**



### Replace - substitui uma palavra por outra declarada

**console.log(Mensagem.replace('Minha','Sua'));**



### Trim - tira os espaços excedentes

**console.log(Mensagem.trim());**



### split - corta o texto sempre que encontra o valor definifo

**console.log(Mensagem.split(' '));**