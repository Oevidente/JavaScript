# Classes

## Definindo uma classe:

Deve-se utilizar a palavra reservada `class` para declará-la seguida de seu identificador.
Ex.:

```jsx
class Livro {
	//construtor aqui
}
```

## Construtor

O método `[constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor)` é um tipo especial de método para criar e iniciar um objeto criado pela classe. Só pode existir um método especial com o nome "constructor" dentro da classe.
Um construtor pode usar a palavra-chave `super` para herdar o construtor de outra classe.

```jsx
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

class EsseLivro extends Livro {
    constructor(titulo, autor, paginas, tecnologia) {
        super(titulo, autor, paginas);//herdando os atributos da outra classe
        this.tecnologia = tecnologia;
    }
}
```

### Encapsulamento

Utilizando o ***Underscore*** é possível encapsular, ou seja, "privar" aquele dado para que ele não seja acessado fora da classe.

```jsx
class Pessoa {
    constructor(nome) {
        this._nome = nome;
		}
}
```

O método `get`  permite que aquele dado "privado" seja acessado.

```jsx
get nome() {
    return this._nome;
}
```

O método `set`  permite que aquele dado "privado" possa ser retribuído.

```jsx
set nome(value) {
    this._nome = value;
}
```