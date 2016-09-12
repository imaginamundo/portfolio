'use strict';

var CACHE_NAME = 'cache-portfolio-v1';
var urlsToCache = [
    '/portfolio/',
    '/portfolio/css/styles.css',
    '/portfolio/img/trabalho/ceara-flex.png',
    '/portfolio/img/trabalho/css-framework.png',
    '/portfolio/img/trabalho/faculdade-impacta.png',
    '/portfolio/img/trabalho/goffer-e-commerce.jpg',
    '/portfolio/img/trabalho/goffer-marca.jpg',
    '/portfolio/img/trabalho/imagina-mundo.png',
    '/portfolio/img/trabalho/k2music.jpg',
    '/portfolio/img/trabalho/know-your-destiny.png',
    '/portfolio/img/trabalho/santander-caminhos-e-escolhas.png',
    '/portfolio/img/trabalho/square.png',
    '/portfolio/js/script.js'
];

self.addEventListener('install', function(event) {
    // Perform install steps
    event.waitUntil(
    caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});