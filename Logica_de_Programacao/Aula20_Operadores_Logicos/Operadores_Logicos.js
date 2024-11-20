//Operadores lógicos: Mais de uma comparação 
// AND ->E (&&) - Todas verdadeiras para retornar true
//OR -> OU  (||) - Uma ou a outra 
//NOT -> NÃO () - Inverso 
const expressaoAnd = (true && true && true && true);
console.log(expressaoAnd)
const expressaoOr = ( true ||true || false || false);
console.log(expressaoOr); 
const usuario = 'Luiz'
const senha = '123456'
const login=usuario === 'Luiz' && senha ==='123456'
console.log(login)
console.log(!false)
console.log(!true)