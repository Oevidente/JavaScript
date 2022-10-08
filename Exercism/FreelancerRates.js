const horasPorDia = 8;
const diasPorMes = 22;

function calculaTaxaDiaria(taxaPorHora) {
    return taxaPorHora * horasPorDia;
}

function calculaTaxaMensal(taxaPorHora, desconto) {
    let taxaDiaria = calculaTaxaDiaria(taxaPorHora)
    return aplicarDesconto(taxaDiaria, desconto)
}

function calculaDiasPorOrcamento(orcamento, taxaPorHora, desconto) {
    let taxaMensal = calculaTaxaMensal(taxaPorHora, desconto)
    let taxaDiaria = taxaMensal / diasPorMes
    return Math.floor(orcamento / taxaDiaria);
}

function aplicarDesconto(valor, porcentagem) {
    return Math.ceil((valor * diasPorMes) - ((valor * diasPorMes) * porcentagem));
}

console.log(calculaDiasPorOrcamento(20000, 89, 0.2002));
console.log(calculaTaxaMensal(89, 0.42));