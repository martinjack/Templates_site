$(document).ready(function(){
	$('body').scrollspy({target: ".navbar", offset: 50}); 
	$("#menu a").on('click',function(e){
		if(this.hash !== ""){
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 2000, function(){
				window.location.hash = hash;
			});
		}
	});
	var swiper = new Swiper('.swiper-container', {
		direction: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000
	});
	// $("a[data-toggle='collapse']").click(function(){
	// 	if($(this).hasClass("collapsed")){
	// 		$(this).parent().parent().addClass("active-acco");
	// 		console.log($(this).parent().parent());
	// 	}else{
	// 		$(".card-header").removeClass("active-acco");
	// 	}
		
	// });
	// $("#accordion").on("shown.bs.collapse", function(){
	// 	$(".card-header").each(function(){
	// 		$(this).removeClass("active-acco");
	// 	});
	// 	$(".card-header").addClass("active-acco");
	// });
});