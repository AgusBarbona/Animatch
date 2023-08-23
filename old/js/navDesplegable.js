document.addEventListener('DOMContentLoaded', function() {
    const openMenuBtn = document.getElementById('open');
    const closeMenuBtn = document.getElementById('close');
    const navMenu = document.getElementById('nav');

    openMenuBtn.addEventListener('click', function() {
        navMenu.classList.add('open');
        openMenuBtn.style.display = 'none';  /* Oculta el botón de abrir */
        closeMenuBtn.style.display = 'block'; /* Muestra el botón de cerrar */
    });

    closeMenuBtn.addEventListener('click', function() {
        navMenu.classList.remove('open');
        openMenuBtn.style.display = 'block'; /* Muestra el botón de abrir */
        closeMenuBtn.style.display = 'none';  /* Oculta el botón de cerrar */
    });
});
