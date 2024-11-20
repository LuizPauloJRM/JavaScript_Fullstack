function escopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];
    
    // Função para capturar o evento de envio do formulário
    function recebeEventoForm(evento) {
        evento.preventDefault(); // Impede o envio do formulário (recarregar a página)
        
        // Pegando os valores dos campos do formulário
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        // Adicionando os dados ao array de pessoas
        pessoas.push({ nome, sobrenome, peso, altura });
        
        // Exibindo os dados na tela
        exibeResultado();
        
        // Limpar os campos do formulário após o envio (opcional)
        form.reset();
    }

    // Função para exibir os dados no resultado
    function exibeResultado() {
        resultado.innerHTML = ''; // Limpar conteúdo anterior

        // Adiciona os dados de todas as pessoas no array
        pessoas.forEach((pessoa, index) => {
            resultado.innerHTML += `
                <p><strong>Pessoa ${index + 1}:</strong></p>
                <p>Nome: ${pessoa.nome}</p>
                <p>Sobrenome: ${pessoa.sobrenome}</p>
                <p>Peso: ${pessoa.peso}</p>
                <p>Altura: ${pessoa.altura}</p>
                <hr>
            `;
        });
    }

    // Adiciona o ouvinte de evento de submit no formulário
    form.addEventListener('submit', recebeEventoForm);
}

// Chama a função
escopo();
