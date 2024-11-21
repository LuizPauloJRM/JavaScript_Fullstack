/*

Avaliação de curto circuito 
Operadores lógicos
&& -> false && true -> false 'o valor é o mesmo  para retornar verdadeiro'
|| -> 
false 
Tudo pode ser avaliado no javascript 
Falsy values : 0 ,"", '',`` ,null, undefined ,NaN
*/
//console.log('Luiz Paulo ' && 0 &&'Maria')//Não encontrou nada falso 
console.log('Luiz' && 'Maria')//Retorna o último valor checado "Maria"
console.log('Luiz' && NaN && 'Maria')//Checou "Luiz" e parou no false "NaN"
