var $window = $(window), mapInstances = [], pluginLoaded = "";
$(document).ready(function(){
    var wow = new WOW({
        boxClass:     'wow',     
        animateClass: 'animated',
        offset:       0,         
        mobile:       true,      
        live:         true       
    });
    wow.init();
	lazyMap({zoom: 8, disableDefaultUI: true, center: 0, scrollwheel: false, scaleControl: false, draggable: false}, false);
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