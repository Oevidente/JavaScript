//Operador ternário
//Tem um cliente, se esse cliente tiver mais de 100 pontos ele vai ser tipo Premium e se tiver menos vai ser do tipo comum
let pontos = 200;

//instrução + o que acontece caso verdadeiro + o que acontece caso falso
let tipo = pontos > 100 ? "Premium" : 'Comum'; //Elimina a necessidade de IF ELSE

console.log(tipo);
