const iconMenuHamburg = document.getElementById('icon-menu-hamburg');
const menuHamburg = document.getElementById('menu-hamburg');

iconMenuHamburg.addEventListener('click', () => {
    menuHamburg.classList.toggle('active');
});