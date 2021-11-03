const arr = [-4, 3, -9, 0, 4, 1];

// let quantNumPositivo = 0;
// let quantNumNegativo = 0;
// let quantZeros = 0;
// let tamanhoArray = arr.length

function plusMinus(arr) {
    //saber tamanho do array
    let quantNumPositivo = 0;
    let quantNumNegativo = 0;
    let quantZeros = 0;
    let tamanhoArray = arr.length

//percorrer os elementos do array e comparar para saber se são positivos, negativos ou se são zeros
    arr.forEach(function (item) {
        if (item > 0) {
            quantNumPositivo++
        } else if (item < 0) {
            quantNumNegativo++
        } else {
            quantZeros++
        }
    });

    //calcula a proporção dos números obtidos pelo tamanho do array
    let propPositivo = quantNumPositivo / tamanhoArray;
    let propNegativo = quantNumNegativo / tamanhoArray;
    let propZeros = quantZeros / tamanhoArray;

    console.log(`${propPositivo.toFixed(6)}
${propNegativo.toFixed(6)}
${propZeros.toFixed(6)}`)
}
