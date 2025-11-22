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

let initialZoom = 100; 
const maxZoom = 140;
const minZoom = 70;


function alterarFonte(tamanho) {


    if (tamanho === 'aumentar') {
        if (initialZoom < maxZoom) {
            initialZoom += 10  ;
        }

    }
    if (tamanho === 'diminuir') {
        if (initialZoom > minZoom) {
            initialZoom -= 10;
        }

    }

    document.documentElement.style.fontSize = initialZoom + "%";



};

window.alterarFonte = alterarFonte;
