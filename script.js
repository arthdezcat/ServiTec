// Agregar desplazamiento suave al hacer clic en los enlaces del menú
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function (event) {
      // Prevenir el comportamiento predeterminado
      event.preventDefault();
  
      // Obtener el destino del enlace
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#')) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          // Desplazarse suavemente al destino
          window.scrollTo({
            top: targetElement.offsetTop - 50, // Ajustar el desplazamiento
            behavior: 'smooth',
          });
        }
      } else {
        // Redirigir si el enlace no es un ancla (ejemplo: otra página HTML)
        window.location.href = targetId;
      }
    });
  });
  
  // Resaltar dinámicamente la pestaña activa
  window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav a');
  
    let currentSectionId = '';
  
    // Determinar la sección visible en la pantalla
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 60; // Ajustar según el tamaño del header
      const sectionHeight = section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentSectionId = section.getAttribute('id');
      }
    });
  
    // Agregar/remover la clase activa en los enlaces del menú
    navLinks.forEach(link => {
      if (link.getAttribute('href') === `#${currentSectionId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });
  
  // Mostrar/ocultar un botón "volver arriba"
  const scrollTopButton = document.createElement('button');
  scrollTopButton.textContent = '↑';
  scrollTopButton.classList.add('scroll-top-button');
  document.body.appendChild(scrollTopButton);
  
  scrollTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollTopButton.style.display = 'block';
    } else {
      scrollTopButton.style.display = 'none';
    }
  });
  