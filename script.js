const iconMenuHamburg = document.getElementById('icon-menu-hamburg');
const menuHamburg = document.getElementById('menu-hamburg');
const backdrop = document.getElementById('backdrop');

iconMenuHamburg.addEventListener('click', () => {
    if (menuHamburg.classList.add('active')) closeMenu();
    else showMenu();
});

menuHamburg.addEventListener('click', (event) => {
    const elementClicked = event.target.closest('a');
    if (elementClicked) closeMenu();
})

backdrop.addEventListener('click', () => { closeMenu() });

function showMenu() {
    menuHamburg.classList.add('active');
    iconMenuHamburg.classList.add('active');
    backdrop.classList.add('active');
    document.body.classList.add('stop-scroll');
}

function closeMenu() {
     menuHamburg.classList.remove('active');
    iconMenuHamburg.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.classList.remove('stop-scroll');
}