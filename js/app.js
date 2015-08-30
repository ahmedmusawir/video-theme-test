jQuery(document).ready(function($) {
	
	// $.stellar();
	// $('#wrapper').tubular({
	// 	videoId: 'WTAHzO1i6Mw',
	// 	wrapperZIndex: -99
	// });

	//video background
								
	if(typeof onetone_bigvideo !== 'undefined' && onetone_bigvideo!=null){
	for(var i=0;i<onetone_bigvideo.length;i++){
	jQuery(onetone_bigvideo[i].video_section_item).tubular(onetone_bigvideo[i].options);
	   }
	  }
	  
	  jQuery(".home-wrapper .section").each(function(){
		if(jQuery(this).find("#tubular-container").length > 0){
			
			jQuery(this).css({"height":(jQuery(window).height()-jQuery("header").height())+"px"});
			jQuery(this).find("#tubular-container,#tubular-player").css({"height":(jQuery(window).height()-jQuery("header").height())+"px"});

		}						
	 });

});