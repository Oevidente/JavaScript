function contar() {
    let initxt = document.getElementById('iniEntrada');
    let fimtxt = document.getElementById('fimEntrada');
    let pastxt = document.getElementById('pasEntrada');
    let res = document.getElementById('res');
    let i = Number(initxt.value);
    let f = Number(fimtxt.value);
    let p = Number(pastxt.value);

    //escrever na tela os numeros do Inicio ao Fim contando de passo a passo
    //Se passo for 2 ele pula 2 de em 2
    if (initxt.value.length === 0 || fimtxt.value.length === 0 || pastxt.value.length === 0) {
        alert('[ERRO] Faltam dados!')
        res.innerHTML = "Impossível contar"
    } else {
        res.innerHTML = 'Contando:'
        if (p <= 0) {
            alert('[ERRO] Passo inválido! Considerando PASSO como positivo')
            p *= -1;
        }
        if (i < f) {
            //Contagem crescente
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for (c = i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`

    }

}