
function reservarLivro() {
    const form = document.querySelector('.form');
    const result = document.querySelector('.resultado');
    const mensagem = document.querySelector('.mensagem')

    var livros = {
        "cleancode": "Código Limpo: Habilidades Práticas do Agile Software - Rober C. Martin",
        "padroes": "Padrões de Projetos: Soluções Reutilizáveis de Software Orientado a Objetos - Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides",
        "teoria": "Introdução à Teoria da Computação - Michael Sipser",
        "pragmatico": "O Programador Pragmático: Seu Caminho para a Maestria - Andrew Hunt e David",
        "estrutura": "Estrutura e Interpretação de Programas de Computador - Harold Abelson e Gerald Jay Sussman",
        "java": "Java Efetivo - Joshua Bloch",
        "arquitetura": "Arquitetura Limpa: O Guia do Artesão para Estrutura e Design de Software - Robert C. Martin",
        "python": "Use a Cabeça! Python - Paul Barry e David Griffiths",
        "refatoracao": "Refatoração: Aperfeiçoando o Design de Código Existente - Martin Fowler"
    };
    
    function getEvent(evento) {
        evento.preventDefault();
        const image = form.querySelector('input[name="livro"]:checked');
        if (image === null) {
            mensagem.innerHTML = `Por favor, selecione um livro!`
            mensagem.style.backgroundColor = "#B22222";
            mensagem.style.display = "flex";
            mensagem.alignItems = "center";
            mensagem.justifyContent = "center";
        } else {
            const imageValue = image.value
            const detalhes = livros[imageValue];
            const data = new Date();
            const opcoes = {
                dateStyle: 'full',
                timeStyle: 'full',
            };
            dataString = data.toLocaleString('pt-BR', opcoes);

            mensagem.innerHTML = `Empréstimo realizado com sucesso!`
            mensagem.style.backgroundColor = "rgb(184,236,184)";
            mensagem.style.display = "flex";
            mensagem.alignItems = "center";
            mensagem.justifyContent = "center";

            result.innerHTML = `<p>Livro: ${detalhes}</p>`
            result.innerHTML += `<p>Horário: ${dataString}</p>`
        }
    }
    
    form.addEventListener('submit', getEvent)
}

reservarLivro();

