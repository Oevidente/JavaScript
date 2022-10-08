let frutas = ['pêra', 'uva', 'maçã'];

let [fruta1, fruta2, fruta3] = frutas; //fruta1 recebe o primeiro item do array, o mesmo vale para as demais variáveis que se seguem
console.log(fruta1, fruta2, fruta3);

let useQuadrado = [
  4,
  function (tamanhoLado) {
    return 4 * tamanhoLado;
  },
]; //array com número e função (arrays podem receber QUALQUER tipo de valor)

let [lados, perimetro] = useQuadrado; //lados = 4 | perimetro = 4 * tamanhoLado
console.log(perimetro(5)); //
