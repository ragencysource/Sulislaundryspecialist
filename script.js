'use strict';

// ===============================
// MENU MOBILE & OVERLAY
// ===============================
const navOpenBtn = document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');
const navbar = document.querySelector('[data-navbar]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for(let i = 0; i < navElemArr.length; i++) {
    navElemArr[i].addEventListener('click', function() {
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
    });
}

// ===============================
// HEADER & GO TOP BUTTON SCROLL
// ===============================
const header = document.querySelector('[data-header]');
const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function() {
    if (window.scrollY >= 20) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
    
    if (window.scrollY >= 800) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
});


// === KODE BARU DENGAN AUTOPLAY ===
var swiper = new Swiper('.quality-slider', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    // --- BLOK BARU UNTUK AUTOPLAY ---
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    },
    // --------------------------------
    breakpoints: {
      // saat lebar layar >= 640px
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // saat lebar layar >= 1024px
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    }
});