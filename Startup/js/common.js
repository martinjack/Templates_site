$(document).ready(function(){
    var swiper = new Swiper('.creator-swiper', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 5000,
        breakpoints:{
        	768:{slidesPerView: 1},
        	992:{slidesPerView: 2},
        	1200:{slidesPerView: 3}
        },
        nextButton: 'swiper-button-next',
        prevButton: 'swiper-button-prev',
        loop: true
    });
    var clienSwipe = new Swiper('.clients-swiper',{
    	pagination: '.swiper-pagination',
    	autoplay: 5000,
        loop: true
    });
});