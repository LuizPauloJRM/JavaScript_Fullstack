

let a = [1,2,3,4];
let b = [...a];
let c = b;
console.log(a,b);
a.push(5);
console.log(a,b);
b.pop();
console.log(a,b);
