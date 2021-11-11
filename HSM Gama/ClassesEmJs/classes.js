class Livro {
    //defina um construtor e forneça os atributos
    constructor(titulo, autor, paginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
    }
    /*
    também é possivel chamar funções sem a necessidade 
    da palavra function 
    */
    ler() {
        return `Estou lendo ${this.titulo}`
    }
}
//Crie um objeto
// let livro = new Livro('Algoritimos para viver','Brian', 500);
// let outroLivro = new Livro('Um Exu em Nova York', 'Cidinha da Silva', 100);

// console.log(livro.ler());
// console.log(outroLivro);

class EsseLivro extends Livro {
    constructor(titulo, autor, paginas, tecnologia) {
        super(titulo, autor, paginas);//herdando os atributos da outra classe
        this.tecnologia = tecnologia;
    }
}

let esseLivro = new EsseLivro('Algoritimos para viver','Brian', 500, 'Algorítimos');
console.log(esseLivro);