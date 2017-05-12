$(document).ready(function(){
	 var swiper = new Swiper('.swiper-container',{
	    direction: 'horizontal',
	    loop: true,
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    autoplay: 5000
	});
	$(".count").html(swiper.slides.length-2); 
});