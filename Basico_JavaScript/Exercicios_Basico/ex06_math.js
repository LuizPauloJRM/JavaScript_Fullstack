const numero = Number(prompt("Digite um número: ")); // Convertendo para número
const numeroTitulo = document.getElementById('numero-titulo'); // Obter um elemento por "id"
const texto = document.getElementById('texto');

// Alterando o conteúdo HTML interno do título
numeroTitulo.innerHTML = numero;

// Alterando o conteúdo HTML interno com várias informações sobre o número
texto.innerHTML += `
  <p>Seu número + 2 é ${numero + 2}.</p>
  <p>Raiz quadrada: ${numero ** 0.5}.</p> 
  <p>${numero} é número inteiro: ${Number.isInteger(numero)}.</p> 
  <p>É NaN: ${Number.isNaN(numero)}.</p> 
  <p>Arredondado para baixo: ${Math.floor(numero)}.</p> 
  <p>Arredondado para cima: ${Math.ceil(numero)}.</p> 
  <p>Com duas casas decimais: ${numero.toFixed(2)}.</p>
`;

