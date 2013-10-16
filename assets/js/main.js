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
                animation : 'slide',
                slideshow : false,
                sync : '#photos-nav'
        });
        
        
        /*** Countdown timer ***/
        
        var nextBiomod = new Date( 2013, 11-1, 2, 10);   // month is 0-indexed, so subtract 1
        $('.countdown').countdown({ 
                // Since jamboree is in Cambridge, we make sure time is EST, 5 hours behind UTC
                until: $.countdown.UTCDate(-5, nextBiomod), 
                format : 'dHM',
                // {h<}...{h>} means omit hour from display when it reaches zero
                layout :'{d<}<div class="days">{dn}</div><div class="days-label">{dl}</div>{d>}' +
                        '<div class="time-block">' +
                        '{h<}<div class="hours">{hn}</div><div>{hl}</div>{h>}' +
                        '</div><div class="time-block">' +
                        '<div class="minutes">{mn}</div><div>{ml}</div>' +
                        '</div>'
        });
        
        
        /*** Animate scroll to subscribe box ***/
        
        $('.icon-mail').click( function(){
				$('html,body').animate({
					scrollTop: $('#callout').offset().top-50
				}, 1000);
				return false;
        });
});
