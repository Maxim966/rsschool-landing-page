import { getProduct } from './menu.js';
import products from '../data/products.json';

let currentProduct = null; 
let selectedSize = 's'; 
let selectedAdditive = null;

const modal = document.querySelector('.modal');
const body = document.body;
const html = document.documentElement;
const modalCloseButton = modal?.querySelector('.modal__close');
const cardsContainer = document.querySelector('.card__list');

const modalTitle = modal?.querySelector('.modal__title');
const modalDescr = modal?.querySelector('.modal__descr');
const modalImage = modal?.querySelector('.modal__image');
const totalPriceElement = modal?.querySelector('.modal__price');

const sizeButtonsContainer = modal?.querySelector('.modal__size-buttons .modal__buttons');
const additiveButtonsContainer = modal?.querySelector('.modal__additives-buttons .modal__buttons');

let scrollPosition = 0;

function calculateTotal() {
  if (!currentProduct) return;

  let total = Number(currentProduct.price);

  const sizeAddPrice = Number(currentProduct.sizes[selectedSize]['add-price']);
  total += sizeAddPrice;

  if (selectedAdditive !== null && currentProduct.additives[selectedAdditive]) {
    const additiveAddPrice = Number(currentProduct.additives[selectedAdditive]['add-price']);
    total += additiveAddPrice;
  }

  if (totalPriceElement) {
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
  }
}

function fillModalData(product) {
  if (!product) return;

  currentProduct = product;
  selectedSize = 's';
  selectedAdditive = null;

  const { name, description, image, sizes, additives } = product;

  modalTitle.textContent = name; 
  modalDescr.textContent = description;
  modalImage.src = new URL(`../assets/images/${image}`, import.meta.url).href;
  modalImage.alt = name;

  const sizeButtons = sizeButtonsContainer?.querySelectorAll('.tabs__button');
  const sizeKeys = Object.keys(sizes);
  
  sizeButtons?.forEach((btn, index) => {
    const key = sizeKeys[index];
    btn.dataset.index = index;
    const textSpan = btn.querySelector('.tabs__text');
    if (textSpan && sizes[key]) {
      textSpan.textContent = sizes[key].size;
    }
    btn.classList.toggle('modal__button--active', key === selectedSize);
  });

  const additiveButtons = additiveButtonsContainer?.querySelectorAll('.tabs__button');
  
  additiveButtons?.forEach((btn, index) => {
    btn.dataset.index = index;
    const textSpan = btn.querySelector('.tabs__text');
    if (textSpan && additives[index]) {
      textSpan.textContent = additives[index].name;
    }

    btn.classList.remove('modal__button--active');
  });

  calculateTotal();
}

function openProductModal(event) {
  const card = event.target.closest('.card__item');

  if (card && modal) {
    scrollPosition = window.pageYOffset;
    body.classList.add('stop-scroll');
    body.style.top = `-${scrollPosition}px`;

    const productName = card.dataset.name;  
    const product = getProduct(products, productName); 
    fillModalData(product);
    modal.showModal();
  }
}

function closeModal() {
  html.style.scrollBehavior = 'auto';
  modal?.close();
  body.classList.remove('stop-scroll');
  body.style.top = '';

  window.scrollTo(0, scrollPosition);
  html.style.scrollBehavior = '';
}

cardsContainer?.addEventListener('click', openProductModal);
modalCloseButton?.addEventListener('click', closeModal);

modal?.addEventListener('click', (event) => {
  const rect = modal.getBoundingClientRect();
  const isClickOutside = (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  );

  if (isClickOutside) closeModal();
});

sizeButtonsContainer?.addEventListener('click', (event) => {
  const button = event.target.closest('.tabs__button');
  if (!button) return;

  const index = Number(button.dataset.index);
  const sizeKeys = ['s', 'm', 'l'];
  selectedSize = sizeKeys[index];

  const buttons = sizeButtonsContainer.querySelectorAll('.tabs__button');
  buttons.forEach((btn, i) => btn.classList.toggle('modal__button--active', i === index));

  calculateTotal();
});

additiveButtonsContainer?.addEventListener('click', (event) => {
  const button = event.target.closest('.tabs__button');
  if (!button) return;

  const buttons = Array.from(additiveButtonsContainer.querySelectorAll('.tabs__button'));
  const index = buttons.indexOf(button);
  if (index === -1) return;

  if (selectedAdditive === index) {
    selectedAdditive = null;
  } else {
    selectedAdditive = index;
  }

  buttons.forEach((btn, i) => {
    btn.classList.toggle('modal__button--active', i === selectedAdditive);
  });

  calculateTotal();
});