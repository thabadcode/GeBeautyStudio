const iconMenuHamburg = document.getElementById('icon-menu-hamburg');
const menuHamburg = document.getElementById('menu-hamburg');
const backdrop = document.getElementById('backdrop');

iconMenuHamburg.addEventListener('click', () => { showMenu(); });

function showMenu() {
    menuHamburg.classList.toggle('active');
    iconMenuHamburg.classList.toggle('active');
    backdrop.classList.toggle('active');
}