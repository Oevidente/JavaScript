//Encapsulamento
class Pessoa {
    constructor(nome) {
        this._nome = nome;
        /*
        Usando underscore (underline) identifica aquilo como algo "privado" 
        mas apenas por convenção.
        */
    }

    get nome() {
        return this._nome;
    }
    /*
    O get permite que aquele dado "privado" seja acessado
    */
    set nome(value) {
        this._nome = value;
    }
    /*
    O set permite que aquele dado "privado" possa ser reatribuído
    */
}

let pessoa = new Pessoa('André');
pessoa.nome = 'Luiz';
console.log(pessoa.nome);