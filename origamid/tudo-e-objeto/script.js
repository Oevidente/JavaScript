//Strings, Números, Booleans, Objetos e mais, possuem propriedades e métodos. Por isso, todos são objetos.

let nome = 'André';
console.log(nome.length);
console.log(nome.charAt(1));
console.log(nome.replace('ré', 'rei'));
console.log(nome);
//Uma strign herda propriedades e métodos do constructor String()

let altura = 1.78;
console.log(altura.toString());
console.log(altura.toFixed());
//Por um breve momento o número é envolvido em um Objeto (coerção), tendo acesso assim às suas propriedades e métodos

function calculaIMC(peso, altura) {
  let imc = peso / altura ** 2;
  console.log(imc.toFixed());
  return imc;
}
calculaIMC(86, 1.78);
console.log(calculaIMC.toString());
console.log(calculaIMC.length);
/* ------------------------------------------------------------------------ */

let btn = document.querySelector('.btn');

btn.classList.add('azul'); //adicionar a classe azul
console.log(btn.innerText);
btn.addEventListener('click', function () {
  console.log('Clicou');
});
//Praticamente todos os efeitos com JS são feitos utilizando propriedades e metodos de objetos do DOM

