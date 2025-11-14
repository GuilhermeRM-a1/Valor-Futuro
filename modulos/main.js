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