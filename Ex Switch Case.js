let permissão; //comum, gerente, diretor
permissão = 'diretor';

switch (permissão){
    case 'comum' :
    console.log('Usuario Comum');
    break;

    case 'gerente' :
    console.log('Usuario Gerente');
    break;

    case 'diretor' :
    console.log('Usuario Diretor');
    break;

    //Caso não caia em nenhum dos valores, ele exibe o valor definido como padrão
    default:
    console.log('Usuario não reconhecido')
}