//If..else
// se a hora estiver entre as 6h até meio dia, vamos exibir bom dia
// se estiver entre meio dia até às 19h, boa tarde
// caso contrário, boa noite

let hora = 10;

if (hora > 6 && hora < 12){
  console.log('Bom dia!');
}
else if (hora > 12 && hora < 18){
  console.log('Boa tarde!');
}
else {
  console.log('Boa noite!');
}