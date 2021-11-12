# Date

# Resumo

Cria uma instância JavaScript de **`Date`** que representa um único momento no tempo. Objetos Date são baseados no valor de tempo que é o número de milisegundos desde 1º de Janeiro de 1970 (UTC).

## Construtor

```jsx
new Date();
new Date(valor);
new Date(dataString);
new Date(ano, mês, dia, hora, minuto, segundo, milissegundo);
```

### Parâmetros para o constructor Date

Quando Date for chamado como um construtor com mais de um argumento, se os valores forem maiores do que seu limite lógico (Ex.: se 13 for fornecido como um valor para mês ou 70 for o valor para minuto), o valor adjacente será ajustado. 

Ex.: **new Date(2013, 13, 1)** é equivalente a **new Date(2014, 1, 1)**, ambos criam uma data para 2014-02-01 **(note que o mês começa em 0)**. 

Similarmente para outros valores: new Date(2013, 2, 1, 0, 70) é equivalente a new Date(2013, 2, 1, 1, 10), pois ambos criam uma data para 2013-03-01T01:10:00.

- ***`value`***
    
    Um valor inteiro representando o número de milissegundos desde 1 de Janeiro de 1970 00:00:00 UTC (Era Unix ou Marco Zero).
    
- ***`dataString`***
    
    Um valor do tipo String que representa uma data. A string deverá estar uma formato reconhecido pelo método `[Date.parse()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)` ([IETF-compliant RFC 2822 timestamps](https://tools.ietf.org/html/rfc2822#page-14) e também uma [versão da ISO8601](https://www.ecma-international.org/ecma-262/5.1/#sec-15.9.1.15)).
    
- ***`year`***
    
    Um valor inteiro que representa o ano. Valores de 0 a 99 correspondem aos anos de 1900 a 1999. Veja o [exemplo abaixo](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date#two%20digit%20years).
    
- ***`month`***
    
    Um valor inteiro que representa o mês, começando com 0 para Janeiro até 11 para Dezembro.
    
- ***`day`***
    
    Um valor inteiro que representa o dia do mês.
    
- ***`hour`***
    
    Um valor inteiro que representa a hora do dia.
    
- ***`minute`***
    
    Um valor inteiro que representa o segmento de um minuto de tempo.
    
- ***`second`***
    
    Um valor inteiro que representa o segmento de segundo do tempo.
    
- ***`millisecond`***
    
    Um valor inteiro que representa o segmento de milissegundo do tempo.
    

## Métodos

- **`[Date.now()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/now)`**
    
    Retorna o valor numérico correspondente ao tempo corrente - o número de milisegundos passados desde 1 de Janeiro de 1970 00:00:00 UTC.
    
- **`[Date.parse()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/parse)`**
    
    Analisa uma string que representa uma data e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00, hora local.
    
- **`[Date.UTC()](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date/UTC)`**
    
    Aceita os mesmos parâmetros como a forma mais longa do construtor (i.e. 2 até 7) e retorna o número de milisegundos desde 1 de Janeiro, 1970, 00:00:00 UTC.
    

# Para saber mais acesse:

[Date - JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date)