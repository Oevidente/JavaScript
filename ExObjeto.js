//Objetos são pares de key-value (chave e valor)
const celular = {
    marcaCelular: 'Motorola',
    tamanhoTela: {
        Vertical: 155,
        Horizontal: 75,
    },
    capacidadeBateria: 5000,
    ligar: function () {
        console.log('Fazendo ligação...')
    }
}
//Factory Functions (Funções de Fábrica)
//Encapsula as informações de um objeto
//CamelCase umDoisTresQuatro
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar() {
            console.log('Fazendo ligação...')
        }
    }
}

let celular1 = criarCelular('Motorola', 5.5, 5000);
console.log(celular1);

//Factory Functions aula 2
//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidadeBateria) {
    this.marcaCelular = marcaCelular,
        this.tamanhoTela = tamanhoTela,
        this.capacidadeBateria = capacidadeBateria,
        this.ligar = function () {
            console.log('Fazendo ligação...');
        }
}

//Cria um objeto na hora de instanciar
//New instancia um objeto passando as propriedades através de um parâmetro
const celularNovo = new Celular('Asus', 6.5, 7000);
console.log(celularNovo);