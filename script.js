const iconMenuHamburg = document.getElementById('icon-menu-hamburg');
const menuHamburg = document.getElementById('menu-hamburg');
const backdrop = document.getElementById('backdrop');

iconMenuHamburg.addEventListener('click', () => {
    const isOpen = menuHamburg.classList.contains('active')
    toggleStateMenu(isOpen ? 'remove' : 'add');
});

menuHamburg.addEventListener('click', (event) => {
    const elementClicked = event.target.closest('a');
    if (elementClicked) toggleStateMenu('remove')
})

backdrop.addEventListener('click', () => { toggleStateMenu('remove') });

function toggleStateMenu(action) {
    menuHamburg.classList[action]('active');
    iconMenuHamburg.classList[action]('active');
    backdrop.classList[action]('active');
    document.body.classList[action]('stop-scroll');
}