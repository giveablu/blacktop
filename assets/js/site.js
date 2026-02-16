(function () {
  const slider = document.querySelector('[data-hero-slider]');
  if (slider) {
    const images = (slider.getAttribute('data-images') || '').split(',').map((item) => item.trim()).filter(Boolean);
    if (images.length > 0) {
      slider.style.backgroundImage = `url(${images[0]})`;
    }
  }

  const lightbox = document.querySelector('[data-lightbox]');
  const lightboxImg = document.querySelector('[data-lightbox-img]');
  const closeBtn = document.querySelector('[data-lightbox-close]');
  const galleryButtons = document.querySelectorAll('[data-gallery-img]');

  if (lightbox && lightboxImg && galleryButtons.length) {
    galleryButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const src = button.getAttribute('data-gallery-img');
        if (!src) return;
        lightboxImg.setAttribute('src', src);
        lightbox.classList.add('open');
      });
    });
    const close = () => lightbox.classList.remove('open');
    lightbox.addEventListener('click', close);
    if (closeBtn) closeBtn.addEventListener('click', close);
    lightboxImg.addEventListener('click', (event) => event.stopPropagation());
  }
})();
