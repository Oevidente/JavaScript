let dia = parseInt(window.prompt('Digite o dia do seu aniversário:'));
let mes = parseInt(window.prompt('Digite o mês de aniversário:'));

function qualSigno(dia, mes) {
  if ((dia >= 21 && mes == 1) || (dia <= 19 && mes == 2)) {
    alert('Aquário');
  } else if ((dia >= 21 && mes == 3) || (dia <= 20 && mes == 4)) {
    alert('Áries');
  } else if ((dia >= 24 && mes == 9) || (dia <= 23 && mes == 10)) {
    alert('Libra');
  } else if ((dia >= 21 && mes == 4) || (dia <= 21 && mes == 5)) {
    alert('Touro');
  } else if ((dia >= 24 && mes == 10) || (dia <= 22 && mes == 11)) {
    alert('Escorpião');
  } else if ((dia >= 22 && mes == 5) || (dia <= 21 && mes == 6)) {
    alert('Gêmeos');
  } else if ((dia >= 23 && mes == 11) || (dia <= 21 && mes == 12)) {
    alert('Sagitário');
  } else if ((dia >= 21 && mes == 6) || (dia <= 23 && mes == 7)) {
    alert('Câncer');
  } else if ((dia >= 22 && mes == 12) || (dia <= 20 && mes == 1)) {
    alert('Capricórnio');
  } else if ((dia >= 24 && mes == 7) || (dia <= 23 && mes == 8)) {
    alert('Leão');
  } else if ((dia >= 24 && mes == 8) || (dia <= 23 && mes == 9)) {
    alert('Virgem');
  } else {
    alert('Peixes');
  }
}

qualSigno(dia, mes);
