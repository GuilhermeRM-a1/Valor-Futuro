import { produtos } from "./dados.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');

const produtoEncontrado = produtos.find(p => p.id == id);

if (produtoEncontrado) {
    document.getElementById('titulo-produto').textContent = produtoEncontrado.titulo;
    document.getElementById('img-produto').src = "../" + produtoEncontrado.img;
    document.getElementById('descricao-produto').textContent = produtoEncontrado.descricaoLonga;
} else {
    document.querySelector('.detalhe-container').innerHTML = "<h2>Produto não encontrado!</h2><a href='../index.html'>Voltar</a>";
}