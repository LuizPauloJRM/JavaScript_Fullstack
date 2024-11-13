//Frase : "Luiz Paulo tem 25 anos , pesa 87 kg tem 1.8 de altura e seu IMC é de ... "

const nome = "Luiz Paulo";
const sobrenome = "Medeiros da Cunha Júnior";
const idade = 25; 
const peso = 85; 
const altura = 1.80;
let imc = peso / (altura * altura);
console.log(nome,sobrenome,"tenho",idade,"anos, peso ", peso ,"kg e tenho ",altura,"m de altura meu IMC é de ",imc);
//Template strings 
//console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`);
//console.log(`tem ${altura} de altura e seu IMC é de ${imc}`);
