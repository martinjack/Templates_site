$(document).ready(function(){
	var wow = new WOW({
      boxClass:     'wow',     
      animateClass: 'animated',
      offset:       0,         
      mobile:       true,      
      live:         true       
    });
    wow.init();
	$("#menu a").on('click',function(e){
		if(this.hash !== ""){
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1000, function(){
				window.location.hash = hash;
			});
		}
	});
});