// Função para destacar conceitos importantes
function destacarConceitos() {
    const dataAtual = new Date().toLocaleDateString('pt-BR');
    console.log(`Sistema de Educação Digital iniciado em: ${dataAtual}`);
}

// Logica para explicar termos via clique (Exemplo de IA)
document.addEventListener('DOMContentLoaded', () => {
    destacarConceitos();

    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', () => {
            section.style.backgroundColor = '#e8f0fe';
        });
        
        section.addEventListener('mouseleave', () => {
            section.style.backgroundColor = '#f8f9fa';
        });
    });

    console.log("Módulos de Pensamento Computacional e IA prontos para exploração.");
});
