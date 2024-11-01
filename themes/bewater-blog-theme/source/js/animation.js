let previousWindowScrollY = window.scrollY;
let mediumMenu;
let menu;
let menuNavButton;

function scrollHandler() {
    if (window.scrollY == 0 || window.scrollY == previousWindowScrollY) {
        mediumMenu.classList.remove(
            'animate__fadeInDown',
            'animate__fadeOutUp',
            'border'
        );
    } else if (window.scrollY > previousWindowScrollY) {
        menu.classList.add('animate__fadeOutUp');
        menu.classList.remove('animate__fadeInDown');
        mediumMenu.classList.add('animate__fadeOutUp');
        mediumMenu.classList.remove('animate__fadeInDown', 'border');
    } else {
        menu.classList.add('animate__fadeInDown');
        menu.classList.remove('animate__fadeOutUp');
        mediumMenu.classList.add('animate__fadeInDown', 'border');
        mediumMenu.classList.remove('animate__fadeOutUp');
    }
    previousWindowScrollY = window.scrollY;
}

function main() {
    mediumMenu = document.querySelector('.animate-menu-md');
    menu = document.querySelector('.animate-menu');
    menuNavButton = document.querySelector('.A');
    document.addEventListener('scroll', scrollHandler);
}

document.addEventListener('DOMContentLoaded', main);
