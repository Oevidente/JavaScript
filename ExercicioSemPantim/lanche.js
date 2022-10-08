const input = require('fs').readFileSync('dev/stdin', 'utf8');
const lines = input.split('\n');
const [item, quant] = lines
  .shift()
  .trim()
  .split(' ')
  .map((x) => parseFloat(x));

let valor = 0;

switch (item) {
  case 1:
    valor = 4.0;
    break;
  case 2:
    valor = 4.5;
    break;
  case 3:
    valor = 5.0;
    break;
  case 4:
    valor = 2.0;
    break;
  case 5:
    valor = 1.5;
    break;
}
console.log('Total: R$ ' + (quant * valor).toFixed(2));
