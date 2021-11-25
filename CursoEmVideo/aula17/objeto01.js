let amigo = {
    nome: 'André',
    sexo: 'M',
    idade: 25,
    peso: 86,
    engordar(p = 0) {
        console.log('Engordou');
        this.peso += p;
    },
    envelhecer(i = 0) {
        console.log('Ficou mais velho');
        this.idade += i;
    }
}

amigo.engordar(2);
amigo.envelhecer(2)
console.log(`${amigo.nome} tem ${amigo.idade} anos e pesa ${amigo.peso}kg`);