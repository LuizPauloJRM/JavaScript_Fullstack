//Por referencia e primitivo 
//Primitivos (Imutáveis - String , number , boolean , undefined, null(bigint, symbol)-Valor
let nome = 'Luiz';
nome  = 'Medeiros'; 
console.log(nome);
//Referencia  (Mutavel)- array , object , function - Passados por referencia
let a = [1,2,3,4];
let b = a ;
let c = b;
console.log(a,b);
a.push(5);
console.log(a,b);
b.pop();
console.log(a,b);
console.log(c);