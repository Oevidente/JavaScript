let input = require('fs').readFileSync('dados', 'utf8');
let infos = input.split('; ');

class usuario {
    nome;
    sobrenome;
}
class aluno extends usuario {
    turma;
    idade;
}
class professor extends usuario {
    email;
    telefone;
}
const andre = new professor();
andre.nome = infos[0];
andre.sobrenome = infos[1];
andre.email = infos[2];
andre.telefone = infos[3];

console.log(andre);