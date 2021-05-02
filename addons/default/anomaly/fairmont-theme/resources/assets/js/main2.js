/**
*
* -----------------------------------------------------------------------------
*
* Template : Edulearn | Responsive Education HTML5 Template 
* Author : rs-theme
* Author URI : http://www.rstheme.com/
*
* -----------------------------------------------------------------------------
*
**/

(function($) {
    "use strict";

 
	
	//Slider js 
	/*-------------------------------------
	       Home page Slider
	       -------------------------------------*/	  
	      // Declare Carousel jquery object
	      var owl = $('#home-slider');

	      // Carousel initialization
	      owl.owlCarousel({
	          loop:true,
	          margin:0,
	          navSpeed:800,
	          nav:true,
	          navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
	          items:1,
	          autoplay:true,
	          transitionStyle : "fade",
	      });

	      // add animate.css class(es) to the elements to be animated
	      function setAnimation ( _elem, _InOut ) {
	        // Store all animationend event name in a string.
	        // cf animate.css documentation
	        var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	        _elem.each ( function () {
	          var $elem = $(this);
	          var $animationType = 'animated ' + $elem.data( 'animation-' + _InOut );

	          $elem.addClass($animationType).one(animationEndEvent, function () {
	            $elem.removeClass($animationType); // remove animate.css Class at the end of the animations
	          });
	        });
	      }

	    // Fired before current slide change
	      owl.on('change.owl.carousel', function(event) {
	          var $currentItem = $('.owl-item', owl).eq(event.item.index);
	          var $elemsToanim = $currentItem.find("[data-animation-out]");
	          setAnimation ($elemsToanim, 'out');
	      });

	    // Fired after current slide has been changed
	      owl.on('changed.owl.carousel', function(event) {

	          var $currentItem = $('.owl-item', owl).eq(event.item.index);
	          var $elemsToanim = $currentItem.find("[data-animation-in]");
	          setAnimation ($elemsToanim, 'in');
	      });
	
	/*-------------------------------------
    OwlCarousel
    -------------------------------------*/
	$('.rs-carousel').each(function() {
		var owlCarousel = $(this),
		loop = owlCarousel.data('loop'),
		items = owlCarousel.data('items'),
		margin = owlCarousel.data('margin'),
		stagePadding = owlCarousel.data('stage-padding'),
		autoplay = owlCarousel.data('autoplay'),
		autoplayTimeout = owlCarousel.data('autoplay-timeout'),
		smartSpeed = owlCarousel.data('smart-speed'),
		dots = owlCarousel.data('dots'),
		nav = owlCarousel.data('nav'),
		navSpeed = owlCarousel.data('nav-speed'),
		xsDevice = owlCarousel.data('mobile-device'),
		xsDeviceNav = owlCarousel.data('mobile-device-nav'),
		xsDeviceDots = owlCarousel.data('mobile-device-dots'),
		smDevice = owlCarousel.data('ipad-device'),
		smDeviceNav = owlCarousel.data('ipad-device-nav'),
		smDeviceDots = owlCarousel.data('ipad-device-dots'),
		mdDevice = owlCarousel.data('md-device'),
		mdDeviceNav = owlCarousel.data('md-device-nav'),
		mdDeviceDots = owlCarousel.data('md-device-dots');

		owlCarousel.owlCarousel({
			loop: (loop ? true : false),
			items: (items ? items : 4),
			lazyLoad: true,
			margin: (margin ? margin : 0),
			//stagePadding: (stagePadding ? stagePadding : 0),
			autoplay: (autoplay ? true : false),
			autoplayTimeout: (autoplayTimeout ? autoplayTimeout : 1000),
			smartSpeed: (smartSpeed ? smartSpeed : 250),
			dots: (dots ? true : false),
			nav: (nav ? true : false),
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			navSpeed: (navSpeed ? true : false),
			responsiveClass: true,
			responsive: {
				0: {
					items: (xsDevice ? xsDevice : 1),
					nav: (xsDeviceNav ? true : false),
					dots: (xsDeviceDots ? true : false)
				},
				768: {
					items: (smDevice ? smDevice : 3),
					nav: (smDeviceNav ? true : false),
					dots: (smDeviceDots ? true : false)
				},
				992: {
					items: (mdDevice ? mdDevice : 4),
					nav: (mdDeviceNav ? true : false),
					dots: (mdDeviceDots ? true : false)
				}
			}
		});

	});



    // wow init
    new WOW().init();
    
    // image loaded portfolio init
	var gridfilter = $('.grid');
		if(gridfilter.length){
		$('.grid').imagesLoaded(function() {
			$('.gridFilter').on('click', 'button', function() {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});
			var $grid = $('.grid').isotope({
				itemSelector: '.grid-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.grid-item',
				}
			});
		});
	}
        


	

})(jQuery);