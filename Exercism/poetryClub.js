// Trim - tira os espaços excedentes
let texto = `Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave`;

texto = texto.trim()

let linhas = texto.split('\n');

function frontDoorResponse(line) {
    line = linhas[0][0] + linhas[1][0] + linhas[2][0] + linhas[3][0] + linhas[4][0];
    return line.slice(0, 1)
}

console.log(frontDoorResponse(line))

function frontDoorPassword(word) {
    word = linhas[0][0] + linhas[1][0] + linhas[2][0] + linhas[3][0] + linhas[4][0];
    lowerWord = word.toLowerCase();
    lowerWord = lowerWord.replace(/[^]/, '')
    return word.slice(0, 1) + lowerWord;
}
console.log(frontDoorPassword(word))

function backDoorResponse(line) {
    return linhas[0][13] + linhas[1][14] + linhas[2][20] + linhas[3][16] + linhas[4][13];
}

console.log(backDoorResponse(line))

function backDoorPassword(word) {
    word = linhas[0][13] + linhas[1][14] + linhas[2][20] + linhas[3][16] + linhas[4][13];
    higherWord = word.toUpperCase();
    lowerWord = word.toLowerCase();
    lowerWord = lowerWord.replace(/[^]/, '')
    return `${higherWord.slice(0, 1) + lowerWord}, please`;
}
console.log(backDoorPassword(word))
