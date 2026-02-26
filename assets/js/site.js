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

  const translations = {
    en: {
      'hero-region': 'Jacksonville & Northeast Florida',
      'hero-headline': 'Mobile Diesel Mechanic and Tire Service — We Come to You.',
      'hero-subhead': 'Blacktop Diesel and Tire handles on-site diagnostics, roadside diesel repair, and mobile tire service for work trucks, fleets, and owner-operators.',
      'services-heading': 'Services',
      'service1-title': 'Roadside Diesel Repair',
      'service1-body': 'No-start, breakdown, and emergency repair support to get your truck moving safely.',
      'service2-title': 'Mobile Diesel Diagnostics',
      'service2-body': 'On-site fault code scans and troubleshooting for engine, fuel, and electrical issues.',
      'service3-title': 'Mobile Tire Service',
      'service3-body': 'On-location tire changes, replacements, and support for commercial diesel vehicles.',
      'areas-heading': 'Service Areas',
      'areas-lead': 'Select your city for dedicated local service info.',
      'gallery-heading': 'Field Work Gallery',
      'cta-call': 'Call',
      'cta-text': 'Text',
      'legal-privacy': 'Privacy Policy',
      'legal-terms': 'Terms & Conditions',
      'legal-about': 'About Us',
      'lightbox-close': 'Close'
    },
    es: {
      'hero-region': 'Jacksonville y Noreste de Florida',
      'hero-headline': 'Mecánica diésel móvil y servicio de llantas — Vamos a donde estés.',
      'hero-subhead': 'Blacktop Diesel and Tire realiza diagnósticos en sitio, reparaciones diésel en carretera y servicio móvil de llantas para camiones de trabajo, flotas y dueños-operadores.',
      'services-heading': 'Servicios',
      'service1-title': 'Reparación diésel en carretera',
      'service1-body': 'Arranque, averías y reparaciones de emergencia para que tu camión vuelva a moverse con seguridad.',
      'service2-title': 'Diagnóstico diésel móvil',
      'service2-body': 'Escaneo de códigos y solución de fallas en sitio para problemas de motor, combustible y eléctricos.',
      'service3-title': 'Servicio móvil de llantas',
      'service3-body': 'Cambios y reemplazos de llantas en el lugar para vehículos diésel comerciales.',
      'areas-heading': 'Áreas de servicio',
      'areas-lead': 'Selecciona tu ciudad para ver la información local del servicio.',
      'gallery-heading': 'Galería de trabajos en campo',
      'cta-call': 'Llamar',
      'cta-text': 'Texto',
      'legal-privacy': 'Política de privacidad',
      'legal-terms': 'Términos y condiciones',
      'legal-about': 'Sobre nosotros',
      'lightbox-close': 'Cerrar'
    }
  };

  const applyLanguage = (lang) => {
    const map = translations[lang] || translations.en;
    document.documentElement.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && map[key]) el.textContent = map[key];
    });
    const toggle = document.querySelector('[data-lang-toggle]');
    if (toggle) toggle.textContent = lang === 'en' ? 'ES' : 'EN';
  };

  const langToggle = document.querySelector('[data-lang-toggle]');
  if (langToggle) {
    let current = 'en';
    applyLanguage(current);
    langToggle.addEventListener('click', () => {
      current = current === 'en' ? 'es' : 'en';
      applyLanguage(current);
    });
  }
})();
