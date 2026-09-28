import products from '../data/products.json';

const cardsContainer = document.querySelector('.card__list');
const categoryButtons = document.querySelectorAll('.tabs__button[data-category]');


function createProduct(product) {
  const li = document.createElement('li');
  li.classList.add('card__item');

  const div1 = document.createElement('div');
  div1.classList.add('card__wrap');

  const img = document.createElement('img');
  img.classList.add('card__image');
  img.src = new URL(`../assets/images/${product.image}`, import.meta.url).href;
  img.alt = product.name;
  div1.append(img);

  const div2 = document.createElement('div');
  div2.classList.add('card__item-content');

  const h3 = document.createElement('h3');
  h3.classList.add('card__title');
  h3.textContent = product.name;

  const p = document.createElement('p');
  p.classList.add('card__descr');
  p.textContent = product.description;

  const span = document.createElement('span');
  span.classList.add('card__price');
  span.textContent = `$${product.price}`;
  div2.append(h3, p, span);

  li.append(div1, div2);
  return li;
}

function createProducts(products, category) {
  if (!cardsContainer) {
    return;
  }

  cardsContainer.replaceChildren();

  products
    .filter((item) => item.category === category)
    .forEach((item) => {
      cardsContainer.append(createProduct(item));
    });
}

function toggleProducts(event) {
  const activeButton = event.currentTarget;
  const category = activeButton.dataset.category;

  categoryButtons.forEach((button) => {
    button.classList.remove('tabs__button--active');
  });

  activeButton.classList.add('tabs__button--active');
  
  createProducts(products, category);
}

categoryButtons.forEach((button) => {
  button.addEventListener('click', toggleProducts);
});

createProducts(products, 'coffee');