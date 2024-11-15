let varA='A';//Valor de "B"
let varB='B';//Valor de "C"
let varC='C';//Valor de "A"
let temp=varA;
varA = varB;  //B
varB = varC; //C
varC= temp;  //B
/*
Modo que não funciona preciso criar uma variavel vazia para receber "let temp=varA;"
varA = varB;  //B
varB = varC; //C
varC= varA;  //B
*/
console.log(varA,varB,varC)
/*
OU 
[varA,varB,varC]=[varB,varC,varA]
*/