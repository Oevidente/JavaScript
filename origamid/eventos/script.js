let inputBTN = document.querySelector('.inputBTN');
let body = document.querySelector('body');
let nav = document.querySelector('nav');
let link = document.querySelectorAll('a');
let section = document.querySelector('section');
let h1 = document.querySelector('h1');
let p = document.querySelectorAll('p');

function ativaDark() {
  body.classList.toggle('dark');
  nav.classList.toggle('dark');
  if (inputBTN.value != 'Clarear') {
    inputBTN.value = 'Clarear';
  } else {
    inputBTN.value = 'Escurecer';
  }
}

inputBTN.addEventListener('click', ativaDark);
