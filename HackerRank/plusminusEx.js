const arr = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
    quantNumPositivo = 0;
    quantNumNegativo = 0;
    quantZeros = 0;
    tamanhoArray = arr.length

    arr.forEach(item => {
        if (item > 0) {
            quantNumPositivo++
        } else if (item < 0) {
            quantNumNegativo++
        } else {
            quantZeros++
        }
    });

    propPositivo = quantNumPositivo / tamanhoArray;
    propNegativo = quantNumNegativo / tamanhoArray;
    propZeros = quantZeros / tamanhoArray;

    console.log(`${propPositivo.toFixed(6)}
    ${propNegativo.toFixed(6)}
    ${propZeros.toFixed(6)}`)
}

plusMinus(arr);