//Deve-se beber o equivalente a 35ml por kg de massa corporal
let agua = 0;
let input = document.querySelector('#pesoIn');
let section = document.querySelector('section');

function quantoDagua() {
  let peso = parseInt(input.value);
  agua = (peso * 35) / 1000;

  section.innerHTML = `<p>Você deve beber pelo menos ${agua.toFixed(1)} litros de água por dia.</p>
  <p>*a razão é de 35ml por kg</p>`;

  console.log(agua);
}
