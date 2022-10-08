const input = require('fs').readFileSync('dev/stdin', 'utf8');
const lines = input.split('\n');
let [N1, N2, N3, N4] = lines
  .shift()
  .trim()
  .split(' ')
  .map((x) => parseFloat(x).toFixed(1));

const P1 = 2;
const P2 = 3;
const P3 = 4;
const P4 = 1;
let exame = 6.4;
let media = (P1 * N1 + P2 * N2 + P3 * N3 + P4 * N4) / (P1 + P2 + P3 + P4);
console.log(`Media: ${media.toFixed(1)}`);

if (media >= 7) {
  console.log(`Aluno aprovado.`);
} else if (media < 5) {
  console.log(`Aluno reprovado.`);
} else if (media > 5 && media < 6.9) {
  console.log(`Aluno em exame.`);
  console.log(`Nota do exame: ${exame.toFixed(1)}`);
  media += exame;
  media /= 2;
  if (media >= 5) {
    console.log(`Aluno aprovado.`);
    console.log(`Media final: ${media.toFixed(1)}`);
  } else {
    console.log(`Aluno reprovado.`);
    console.log(`Media final:${media.toFixed(1)}`);
  }
}
