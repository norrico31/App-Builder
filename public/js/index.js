const menuToggle = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('nav');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    mainMenu.classList.toggle('active');
})