//Natureza dinâmica de objetos
const mouse = {
    cor: 'red',
    marca: 'dazz',
}
//Delcarar uma chave/propriedade após declarar o objeto
mouse.velocidade = 5000;
mouse.trocarDPI = function(){
    console.log('mudando DPI ');
}
//Deletar chaves:
//delete mouse.velocidade;
console.log(mouse);