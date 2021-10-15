//O resultado de uma comparação lógica nem sempre vai ser true ou false
// false||true = true 
// false||'andre' = andre
// false||1 = 1

//Falsy (undefined, null, 0, false, '' - string vazia, NaN - not a number)

//Truthy (valores que não se aplicam a Falsy)
//Numa comparação entre Flasy e Truthy, sempre vai retornar Truthy

let corPersonalizada = 'vermelho';
let corPadrao = 'azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil);//retorna vermelho

//no OR || ele precisa encontrar apenas um valor TRUTHY para que ele pare de fazer uma comparação

