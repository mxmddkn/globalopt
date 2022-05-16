$(document).ready(function(){
    $('.carousel__inner').slick({
      infinite: true,
      easing: 'ease',
      speed: 1000,
      slidesToShow: 1,
      prevArrow: '<button type="button" class="slick-prev"><img src="img/slick-prev.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="img/slick-next.svg"></button>'
    });

const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu');
      closeElem = document.querySelector('.menu__close')

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});
  });