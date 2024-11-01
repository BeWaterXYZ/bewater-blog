function toggleMobileNav() {
    let mobileNav = document.querySelector('.mobile-nav');
    if (mobileNav.classList.contains('hidden')) {
        mobileNav.classList.remove('hidden');
    } else {
        mobileNav.classList.add('hidden');
    }
}

function main() {
    let navSwitchButton = document.querySelector('.mobile-nav-switch');
    navSwitchButton.addEventListener('click', toggleMobileNav);
}

document.addEventListener('DOMContentLoaded', main);
