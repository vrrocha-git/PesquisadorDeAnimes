import { dados } from "./dados.js";

function pesquisar(){
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    // Verifica se a pesquisa tem apenas um caractere e se é um espaço em branco
    if (campoPesquisa.length < 3) {
        section.innerHTML = `<p class="descricao-meta">Pesquisa inválida: por favor, insira pelo menos 3 caracteres.</p>`;
        return;
    }

    if (campoPesquisa === " ") {
        section.innerHTML = `<p class="descricao-meta">Nenhum resultado encontrado</p>`;
        return;
    }

    if (campoPesquisa === "") {
        section.innerHTML = `<p class="descricao-meta">Nenhum resultado encontrado</p>`;
        return;
    }

    let resultados = "";
    let descricao = "";
    let titulo = "";
    let genero = "";
    let criador = "";

    for (let dado of dados){
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        genero = dado.genero.toLowerCase()
        criador = dado.criador.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || genero.includes(campoPesquisa) || criador.includes(campoPesquisa)){
            //cria um novo elemento
            resultados+=`
            <div class="item-resultado">
                <h2>${dado.titulo}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <p class="descricao-meta"><b>Principais personagens: </b>${dado.principaisPersonagens}</p>
                <p class="descricao-meta"><b>Criador: </b>${dado.criador}</p>
                <p class="descricao-meta"><b>Gênero: </b>${dado.genero}</p>
                <p class="descricao-meta"><b>Ano de Lançamento: </b>${dado.anoLancamento}</p>
                <p class="descricao-meta"><b>Número de Episódios: </b>${dado.numEpisodios}</p>
                <p class="descricao-meta"><b>Estúdio: </b>${dado.estudio}</p>

                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
            `
        }
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;
};

// Obtém o campo de pesquisa e associa a função ao evento de keypress
const campoPesquisa = document.getElementById('campo-pesquisa');
campoPesquisa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        pesquisar();
    }
});

// Obtém o botão e associa a função ao evento de clique
const botaoPesquisar = document.getElementById('botao-pesquisar');
botaoPesquisar.addEventListener('click', pesquisar);
