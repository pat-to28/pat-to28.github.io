const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Abre/cierra el menú
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation(); // Evita que el clic en el botón cierre el menú inmediatamente
    navMenu.classList.toggle('open');
  });

  // Cierra el menú al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (
      navMenu.classList.contains('open') &&
      !navMenu.contains(e.target) &&
      !toggleBtn.contains(e.target)
    ) {
      navMenu.classList.remove('open');
    }
  });