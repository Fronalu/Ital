const swiper = new Swiper('.swiper',{
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    speed: 1000,
    loop: true,
    keyboard: {
        enabled: true,
    }
})



const burgerMenu = document.querySelector('.burger-menu');
const responsiveButton = document.querySelector('.info-responsive');
const responsiveList = document.querySelector('.info-responsive__list');
const burgerList = document.querySelector('.burger-list');
const headerContainer = document.querySelector('.header-container');
const burgerItems = document.querySelectorAll('.burger-list__item');


burgerMenu.addEventListener('click', function(){ 
    burgerMenu.classList.toggle('burger-active');
    burgerList.classList.toggle('burger-list__active');
    burgerMenu.classList.toggle('burger-list__active');
    document.body.classList.toggle('_lock');
    burgerItems.forEach((item) => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('burger-active');
            burgerList.classList.remove('burger-list__active');
            burgerMenu.classList.remove('burger-list__active');
            document.body.classList.remove('_lock');
        });
    });
});

responsiveButton.addEventListener('click', () => {
    responsiveList.classList.toggle('list-active');
});