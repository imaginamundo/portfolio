function toggleMenu(e) {
    document.getElementById('menu-itens-list').classList.toggle('active');

    e.preventDefault();
}

document.getElementById('menu-mobile-toggle').addEventListener('click', toggleMenu);
