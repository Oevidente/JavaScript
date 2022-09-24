function ataqueRapido(cavaleiroAcordado) {
  switch (cavaleiroAcordado) {
    case (cavaleiroAcordado = true):
      console.log('Não pode atacar rápido');
      return false;
      break;
    case (cavaleiroAcordado = false):
      console.log('Pode atacar rápido');
      return true;
      break;
  }
}
ataqueRapido(false);

function furtivo(cavaleiroAcordado, arqueiroAcordado, prisioneiroAcordado) {
  let acordados = 0;
  if (cavaleiroAcordado == true) {
    acordados++;
  } else if (arqueiroAcordado == true) {
    acordados++;
  } else if (prisioneiroAcordado == true) {
    acordados++;
  }
  if (acordados > 0) {
    console.log('Pode espionar');
    return true;
  } else {
    console.log('Não pode espionar');
    return false;
  }
}

furtivo(false, true, false);

function alertarPrisioneiro(arqueiroAcordado, prisioneiroAcordado) {
  if (arqueiroAcordado == false && prisioneiroAcordado == true) {
    console.log('Pode alertar o prisioneiro');
    return true;
  } else {
    console.log('Não pode alertar o prisioneiro');
    return false;
  }
}

alertarPrisioneiro(false, true);

function libertarPrisioneiro(
  cavaleiroAcordado,
  arqueiroAcordado,
  prisioneiroAcordado,
  cachorroEsta,
) {
  if (cachorroEsta === true) {
    if (arqueiroAcordado == false) {
      console.log('Pode atacar com o cachorro e libertar o prisioneiro');
    } else {
      if (prisioneiroAcordado == true) {
        if (cavaleiroAcordado == false && arqueiroAcordado == false) {
          console.log('Não pode resgatar o prisioneiro');
        }
      }
    }
  }
}

libertarPrisioneiro(false, true, false, false);
