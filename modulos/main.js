import { createCard } from "./js/createcard.js";
import { produtos } from "./js/dados.js";

// 1. Seleção dos Containers: 
const principaisContainer = document.querySelector('[data-id="principais-produtos"]');
const outrosContainer = document.querySelector('[data-id="outros-produtos"]');

produtos.forEach(produto => {
    if (produto.categoria === "principais" && principaisContainer) {
        createCard(principaisContainer, produto.id, produto.img, produto.titulo, produto.descricaoCurta);
    } else if (produto.categoria === "outros" && outrosContainer) {
        createCard(outrosContainer, produto.id, produto.img, produto.titulo, produto.descricaoCurta);
    }
});


// ACESSIBILIDADE

const maxZoom = 140;
const minZoom = 70;

    let tamanhoFonte = parseInt(localStorage.getItem("fontSize")) || 100;

    document.documentElement.style.fontSize = tamanhoFonte + "%";

    function aplicarTamanho() {
        document.documentElement.style.fontSize = tamanhoFonte + "%";

        // Salva no localStorage
        localStorage.setItem("fontSize", tamanhoFonte.toString());
    }

function alterarFonte(tamanho) {


    if (tamanho === 'aumentar') {
        if (tamanhoFonte < maxZoom) {
            tamanhoFonte += 10;
            aplicarTamanho();
        }

    }
    if (tamanho === 'diminuir') {
        if (tamanhoFonte > minZoom) {
            tamanhoFonte -= 10;
            aplicarTamanho();
        }

    }

};

window.alterarFonte = alterarFonte;
