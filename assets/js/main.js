$(function(){

        /*** Slideshows ***/
        
	$('.posts').flexslider({
		direction : 'vertical',
		pauseOnHover : true,
                directionNav : true,
		controlNav : true,
                controlsContainer : '.post-nav'
	});
        
        // The slider being synced (the thumbnails one) must be initialized first
        $('#photos-nav').flexslider({
                animation : "slide",
                controlNav: false,
                directionNav : false,
                animationLoop: false,
                slideshow: false,
                itemWidth: 180,
                itemMargin: 5,
                asNavFor : '#photos'
        });
        $('#photos').flexslider({
		controlNav : false,
                directionNav : false,
                animationLoop : false,
                animation : 'fade',
                slideshow : false,
                sync : '#photos-nav'
        });
        
        $('#sidebar-photos').flexslider({
                controlNav : false,
                directionNav : false,
                animationLoop : true,
                animation : 'slide',
                slideshow : true,
        });

        /*** Countdown timer ***/
        
        // month in javascript's Date is 0-indexed,
        // so for clarity we can use the numeric month but explicity subtract 1 inline
        var nextBiomod = new Date(2013, 11-1, 2, 8);
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
        
        $('.icon-mail').click( function(){
				$('html,body').animate({
					scrollTop: $('#callout').offset().top-50
				}, 1000);
				return false;
        });
});
