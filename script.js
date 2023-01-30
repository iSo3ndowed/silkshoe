const menuBar = document.querySelector(".menu");
const openMenu = document.querySelector(".ri-menu-2-fill");
const closeMenu = document.querySelector(".ri-close-line");

function openMenuBar() {
    menuBar.style.display = "block";
}
function closeMenuBar() {
    menuBar.style.display = "none";
}

openMenu.addEventListener('click', () => {
    openMenuBar();
})
closeMenu.addEventListener('click', () => {
    closeMenuBar();
})

const swiper = new Swiper('.swiper', {
    // Optional parameters
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7000,
      loop: true,
      disableOnInteraction: false,
    },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  AOS.init({
    duration: 1200,
  });
  
