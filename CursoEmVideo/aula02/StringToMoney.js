let valor = Number(prompt('Qual o valor do produto?'));
alert(valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }))