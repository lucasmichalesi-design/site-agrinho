const database = [
    {
        titulo: "Cooperativismo",
        descricao: "A união de pequenos produtores para ganhar força no mercado e reduzir custos.",
        link: "https://www.embrapa.br"
    },
    {
        titulo: "Sistemas Agroflorestais",
        descricao: "Produção de alimentos mantendo árvores nativas e recuperando o solo.",
        link: "https://www.gov.br/agricultura/pt-br"
    },
    {
        titulo: "Orgânicos",
        descricao: "Técnicas de cultivo sem defensivos químicos, priorizando a saúde do consumidor.",
        link: "https://www.embrapa.br/tema-agricultura-organica"
    }
];

function searchInfo() {
    const input = document.getElementById('searchInput').value.toLowerCase();
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    const filtered = database.filter(item => 
        item.titulo.toLowerCase().includes(input) || 
        item.descricao.toLowerCase().includes(input)
    );

    if (filtered.length === 0) {
        resultsDiv.innerHTML = '<p>Nenhum resultado encontrado para essa busca.</p>';
        return;
    }

    filtered.forEach(item => {
        const card = `
            <div class="card">
                <h3>${item.titulo}</h3>
                <p>${item.descricao}</p>
                <a href="${item.link}" target="_blank" style="color: #71b914; font-weight: bold; text-decoration:none;">Saiba mais &rarr;</a>
            </div>
        `;
        resultsDiv.innerHTML += card;
    });
}

// Carregar cards iniciais
window.onload = searchInfo;
