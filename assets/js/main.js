$(function(){

    /*** Slideshows ***/
        
		/* Front page: carousel */
		
		$('#big-slider').flexslider({
			animation : 'slide',
			controlNav : false,
			directionNav : true,
			direction : 'horizontal',
			pauseOnHover : true
		});
        
		/* Front page: photos */
		
        // The slider being synced (the thumbnails one) must be initialized first
        $('#photos-nav').flexslider({
                animation : "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 180,
                itemMargin: 5,
				asNavFor: "#photos"
			});
			
			/*
                asNavFor : '#photos'
        });
		
	    animation: "slide",
	    controlNav: false,
	    animationLoop: false,
	    slideshow: false,
	    sync: "#carousel"
		*/
		
        $('#photos').flexslider({
				controlNav : false,
                directionNav : false,
                animationLoop : false,
                animation : 'fade',
                slideshow : false,
                sync : '#photos-nav'
        });

		/* Secondary pages: sidebar photos */
		
        $('#sidebar-photos').flexslider({
                controlNav : false,
                directionNav : false,
                animationLoop : true,
                animation : 'slide',
                slideshow : true,
        });

	/*** Countdown timer ***/
        
        // The month in javascript's Date constructor is 0-indexed,
        // so for clarity we can use the numeric month but explicity subtract 1 inline
		// Date( year, month-1, day, hour )
        var nextBiomod = new Date(2014, 4-1, 30, 23, 59); // registration date: April 30th, 2014 -- 11:59 pm        
		// var nextBiomod = new Date(2014, 11-1, 1, 9); // Jamboree date: November 1st, 2014 -- 9am?
        var now = new Date();
        if ( now.valueOf() < nextBiomod.valueOf() ) {
                // Jamboree is still in the future
                // initialize timer
                $('.underway').hide();
                $('.countdown').countdown({
                        // Since jamboree is in Cambridge before daylight saving time ends (first Sunday in Nov),
                        // we make sure time is EDT, i.e. 4 hours behind UTC
                        until: $.countdown.UTCDate(-4, nextBiomod), 
                        format : 'dHM',
                        // {h<}...{h>} means omit hour from display when it reaches zero
                        layout :'<div class="days">{dn}</div><div class="days-label">{dl}</div>' +
                                '<div class="time-block">' +
                                '<div class="hours">{hn}</div><div>{hl}</div>' +
                                '</div><div class="time-block">' +
                                '<div class="minutes">{mn}</div><div>{ml}</div>' +
                                '</div>'
                });
        }        
        
    /*** Animate scroll to subscribe box ***/
        
        $('.scroll-mail').click( function(){
				$('html,body').animate({
					scrollTop: $('#callout').offset().top-50
				}, 1000);
				return false;
        });
		
		$('.video-row').hide();
		$('#bionano-vid a').click( function(){
			$('.video-row').slideDown();
			$('html,body').animate({
				scrollTop: $('.video-row').offset().top-50
			}, 1000);
			return false;
		});
		$('.video-row .close').click( function(){
			$('.video-row').slideUp();
			return false;
		})
});
