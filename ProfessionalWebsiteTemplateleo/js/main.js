$(document).ready(function () {
	    var swiper = new Swiper ('.swiper-container', {
	      direction: 'horizontal',
	      loop: true,
	      nextButton: '.swiper-button-next',
    	  prevButton: '.swiper-button-prev',
    	  autoplay: 5000
	    });
	    $(".block-1 div").click(function(e){
	    	e.preventDefault();
	    	if(!$(this).hasClass("active")){
	    		$(".block-1 div").each(function(){
	    			$(this).removeClass("active").addClass("click");
	    		});
	    		$(this).addClass("active").removeClass("click");
	    	}
	    	
	    });        
	});