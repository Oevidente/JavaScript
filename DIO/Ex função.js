//Define o valor da variável como azul
let corSite = "azul";
//Declara a função com dois parâmetros, cor e tonalidade
function resetaCor(cor, tonalidade){
    corSite = cor + " " + tonalidade;
};

console.log(corSite);
//Define os valores dos parâmetros cor e tonalidade
resetaCor("verde", "claro");
console.log(corSite);

