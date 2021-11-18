function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano'); //pega o valor da caixa do ano de nascimento
    let res = document.querySelector('div#res'); //Pega a div que tem escrito "Preencha os dados acima para ver o resultado!"
    if (fano.value.length === 0 || Number(fano.value) > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto'); //definindo id para o elemento foto
        if (fsex[0].checked) {
            genero = 'Homem';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/adolescentehomem.png')
                    //jovem
            } else if (idade < 60) {
                img.setAttribute('src', 'img/jovemhomem.png')
                    //adulto
            } else {
                img.setAttribute('src', 'img/idosohomem.png')
                    //idoso
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher';
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'img/menina.png')
            } else if (idade >= 10 && idade < 21) {
                img.setAttribute('src', 'img/adolescentemulher.png')
                    //jovem
            } else if (idade >= 21 && idade < 60) {
                img.setAttribute('src', 'img/jovemmulher.png')
                    //adulto
            } else {
                img.setAttribute('src', 'img/idosamulher.png')
                    //idoso
            }
        }
        res.style.textAlign = 'center'; //centraliza o texto
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}