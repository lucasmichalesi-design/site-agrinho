// Seleção de elementos
const botao = document.getElementById('btn-interativo');

// Exemplo de interação acessível
botao.addEventListener('click', () => {
    const estaPressionado = botao.getAttribute('aria-pressed') === 'true';
    
    // Inverte o estado
    botao.setAttribute('aria-pressed', !estaPressionado);
    
    if (!estaPressionado) {
        botao.textContent = "Ativado";
        botao.style.backgroundColor = "#28a745";
    } else {
        botao.textContent = "Clique aqui";
        botao.style.backgroundColor = "#007bff";
    }
    
    console.log("Botão clicado!");
});
