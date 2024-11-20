//Objeto
const pessoa = {
    nome: "luiz",
    idade: 30,
    saudacao: function() {
      console.log("Olá, " + this.nome + " voce tem "+ this.idade+" anos");
    }
  };
  pessoa1={
    nome:"Luiz Paulo",
    sobrenome  : "Medeiros",
    idade:25 
    
}
console.log(pessoa1.nome)
console.log(pessoa1.sobrenome)
console.log(pessoa1.idade)
  console.log(pessoa.nome);
  pessoa.saudacao();
  