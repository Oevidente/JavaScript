let mochila = {
    comida: prompt('Quais comidas voce vai levar?'),
    equipamento: prompt('Quais equipamentos voce vai levar?'),
    vestimenta: prompt('Quais vestimentas voce vai levar?'),
  };

  let posicaoCorda = mochila.equipamento.indexOf('corda')
  let tamCorda = posicaoCorda + 5
  let sliceCorda = mochila.equipamento.slice(posicaoCorda, tamCorda)

  if ( sliceCorda === 'corda') {
      alert('Voce esta pronto pra seguir para a montanha!')
  }
  else {
      alert('Voce esqueceu a corda')
  }