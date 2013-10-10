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
});
