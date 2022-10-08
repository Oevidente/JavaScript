//Velocidade máxima 70km/h
//A cada 5km/h acima do limite você ganha um ponto na carteira
//Math.Floor()
//Caso os pontos sejam maior que 12 a carteira é suspendida
verificarVelocidade(130);
function verificarVelocidade(velocidade){
  const velocidadeMax = 70;
  const kmPorPonto = 5;
  if(velocidade <= velocidadeMax)
    console.log('Ok');
  
  else{
    const pontos = Math.floor ((velocidade - velocidadeMax)/kmPorPonto);
    if (pontos >= 12)
      console.log('Carteira Suspensa');
    else
      console.log('Pontos', pontos);
  }
}