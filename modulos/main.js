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


//FUNÇÃO SCROLL SUAVE
function scrollSuaveAte(elemento, duracao, offset) {
  const destinoY = elemento.getBoundingClientRect().top + window.scrollY + offset;
  const inicioY = window.scrollY;
  const distancia = destinoY - inicioY;
  let inicioTempo = null;

  function animarScroll(tempoAtual) {
    if (!inicioTempo) inicioTempo = tempoAtual;
    const tempoPassado = tempoAtual - inicioTempo;

    const progresso = Math.min(tempoPassado / duracao, 1);
    const ease = 1 - Math.pow(1 - progresso, 3);

    window.scrollTo(0, inicioY + distancia * ease);

    if (tempoPassado < duracao) {
      requestAnimationFrame(animarScroll);
    }
  }

  requestAnimationFrame(animarScroll);
}

// EVENTOS DE CLIQUE NOS ITENS DO MENU

// Botão sobre nós
document.getElementById("sobre-nos").addEventListener("click", () => {
    const destino = document.querySelector(".sobre-nos");
    scrollSuaveAte(destino, 1500, -80);
});
// Botão unidade
document.getElementById("unidade").addEventListener("click", () => {
    const destino = document.querySelector(".map-container");
    scrollSuaveAte(destino, 1500, -140);
});
// Botão produtos
document.getElementById("produtos").addEventListener("click", () => {
    const destino = document.querySelector(".cards-container");
    scrollSuaveAte(destino, 1500, -160);
});