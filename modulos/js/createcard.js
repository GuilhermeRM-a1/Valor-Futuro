export function createCard(container, img, titulo, descricao) {
  const maxCards = 3; // limite por container
  if (container.querySelectorAll('.card').length >= maxCards) {
    return;
  }
  const fragment = document.createDocumentFragment();//cria o fragment
  const card = document.createElement('div');
  card.classList.add('card');

  const imagem = document.createElement('img');
  imagem.classList.add('card-img');
  imagem.src = img;
  imagem.alt = '';

  const h3 = document.createElement('h3');
  h3.classList.add('card-title');
  h3.textContent = titulo;

  const p = document.createElement('p');
  p.classList.add('card-p');
  p.textContent = descricao;

  const buttonCard = document.createElement('button');
  buttonCard.classList.add('card-button');
  buttonCard.textContent = 'Saiba mais';

  card.append(imagem, h3, p, buttonCard);
  container.appendChild(card);
  container.appendChild(fragment); //Cria todos os cards de uma vez
}
