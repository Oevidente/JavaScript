//função que retorna eixos x e y do mouse no clique

//forma 1
/*
function handleMouse(event) {
  console.log(event);
}

EXEMPLO DE OUTPUT

click { target: html, buttons: 0, clientX: 346, clientY: 368, layerX: 346, layerY: 368 }
*/

//forma 2
/* function handleMouse(event) {
  let clientX = event.clientX;
  let clientY = event.clientY;
  console.log(clientX, clientY);
} 

EXEMPLO DE OUTPUT

453 371

*/

//forma 3
/* function handleMouse(event) {
  let { clientX, clientY } = event; // as variáveis recebem as propriedades que estão dentro do evento que possuem o mesmo nome
  console.log(clientX, clientY);
} 

EXEMPLO DE OUTPUT

453 371

*/

//forma 4
function handleMouse({ clientX, clientY }) {
  console.log(clientX, clientY);
}

/* 
EXEMPLO DE OUTPUT

453 371 

*/
//Criar evento de clique
document.addEventListener('click', handleMouse);
