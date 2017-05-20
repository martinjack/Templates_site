// var map, map_contact;
// function initMap() {
//     map = new google.maps.Map(document.getElementById('map'), {
//     	center: {lat: -33.851584, lng: 151.0094069},
//     	zoom: 8,
//     	disableDefaultUI: true,
//     	scaleControl: false,
//     	draggable: false,
//     	scrollwheel: false
//     });
//     map_contact = new google.maps.Map(document.getElementById('map-contact'),{
//     	center: {lat: -33.851584, lng: 151.0094069},
//     	zoom: 8,
//     	disableDefaultUI: true,
//     	scaleControl: false,
//     	draggable: false,
//     	scrollwheel: false
//     });
// }
$(document).ready(function(){

	var $window = $(window), mapInstances = [], pluginLoaded = "";
	$('body').scrollspy({target: ".navbar", offset: 50}); 
	$("#menu a").on('click',function(e){
		if(this.hash !== ""){
			e.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 1500, function(){
				window.location.hash = hash;
			});
		}
	});
	var swiper = new Swiper('.slider-people', {
		direction: 'horizontal',
		loop: true,
		pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 5000
	});
	var sliderSpon = new Swiper('.slider-sponsors', {
		direction: 'horizontal',
		loop: true,
		nextButton: '.btn-right',
		prevButton: '.btn-left',
		autoplay: 5000
	});	
	var wow = new WOW({
      boxClass:     'wow',     
      animateClass: 'animated',
      offset:       0,         
      mobile:       true,      
      live:         true       
    });
    wow.init();
    lazyMap({zoom: 8, disableDefaultUI: true, center: 0, scrollwheel: false, scaleControl: false, draggable: false});
    function lazyMap(options = [], marker = true){
    	pluginLoaded = $('.google-map').lazyLoadGoogleMaps({
    		callback:function(container, map){
    			var $container = $(container),
    				center = new google.maps.LatLng($container.attr('data-lat'), $container.attr('data-lng'));
    			options['center'] = center;
    			map.setOptions(options);
    			if(marker){
    				new google.maps.Marker({
	    				position: center,
	    				map: map
    				});
    			}
    			$.data(map, 'center', center);
    			mapInstances.push(map);
    			var updateCenter = function(){
    				$.data(map, 'center', map.getCenter);
    			};
    			google.maps.event.addListener(map, 'dragend', updateCenter);
    			google.maps.event.addListener(map, 'zoom_changed', updateCenter);
    			google.maps.event.addListener(map, 'idle', function(){
    				$container.addClass('is-loaded');
    			});
    		}
    	});
    	$window.on('resize', pluginLoaded.debounce(1000), function(){
    		$.each(mapInstances, function(){
    			this.setCenter($.data(this, 'center'));
    		});
    	});
    }
});