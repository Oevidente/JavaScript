function convertToFahrenheit(celsius) {
    return 9 / 5 * celsius + 32;
}

let resultado = convertToFahrenheit(20);
console.log(`O valor em Fahrenheit é ${resultado.toFixed(1)}`);