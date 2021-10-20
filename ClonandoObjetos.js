//Clonando objetos
function Cliente(nome, dataDeNascimento, cpf, endereço, email, telefone) {
    this.nome = nome,
    this.dataDeNascimento = dataDeNascimento,
    this.cpf = cpf,
    this.endereço = endereço,
    this.email = email,
    this.telefone = telefone;
}

const ClienteNovo = new Cliente('Jared Lucas da Silva', '09/07/1995', 12315419264, 'Rua Antônio de Goes, 247', 'jaredlucas@gmail.com', '(81) 99467-4551');

//Paremetro 1: alvo, Parametro 2: de onde vai copiar os parâmetros
const novoObjeto = Object.assign({
    //Também é possível adicionar propriedades
    dataDeAdesão: '16/04/2021'
},ClienteNovo);
console.log(novoObjeto);

const objeto2 = {...ClienteNovo};
console.log(objeto2);