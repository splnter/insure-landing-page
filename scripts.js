const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
    const mobileNav = document.querySelector('.main-nav')
    const hamburger = document.querySelector('.nav-toggle__hamburger')
    mobileNav.classList.toggle('is-open')
    hamburger.classList.toggle('is-open')
});
