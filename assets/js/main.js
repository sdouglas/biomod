$(function(){
	$('.posts').flexslider({
		direction : 'vertical',
		pauseOnHover : true,
                directionNav : true,
		controlNav : true,
                controlsContainer : '.post-nav'
                //~ start : function(slider) {
                                //~ $('.post-nav').on('click', function(){ slider.flexAnimate(3) });
                        //~ }
	});
        
        
        var nextBiomod = new Date( 2013, 11-1, 2, 10);   // month is 0-indexed, so subtract 1
        $('.countdown').countdown({ 
                // Since jamboree is in Cambridge, we make sure time is EST, 5 hours behind UTC
                until: $.countdown.UTCDate(-5, nextBiomod), 
                format : 'dHM',
                // {h<}...{h>} means omit hour from display when it reaches zero
                layout :'{d<}<div class="days">{dn}</div><div>{dl}</div>{d>}' +
                        '<div class="time-block">' +
                        '{h<}<div class="hours">{hn}</div><div>{hl}</div>{h>}' +
                        '</div><div class="time-block">' +
                        '<div class="minutes">{mn}</div><div>{ml}</div>' +
                        '</div>'
        });
});
