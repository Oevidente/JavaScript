let num = document.querySelector('input#fnum'); //input com id "fnum"
let lista = document.querySelector('select#flista'); //select com id "flista"
let res = document.querySelector('div#res'); //div com id "res"
let valores = [];

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        /*
        se valor do número for maior igual a 1 e menor que 100
        */
        return true;
    } else {
        return false;
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        /*
        se o valor number de "n" for diferente que -1 significa que não está na lista
        */
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        //! significa NÃO
        valores.push(Number(num.value)); //push adiciona um elemento ao array
        let item = document.createElement('option'); //adiciona uma tag option ao select
        item.text = `Valor ${num.value} adicionado.`; //retorno visual
        lista.appendChild(item); //adicionando o valor a lista
        res.innerHTML = ''; //quando adicionar, limpar a div res
    } else {
        alert("Valor inválido ou já se encontra na lista!")
    }

    num.value = ''; //limpa o input
    num.focus(); //coloca o foco no input
}

function finalizar() {
    if (valores.length === 0) {
        alert('Adicione valores antes de finalizar!')
            //emitir alerta caso a lista esteja vazia
    } else {
        let total = valores.length; //recebe a quantidade de elementos do array
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior) {
                maior = valores[pos];
            }
            /*
            para cada posição em valores verifica se 
            o "valores" na posição "pos" for maior do que o maior valor, 
            então maior valor passa a ser valores[pos]
            */
            else {
                menor = valores[pos];
            }
        }
        media = soma / total;
        res.innerHTML = ''; //limpa a div res
        res.innerHTML += `<p>Ao todo temos ${total} números cadastrados.</p>` //adiciona uma mensagem à div res
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>` //adiciona uma mensagem à div res
        res.innerHTML += `<p>O menor valor informado foi ${menor}</p>` //adiciona uma mensagem à div res
        res.innerHTML += `<p>Somando todos o valores temos ${soma}</p>` //adiciona uma mensagem à div res
        res.innerHTML += `<p>A média dos valores é ${media.toFixed(2)}</p>` //adiciona uma mensagem à div res
    }
}