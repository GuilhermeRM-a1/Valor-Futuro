import { produtos } from "./dados.js";

const params = new URLSearchParams(window.location.search);
const id = params.get('id');


const produtoEncontrado = produtos.find(p => p.id == id);

if (produtoEncontrado) {
    
    const imagem = document.getElementById('produto-imagem');
    imagem.src = produtoEncontrado.img;
    imagem.alt = produtoEncontrado.titulo;


    document.getElementById('produto-titulo').textContent = produtoEncontrado.titulo;
    document.getElementById('produto-descricao').textContent = produtoEncontrado.descricaoLonga;
    document.getElementById('como-funciona').textContent = produtoEncontrado.comoFunciona;

    const beneficiosLista = document.getElementById('beneficios-lista');
    beneficiosLista.innerHTML = '';
    produtoEncontrado.beneficios.forEach(beneficio => {
        const li = document.createElement('li');
        li.textContent = beneficio;
        beneficiosLista.appendChild(li);
    });

    // Preenche a lista de requisitos
    const requisitosLista = document.getElementById('requisitos-lista');
    requisitosLista.innerHTML = '';
    produtoEncontrado.requisitos.forEach(requisito => {
        const li = document.createElement('li');
        li.textContent = requisito;
        requisitosLista.appendChild(li);
    });

    // Atualiza o breadcrumb
    document.getElementById('breadcrumb-produto').textContent = produtoEncontrado.titulo;

    // Atualiza o título da página
    document.title = `${produtoEncontrado.titulo} - Valor Futuro`;

    // Adiciona evento ao botão de contato
    const btnContato = document.querySelector('.btn-primario');
    if (btnContato) {
        btnContato.addEventListener('click', () => {
            // Scroll suave até o footer de contato
            const footer = document.querySelector('.footer');
            footer.scrollIntoView({ behavior: 'smooth' });
        });
    }

} else {
    // Produto não encontrado
    const container = document.querySelector('.container-detalhes');
    container.innerHTML = `
        <div style="text-align: center; padding: 60px 20px; background: white; border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.1);">
            <h2 style="font-size: 2rem; margin-bottom: 20px; color: #dc3545;">Produto não encontrado!</h2>
            <p style="font-size: 1.1rem; color: #555; margin-bottom: 30px;">O produto que você está procurando não existe ou foi removido.</p>
            <a href="index.html" style="display: inline-block; padding: 15px 30px; background: #007bff; color: white; text-decoration: none; border-radius: 50px; font-weight: 600; transition: all 0.3s;">
                Voltar à Página Principal
            </a>
        </div>
    `;
}

