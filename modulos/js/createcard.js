export function createCard(container, id, img, titulo, descricao) {
  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.classList.add('card-img');
  imagem.src = img;
  imagem.alt = titulo;

  const h3 = document.createElement('h3');
  h3.classList.add('card-title');
  h3.textContent = titulo;

  const p = document.createElement('p');
  p.classList.add('card-p');
  p.textContent = descricao;

  const buttonCard = document.createElement('button');
  buttonCard.classList.add('card-button');
  buttonCard.textContent = 'Saiba mais';

  // Configura o clique para abrir a página de detalhes do produto
  buttonCard.addEventListener('click', () => {
  window.location.href = `detalhes.html?id=${id}`;
  });

  card.append(imagem, h3, p, buttonCard);
  container.appendChild(card);
}