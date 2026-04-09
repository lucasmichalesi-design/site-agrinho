document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Menu Mobile (Hambúrguer)
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            // Adiciona ou remove a classe "active" que mostra/esconde o menu
            navLinks.classList.toggle('active');
        });
    }

    // 2. Fechar o menu mobile automaticamente ao clicar em um dos links
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // 3. Atualizar dinamicamente o ano no rodapé
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
