//Números
//IEEE 754-2008
let a = 1;
let b = 2; 
console.log(a + b);
//Concatenar como se o número fosse String 
let c = 3; 
let d= 5; 
console.log(c.toString()+d);
console.log(typeof(c));
console.log(typeof(d));
let e = 1500; 
let f = 3.3;
console.log(e.toString(2))
console.log(f.toFixed(4))
let g = 0.7; 
let h = 0.1; 
g += h;//0.8
g += h;//0.9
g += h;//1.0
console.log(g);
console.log(Number.isInteger(g));
let num1 = 0.8;//number
let num2 = 0.1;
num1 = (num2*100)+(num2 *100)/100;//0.9
console.log(num1);
console.log(Number.isInteger(num1))
//console.log(num1.toString()+num2)
//num1 = num1.toString()
//console.log(num1.toString(2))
//console.log(num1.toFixed(2))
//console.log(Number.isInteger(num1))
//console.log(Number.isNaN(temp))