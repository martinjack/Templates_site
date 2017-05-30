$(document).ready(function(){
	 var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 4,
        paginationClickable: true,
        spaceBetween: 30,
        autoplay: 3000
    });
	$(".swiper-slide img").css({
		'margin-bottom' : '25px',
		'width' 		: '100%'
	});
	$(".gallery-lightbox").magnificPopup({
		delegate: 'img',
		type: 'image',
		fixedContentPos: true,
		closeOnContentClick: true,
		closeBtnInside: false,
		midClick: false,
		showCloseBtn: false,
		mainClass: 'mfp-img-mobile',
		image:{
			verticalFit: true
		},
		callbacks:{
			elementParse: function(qw){
				qw.src = qw.el.attr('src');
			}
		},
		zoom:{
			enabled: true,
			duration: 300
		}
	});
});