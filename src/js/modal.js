const modal = document.querySelector('.modal');
const body = document.body;
const html = document.documentElement;
const modalCloseButton = modal?.querySelector('.modal__close');
const cardsContainer = document.querySelector('.card__list');

let scrollPosition = 0;

function openProductModal(event) {
  const card = event.target.closest('.card__item');

  scrollPosition = window.pageYOffset;
	body.classList.add('stop-scroll');
	body.style.top = `-${scrollPosition}px`;

  if (card && modal) {
    modal.showModal();
  }
}

function closeModal() {
  html.style.scrollBehavior = 'auto';
	modal.close();
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

  if (isClickOutside) {
    closeModal();
  }
});
