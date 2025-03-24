//So posso ter um else diferente do else if 
const hora = 43;
if (hora >= 0 && hora <= 11){
    console.log('Bom dia');
}else if(hora >= 12 && hora <=17){
    console.log('Boa tarde')
}else if(hora >=18 && hora <=23){
    console.log('Boa noite')
}else{
    console.log('Digite uma hora que seja valido de 0 as 23')
}