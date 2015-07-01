function toggleMenu() {
    document.getElementById('menu-itens-list').classList.toggle('active');
}

document.getElementById('menu-mobile-toggle').addEventListener('click', toggleMenu);