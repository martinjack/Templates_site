$(document).ready(function(){
	$('body').scrollspy({target: ".navbar", offset: 50}); 
	$("#menu a").on('click',function(e){
		if(this.hash !== ""){
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});