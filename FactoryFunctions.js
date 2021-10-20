//Exercício - Criar um objeto usando Factory Functions
function Cliente(nome, dataDeNascimento, cpf, endereço, email, telefone) {
    this.nome = nome,
    this.dataDeNascimento = dataDeNascimento,
    this.cpf = cpf,
    this.endereço = endereço,
    this.email = email,
    this.telefone = telefone;
}

const ClienteNovo = new Cliente('Jared Lucas da Silva', '09/07/1995', 12315419264, 'Rua Antônio de Goes, 247', 'jaredlucas@gmail.com', '(81) 99467-4551');
console.log(ClienteNovo);