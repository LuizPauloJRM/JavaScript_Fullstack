//Arrays
//[0,1,2,3,4,5];
//Listagem por indice 0,1,2,3...
// 0    1
//[Luiz,Paulo]            0       1         2      3       4 - Undefined
const alunos = ['Luiz', 'Maria', 'João', 'Paulo'];
const notas = [8.5, 5.5, 6.0, 10];
console.log(alunos);
console.log(notas);
console.log(alunos[0], notas[0]);
console.log(alunos[1], notas[1]);
console.log(alunos[2], notas[2]);
console.log(alunos[3], notas[3]);
alunos[4] = 'Luiza';//altera
notas[4] = 4.4; //adicionando índice que estava undefined no array
console.log(alunos[4], notas[4]);
console.log(alunos.length); //tamanho do array
alunos[alunos.length] = 'Fabio';
alunos[alunos.length] = 'Neto';
console.log(alunos);
alunos.push('Otavio')//Adicionando no array ao final 
alunos.push('Rodrigo')
console.log(alunos)
alunos.unshift('Luiza')//adicionando ao começo
console.log(alunos)