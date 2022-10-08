//Variáveis simples
let auto_1 = 'carro 1';
let auto_2 = 'carro 2';

//Variáveis compostas - Arrays / Vetores
let auto = ['carro 1', 'carro 2', 'carro 3', 'carro 4', 'carro 5'];
console.log(auto);

auto[5] = 'carro 6'; //Coloque o carro 6 na posição 6 do array
console.log(auto);

console.log(`O vetor Auto tem ${auto.length} carros em seu conteúdo.`);

for (let pos in auto) {
    console.log(`A posição ${pos} tem valor ${auto[pos]}`);
} //para cada posição dentro de auto faça...

/*
for (let pos = 0; pos < auto.length; pos++) {
    console.log(auto[pos]);
}
*/

console.log(auto.indexOf('carro 6')) //procure o indíce do valor carro 6