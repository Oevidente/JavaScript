//DESENVOLVA UM CÓDIGO QUE SIMULE UMA ELEIÇÃO COM TRÊS CANDIDATOS.
//CANDIDATO A -> 753
//CANDIDATO B -> 675
//CANDIDATO C -> 075
const candidatoA = '753';
const candidatoB = '675';
const candidatoC = '075';

let votoA = 0;
let votoB = 0;
let votoC = 0;
let votoNulo = 0;

// FLUXO DO PROGRAMA:
// PEDIR O NÚMERO DO CANDIDATO -> APARECER O NOME E NUMERO CASO VÁLIDO
function votar() {
  let intençãoVoto = window.prompt('DIGITE O NÚMERO DO CANDIDATO');
  console.log(intençãoVoto);
  // CASO CONTRÁRIO APARECER "VOTO NULO?"/ AO CONFIRMAR VOTO, ADICIONAR
  if (intençãoVoto === candidatoA) {
    window.alert('Candidato A: ' + candidatoA);
    votoA++;
    cont();
  } else if (intençãoVoto === candidatoB) {
    window.alert('Candidato B: ' + candidatoB);
    votoB++;
  } else if (intençãoVoto === candidatoC) {
    window.alert('Candidato C');
    votoC++;
    cont();
  } else {
    let voto = window.prompt('VOTO NULO?');
    if (voto == 'sim') {
      votoNulo++;
      cont();
    } else {
      votar();
      cont();
    }
  }
  // O VOTO AO CANDIDATO -> PERGUNTAR SE EXISTE OUTRO VOTANTE E REINICIAR.
}
function cont() {
  let continuar = window.prompt('EXISTE OUTRO VOTANTE?');

  if (continuar == 'sim') {
    votar();
  } else if (continuar == 'não') {
    // CASO NÃO EXISTA, FINALIZAR VOTAÇÃO COLOCANDO EM TELA O RESULTADO
    window.alert(`Candidato A: ${votoA}
    Candidato B: ${votoB}
    Candidato C: ${votoC}
    Brancos e Nulos: ${votoNulo}`);
  }
}
function resultado() {
  if (votoA > votoB && votoA > votoC) {
    //Candidato A ganhou
    window.alert('Candidato A Ganhou');
  } else if (votoC > votoB && votoC > votoA) {
    //Candidato C ganhou
    window.alert('Candidato C Ganhou');
  } else if (votoB > votoC && votoB > votoA) {
    //Candidato B ganhou
    window.alert('Candidato B Ganhou');
  } else {
    //Empate
    window.alert('Empate');
  }
}
// ANUNCIANDO O GANHADOR
votar();
cont();
resultado();
