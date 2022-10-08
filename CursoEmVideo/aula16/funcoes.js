function par_impar(num) {
    if (num <= 0 || num === NaN || num === undefined) {
        console.log(`${num} é inválido!`);
    } else {
        if (num % 2 === 0) {
            console.log(`${num} é par`);
        } else {
            console.log(`${num} é impar`);
        }
    }
}
par_impar()