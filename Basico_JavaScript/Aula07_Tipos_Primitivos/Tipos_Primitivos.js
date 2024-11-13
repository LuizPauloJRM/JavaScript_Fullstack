//String ,number, undefined, null,boolean
//String
const nome1 = "Luiz";
const nome2= 'Luiz';
const nome3=`Luiz`;
//Number
const valor1= 10;
const valor2= 2.2;
//undefined
let nomeAluno;
//Não aponta para nenhum local na memória (Nulo)
const sobrebrenomeAluno=null;
//Verdadeiro ou falso ,valor lógico (Boolean)
const aprovado = true;//false
console.log(typeof nome)
console.log(typeof nome1)
console.log(typeof nome2)
console.log(typeof nome3)
console.log(typeof valor1)
console.log(typeof valor2)
console.log(typeof nomeAluno)
console.log(typeof sobrebrenomeAluno)
console.log(typeof aprovado)
const a = [1,2];
const b = a;
console.log(a,b);
b.push(3);//Adicionando valor "Push",valores por referencia , apontando pro mesmo local da memória 
console.log(a,b);
const d = 3; 
const e = d;
console.log(d,e)