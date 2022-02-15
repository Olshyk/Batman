const swiper = new Swiper('.main-slider', {
  slidesPerView: 2,
  spaceBetween: 28,
  loop: true,
  navigation: {
    nextEl: '.main-slider-arrow',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    }
  }
});

const modal = document.querySelector('.modal');
const buttonModal = document.querySelector('.main-button-play');

buttonModal.addEventListener('click', () => {
  modal.classList.add('active');
});
modal.addEventListener('click', (e) => {
  const isModal = e.target.closest('.modal-inner')
  if(!isModal) { 
    modal.classList.remove('active');
  }
});