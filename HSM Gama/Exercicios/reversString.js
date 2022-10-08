let newStr = '';
function reverseString(str) {
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
        console.log(newStr);
    }
}
let resultado = reverseString('Hello Gama Academy');