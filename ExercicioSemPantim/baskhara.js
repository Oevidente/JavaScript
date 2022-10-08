let input = require('fs').readFileSync('dev/stdin', 'utf8');
let lines = input.split('\n');
let [A, B, C] = lines
  .shift()
  .trim()
  .split(' ')
  .map((x) => parseFloat(x));
