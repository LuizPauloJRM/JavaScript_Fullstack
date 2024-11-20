/*
Criando objeto novo 
const...={
    Atributo1
    Atributo2
    ...
    ...
}
chamando objetos: console.log(pessoa1.nome,pessoa2.nome,pessoa3.nome)
*/
function criarPessoa(nome,sobrenome,idade){
    return{//Cria objetos
        nome: nome,
        sobrenome: sobrenome, 
        idade: idade 
    };
}
const pessoa1 = criarPessoa('Luiz', 'Medeiros', 25)
const pessoa2 = criarPessoa('Paulo', 'Medeiros', 29)
const pessoa3 = criarPessoa('Medeiros', 'Silva', 49)
console.log(pessoa1.nome,pessoa2.nome,pessoa3.nome)
console.log(pessoa1.sobrenome,pessoa2.sobrenome,pessoa3.sobrenome)
console.log(pessoa1.idade,pessoa2.idade,pessoa3.idade)