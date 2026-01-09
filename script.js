'use strict';

const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');
const navLinks = document.querySelectorAll('.navbar-link');

const navElemArr = [navOpenBtn, navCloseBtn, overlay, ...navLinks];

if (navOpenBtn && navCloseBtn && overlay && navbar) {
    for (let i = 0; i < navElemArr.length; i++) {
        navElemArr[i].addEventListener('click', function () {
            navbar.classList.toggle('active');
            overlay.classList.toggle('active');
        });
    }
}

const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function () {
    if (window.scrollY >= 20) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

    if (window.scrollY >= 500) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});

var swiper = new Swiper('.quality-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
});