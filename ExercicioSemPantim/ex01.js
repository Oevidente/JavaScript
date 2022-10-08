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
  let awake = 0;
  if (cavaleiroAcordado == true) {
    awake++;
  } else if (arqueiroAcordado == true) {
    awake++;
  } else if (prisioneiroAcordado == true) {
    awake++;
  }
  if (awake > 0) {
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
  if (cachorroEsta == true && arqueiroAcordado == false) {
    console.log('Pode atacar com o cachorro e libertar o prisioneiro');
    return true;
  } else {
    if (prisioneiroAcordado == true) {
      if (cavaleiroAcordado == false && arqueiroAcordado == false) {
        console.log('Pode libertar o prisioneiro');
        return true;
      } else {
        console.log('Não pode libertar o prisioneiro');
        return false;
      }
    } else {
      console.log('Não pode libertar o prisioneiro');
      return false;
    }
  }
}

libertarPrisioneiro(false, true, false, false);

//--------------------------------------------------------------------------

export function canExecuteFastAttack(knightIsAwake) {
  switch (knightIsAwake) {
    case (knightIsAwake = true):
      console.log('Não pode atacar rápido');
      return false;
      break;
    case (knightIsAwake = false):
      console.log('Pode atacar rápido');
      return true;
      break;
  }
}
//canExecuteFastAttack(false);

export function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  let awake = 0;
  if (knightIsAwake == true) {
    awake++;
  } else if (archerIsAwake == true) {
    awake++;
  } else if (prisonerIsAwake == true) {
    awake++;
  }
  if (awake > 0) {
    console.log('Pode espionar');
    return true;
  } else {
    console.log('Não pode espionar');
    return false;
  }
}

//canSpy(false, true, false);

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (archerIsAwake == false && prisonerIsAwake == true) {
    console.log('Pode alertar o prisioneiro');
    return true;
  } else {
    console.log('Não pode alertar o prisioneiro');
    return false;
  }
}

//canSignalPrisoner(false, true);

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent == true && archerIsAwake == false) {
    console.log('Pode atacar com o cachorro e libertar o prisioneiro');
    return true;
  } else {
    if (prisonerIsAwake == true) {
      if (knightIsAwake == false && archerIsAwake == false) {
        console.log('Pode libertar o prisioneiro');
        return true;
      } else {
        console.log('Não pode libertar o prisioneiro');
        return false;
      }
    } else {
      console.log('Não pode libertar o prisioneiro');
      return false;
    }
  }
}

//canFreePrisoner(false, true, false, false);
