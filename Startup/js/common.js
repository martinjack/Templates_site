$(document).ready(function(){
	var wow = new WOW({
	    boxClass:     'wow',     
	    animateClass: 'animated',
	    offset:       0,         
	    mobile:       true,      
	    live:         true       
    });
    wow.init();
    var swiper = new Swiper('.creator-swiper', {
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 5000
    });
    var clienSwipe = new Swiper('.clients-swiper',{
    	pagination: '.swiper-pagination',
    	autoplay: 5000
    });
    $(window).resize(function(){
        var ww = $(window).width();
        if(ww > 1200) swiper.params.slidesPerView = 4;
        if(ww < 1200) swiper.params.slidesPerView = 3;
        if(ww < 992)  swiper.params.slidesPerView = 2;
        if(ww < 768)  swiper.params.slidesPerView = 1;
        swiper.update();
    });
    $(window).trigger('resize');
});