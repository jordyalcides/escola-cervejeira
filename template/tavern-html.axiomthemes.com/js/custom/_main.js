jQuery(window).load(function() {
    "use strict";
    preloader();
})

jQuery(document).ready(function() {
    "use strict";
	glogals_init();
	main_slider_init();
	essential_grid_init();
	slider_range();
	woo_review_star();
});

var tribe_js_config = {"permalink_settings":"\/%postname%\/","events_post_type":"tribe_events","events_base":"#"};


/* globals */
function glogals_init(){
    "use strict";
	AXIOM_GLOBALS["strings"] = {
	bookmark_add: 		"Add the bookmark",
	bookmark_added:		"Current page has been successfully added to the bookmarks. You can see it in the right panel on the tab \'Bookmarks\'",
	bookmark_del: 		"Delete this bookmark",
	bookmark_title:		"Enter bookmark title",
	bookmark_exists:		"Current page already exists in the bookmarks list",
	search_error:		"Error occurs in AJAX search! Please, type your query and press search icon for the traditional search way.",
	email_confirm:		"On the e-mail address <b>%s</b> we sent a confirmation email.<br>Please, open it and click on the link.",
	reviews_vote:		"Thanks for your vote! New average rating is:",
	reviews_error:		"Error saving your vote! Please, try again later.",
	error_like:			"Error saving your like! Please, try again later.",
	error_global:		"Global error text",
	name_empty:			"The name can\'t be empty",
	name_long:			"Too long name",
	email_empty:			"Too short (or empty) email address",
	email_long:			"Too long email address",
	email_not_valid:		"Invalid email address",
	subject_empty:		"The subject can\'t be empty",
	subject_long:		"Too long subject",
	text_empty:			"The message text can\'t be empty",
	text_long:			"Too long message text",
	send_complete:		"Send message complete!",
	send_error:			"Transmit failed!",
	login_empty:			"The Login field can\'t be empty",
	login_long:			"Too long login field",
	password_empty:		"The password can\'t be empty and shorter then 5 characters",
	password_long:		"Too long password",
	password_not_equal:	"The passwords in both fields are not equal",
	registration_success:"Registration success! Please log in!",
	registration_failed:	"Registration failed!",
	geocode_error:		"Geocode was not successful for the following reason:",
	googlemap_not_avail:	"Google map API not available!",
	editor_save_success:	"Post content saved!",
	editor_save_error:	"Error saving post data!",
	editor_delete_post:	"You really want to delete the current post?",
	editor_delete_post_header:"Delete post",
	editor_delete_success:	"Post deleted!",
	editor_delete_error:		"Error deleting post!",
	editor_caption_cancel:	"Cancel",
	editor_caption_close:	"Close"
	};
	AXIOM_GLOBALS['ajax_url']		= '#';
	AXIOM_GLOBALS['ajax_nonce']		= '1c9231726c';
	AXIOM_GLOBALS['ajax_nonce_editor'] = '5ea123bc75';
	AXIOM_GLOBALS['site_url']		= '#';
	AXIOM_GLOBALS['vc_edit_mode']	= false;
	AXIOM_GLOBALS['theme_font']		= '';
	AXIOM_GLOBALS['theme_skin']		= 'default';
	AXIOM_GLOBALS['theme_skin_bg']	= '';
	AXIOM_GLOBALS['slider_height']	= 100;
	AXIOM_GLOBALS['system_message']	= {
		message: '',
		status: '',
		header: ''
	};
	AXIOM_GLOBALS['user_logged_in']	= false;
	AXIOM_GLOBALS['toc_menu']		= 'fixed';
	AXIOM_GLOBALS['toc_menu_home']	= false;

	if (jQuery("body.toc_menu").length > 0) {
		AXIOM_GLOBALS['toc_menu_top']	= true;
	}else {
		AXIOM_GLOBALS['toc_menu_top']	= false;
	}
	
	if (jQuery("body.menu_nofixed").length > 0) {
		AXIOM_GLOBALS['menu_fixed']		= false;
	}else {
		AXIOM_GLOBALS['menu_fixed']		= true;
	}
	AXIOM_GLOBALS['menu_relayout']	= 960;
	AXIOM_GLOBALS['menu_responsive']	= 959;
	AXIOM_GLOBALS['menu_slider']     = false;
	AXIOM_GLOBALS['demo_time']		= 500;
	AXIOM_GLOBALS['media_elements_enabled'] = true;
	AXIOM_GLOBALS['ajax_search_enabled'] 	= true;
	AXIOM_GLOBALS['ajax_search_min_length']	= 3;
	AXIOM_GLOBALS['ajax_search_delay']		= 200;
	AXIOM_GLOBALS['css_animation']      = true;
	AXIOM_GLOBALS['menu_animation_in']  = 'none';
	AXIOM_GLOBALS['menu_animation_out'] = 'none';
	AXIOM_GLOBALS['popup_engine']	= 'pretty';
	AXIOM_GLOBALS['popup_gallery']	= true;
	AXIOM_GLOBALS['email_mask']		= '^([a-zA-Z0-9_\-]+\.)*[a-zA-Z0-9_\-]+@[a-z0-9_\-]+(\.[a-z0-9_\-]+)*\.[a-z]{2,6}$';
	AXIOM_GLOBALS['contacts_maxlength']	= 1000;
	AXIOM_GLOBALS['comments_maxlength']	= 1000;
	AXIOM_GLOBALS['remember_visitors_settings']	= true;
	AXIOM_GLOBALS['admin_mode']			= false;
	AXIOM_GLOBALS['isotope_resize_delta']	= 0.3;
	AXIOM_GLOBALS['error_message_box']	= null;
	AXIOM_GLOBALS['viewmore_busy']		= false;
	AXIOM_GLOBALS['video_resize_inited']	= false;
	AXIOM_GLOBALS['top_panel_height']		= 0;
	if (AXIOM_GLOBALS['theme_font']=='') AXIOM_GLOBALS['theme_font'] = 'Roboto';
	AXIOM_GLOBALS['link_color'] = '#799515';
	AXIOM_GLOBALS['menu_color'] = '#c3602e';
	AXIOM_GLOBALS['user_color'] = '#a48576';


}	

/* preloader */
function preloader(){
    "use strict";
    //preloader
    jQuery(".preloaderimg").fadeOut();
    jQuery(".preloader").delay(200).fadeOut("slow").delay(200, function(){
        jQuery(this).remove();
    });
}


/*Main slider*/
function main_slider_init() {
    "use strict";
    if (jQuery("#mainslider_1").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1500;
				tpopt.startheight = 984;
				tpopt.container = jQuery('#rev_slider_1');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="on";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi13;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_1').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_1');
		}else{
		   revapi13 = tpj('#rev_slider_1').show().revolution(
			{	
										dottedOverlay:"none",
				delay:7000,
				startwidth:1500,
				startheight:984,
				hideThumbs:200,

				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:3,
				
										
				simplifyAll:"off",

				navigationType:"none",
				navigationArrows:"solo",
				navigationStyle:"round",

				touchenabled:"on",
				onHoverStop:"off",
				nextSlideOnWindowFocus:"off",

				swipe_threshold: 0.7,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				
										parallax:"mouse",
				parallaxBgFreeze:"off",
				parallaxLevels:[5,10,15,20,25,30,35,40,45,50],
										
										
				keyboardNavigation:"off",

				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,

				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,

				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,

				shadow:0,
				fullWidth:"on",
				fullScreen:"off",

										spinner:"spinner3",
										
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,

				shuffle:"off",

				autoHeight:"off",
				forceFullWidth:"on",
				
				
				
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,

										hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0					});



							}
		});	/*ready*/
	}
	if (jQuery("#mainslider_2").length > 0) {
		var setREVStartSize = function() {
			var	tpopt = new Object();
				tpopt.startwidth = 1150;
				tpopt.startheight = 530;
				tpopt.container = jQuery('#rev_slider_2');
				tpopt.fullScreen = "off";
				tpopt.forceFullWidth="off";

			tpopt.container.closest(".rev_slider_wrapper").css({height:tpopt.container.height()});tpopt.width=parseInt(tpopt.container.width(),0);tpopt.height=parseInt(tpopt.container.height(),0);tpopt.bw=tpopt.width/tpopt.startwidth;tpopt.bh=tpopt.height/tpopt.startheight;if(tpopt.bh>tpopt.bw)tpopt.bh=tpopt.bw;if(tpopt.bh<tpopt.bw)tpopt.bw=tpopt.bh;if(tpopt.bw<tpopt.bh)tpopt.bh=tpopt.bw;if(tpopt.bh>1){tpopt.bw=1;tpopt.bh=1}if(tpopt.bw>1){tpopt.bw=1;tpopt.bh=1}tpopt.height=Math.round(tpopt.startheight*(tpopt.width/tpopt.startwidth));if(tpopt.height>tpopt.startheight&&tpopt.autoHeight!="on")tpopt.height=tpopt.startheight;if(tpopt.fullScreen=="on"){tpopt.height=tpopt.bw*tpopt.startheight;var cow=tpopt.container.parent().width();var coh=jQuery(window).height();if(tpopt.fullScreenOffsetContainer!=undefined){try{var offcontainers=tpopt.fullScreenOffsetContainer.split(",");jQuery.each(offcontainers,function(e,t){coh=coh-jQuery(t).outerHeight(true);if(coh<tpopt.minFullScreenHeight)coh=tpopt.minFullScreenHeight})}catch(e){}}tpopt.container.parent().height(coh);tpopt.container.height(coh);tpopt.container.closest(".rev_slider_wrapper").height(coh);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(coh);tpopt.container.css({height:"100%"});tpopt.height=coh;}else{tpopt.container.height(tpopt.height);tpopt.container.closest(".rev_slider_wrapper").height(tpopt.height);tpopt.container.closest(".forcefullwidth_wrapper_tp_banner").find(".tp-fullwidth-forcer").height(tpopt.height);}
		};

		/* CALL PLACEHOLDER */
		setREVStartSize();


		var tpj=jQuery;
		tpj.noConflict();
		var revapi14;

		tpj(document).ready(function() {

		if(tpj('#rev_slider_2').revolution == undefined){
			revslider_showDoubleJqueryError('#rev_slider_2');
		}else{
		   	revapi14 = tpj('#rev_slider_2').show().revolution(
			{	
				dottedOverlay:"none",
				delay:5000,
				startwidth:1150,
				startheight:530,
				hideThumbs:200,
				thumbWidth:100,
				thumbHeight:50,
				thumbAmount:4,
				simplifyAll:"off",
				navigationType:"bullet",
				navigationArrows:"solo",
				navigationStyle:"round",
				touchenabled:"on",
				onHoverStop:"on",
				nextSlideOnWindowFocus:"off",
				swipe_threshold: 75,
				swipe_min_touches: 1,
				drag_block_vertical: false,
				keyboardNavigation:"off",
				navigationHAlign:"center",
				navigationVAlign:"bottom",
				navigationHOffset:0,
				navigationVOffset:20,
				soloArrowLeftHalign:"left",
				soloArrowLeftValign:"center",
				soloArrowLeftHOffset:20,
				soloArrowLeftVOffset:0,
				soloArrowRightHalign:"right",
				soloArrowRightValign:"center",
				soloArrowRightHOffset:20,
				soloArrowRightVOffset:0,
				shadow:0,
				fullWidth:"on",
				fullScreen:"off",
				spinner:"spinner0",
				stopLoop:"off",
				stopAfterLoops:-1,
				stopAtSlide:-1,
				shuffle:"off",
				autoHeight:"off",
				forceFullWidth:"off",
				hideThumbsOnMobile:"off",
				hideNavDelayOnMobile:1500,
				hideBulletsOnMobile:"off",
				hideArrowsOnMobile:"off",
				hideThumbsUnderResolution:0,
				hideSliderAtLimit:0,
				hideCaptionAtLimit:0,
				hideAllCaptionAtLilmit:0,
				startWithSlide:0
				});
			}
		});	/*ready*/
	}

}

/*Essential Grid*/

function eggbfc(winw,resultoption) {
	var lasttop = winw,
	lastbottom = 0,
	smallest =9999,
	largest = 0,
	samount = 0,
	lamoung = 0,
	lastamount = 0,
	resultid = 0,
	resultidb = 0,
	responsiveEntries = [
						{ width:1400,amount:3},
						{ width:1170,amount:3},
						{ width:1024,amount:2},
						{ width:960,amount:3},
						{ width:778,amount:3},
						{ width:640,amount:2},
						{ width:480,amount:1}
						];
	if (responsiveEntries!=undefined && responsiveEntries.length>0)
		jQuery.each(responsiveEntries, function(index,obj) {
			var curw = obj.width != undefined ? obj.width : 0,
				cura = obj.amount != undefined ? obj.amount : 0;
			if (smallest>curw) {
				smallest = curw;
				samount = cura;
				resultidb = index;
			}
			if (largest<curw) {
				largest = curw;
				lamount = cura;
			}
			if (curw>lastbottom && curw<=lasttop) {
				lastbottom = curw;
				lastamount = cura;
				resultid = index;
			}
		})
		if (smallest>winw) {
			lastamount = samount;
			resultid = resultidb;
		}
		var obj = new Object;
		obj.index = resultid;
		obj.column = lastamount;
		if (resultoption=="id")
			return obj;
		else
			return lastamount;
}
if ("even"=="even") {
	var coh=0,
		container = jQuery("#esg-grid-1-1");
	var	cwidth = container.width(),
		ar = "7:5",
		gbfc = eggbfc(jQuery(window).width(),"id"),
		row = 2;
		ar = ar.split(":");
		aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
		coh = cwidth / aratio;
		coh = coh/gbfc.column*row;
		var ul = container.find("ul").first();
		ul.css({display:"block",height:coh+"px"});
}
if ("cobbles"=="even") {
	var coh=0,
		container = jQuery("#esg-grid-2-1");
	var	cwidth = container.width(),
		ar = "4:3",
		gbfc = eggbfc(jQuery(window).width(),"id"),
		row = 3;
		ar = ar.split(":");
		aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
		coh = cwidth / aratio;
		coh = coh/gbfc.column*row;
	var ul = container.find("ul").first();
	ul.css({display:"block",height:coh+"px"});
}

if ("masonry"=="even") {
	var coh=0,
		container = jQuery("#esg-grid-3-1");
	var	cwidth = container.width(),
		ar = "4:3",
		gbfc = eggbfc(jQuery(window).width(),"id"),
	row = 3;
ar = ar.split(":");
aratio=parseInt(ar[0],0) / parseInt(ar[1],0);
coh = cwidth / aratio;
coh = coh/gbfc.column*row;
	var ul = container.find("ul").first();
	ul.css({display:"block",height:coh+"px"});
}

var essapi_1;
var essapi_2;
var essapi_3;
var essapi_4;

function essential_grid_init() {
    "use strict";
    if (jQuery("#esg-grid-1-1").length > 0) {
		essapi_1 = jQuery("#esg-grid-1-1").tpessential({
	        gridID:1,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:2,
	        space:30,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-1",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"7:5",
	        responsiveEntries: [
							{ width:1400,amount:3},
							{ width:1170,amount:3},
							{ width:1024,amount:2},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:2},
							{ width:480,amount:1}
							]
		});

		try{
			jQuery("#esg-grid-1-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      	afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
			});
		} 
		catch (e) {}
	}

	 if (jQuery("#esg-grid-2-1").length > 0) {
		essapi_2 = jQuery("#esg-grid-2-1").tpessential({
	        gridID:2,
	        layout:"cobbles",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"38bc58cbb3",
	        loadMoreAjaxUrl:"http://tavern.axiomthemes.com/wp-admin/admin-ajax.php",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"on",
	        ajaxScrollToOnLoad:"on",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"horizontal-flipbook",
	        paginationScrollToTop:"off",
	        spinner:"spinner4",
	        spinnerColor:"#FFFFFF",
	        lightBoxMode:"contentgroup",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"multi",
	        filterLogic:"and",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-2",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"4:3",
	        responsiveEntries: [
							{ width:1400,amount:5},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:3},
							{ width:480,amount:1}
							]
		});

		try{
			jQuery("#esg-grid-2-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'elastic',
				prevEffect : 'elastic',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
					thumbs: {
						width : 50,
						height : 50
					},
				    title : {
						type:""
					}
				}
			});

	 	} 
	 	catch (e) {}
	 }


	if (jQuery("#esg-grid-4-1").length > 0) {
		essapi_4 = jQuery("#esg-grid-4-1").tpessential({
	        gridID:4,
	        layout:"even",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:2,
	        loadMoreAjaxToken:"38bc58cbb3",
	        loadMoreAjaxUrl:"http://tavern.axiomthemes.com/wp-admin/admin-ajax.php",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"on",
	        ajaxScrollToOnLoad:"on",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"fade",
	        paginationScrollToTop:"off",
	        spinner:"spinner0",
	        evenGridMasonrySkinPusher:"off",
	        lightBoxMode:"single",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"single",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-4",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        aspectratio:"7:5",
	        responsiveEntries: [
							{ width:1400,amount:3},
							{ width:1170,amount:3},
							{ width:1024,amount:2},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:2},
							{ width:480,amount:1}
							]
		});

		try{
			jQuery("#esg-grid-4-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'fade',
				prevEffect : 'fade',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
				    title : {
						type:""
					}
				}
			});

	 	} 
	 	catch (e) {}
	}

	if (jQuery("#esg-grid-3-1").length > 0) {
		essapi_3 = jQuery("#esg-grid-3-1").tpessential({
	        gridID:3,
	        layout:"masonry",
	        forceFullWidth:"off",
	        lazyLoad:"off",
	        row:3,
	        loadMoreAjaxToken:"38bc58cbb3",
	        loadMoreAjaxUrl:"http://tavern.axiomthemes.com/wp-admin/admin-ajax.php",
	        loadMoreAjaxAction:"Essential_Grid_Front_request_ajax",
	        ajaxContentTarget:"ess-grid-ajax-container-",
	        ajaxScrollToOffset:"0",
	        ajaxCloseButton:"off",
	        ajaxContentSliding:"on",
	        ajaxScrollToOnLoad:"on",
	        ajaxNavButton:"off",
	        ajaxCloseType:"type1",
	        ajaxCloseInner:"false",
	        ajaxCloseStyle:"light",
	        ajaxClosePosition:"tr",
	        space:0,
	        pageAnimation:"horizontal-flipbook",
	        paginationScrollToTop:"off",
	        spinner:"spinner4",
	        spinnerColor:"#FFFFFF",
	        lightBoxMode:"contentgroup",
	        animSpeed:1000,
	        delayBasic:1,
	        mainhoverdelay:1,
	        filterType:"multi",
	        filterLogic:"and",
	        showDropFilter:"hover",
	        filterGroupClass:"esg-fgc-3",
	        googleFonts:['Open+Sans:300,400,600,700,800','Raleway:100,200,300,400,500,600,700,800,900','Droid+Serif:400,700'],
	        responsiveEntries: [
							{ width:1400,amount:5},
							{ width:1170,amount:4},
							{ width:1024,amount:4},
							{ width:960,amount:3},
							{ width:778,amount:3},
							{ width:640,amount:3},
							{ width:480,amount:1}
							]
		});

		try{
			jQuery("#esg-grid-3-1 .esgbox").esgbox({
				padding : [0,0,0,0],
		      	afterLoad:function() { 
		 		if (this.element.hasClass("esgboxhtml5")) {
				   var mp = this.element.data("mp4"),
				      ogv = this.element.data("ogv"),
				      webm = this.element.data("webm");
		         this.content ='<div style="width:100%;height:100%;"><video autoplay="true" loop="" class="rowbgimage" poster="" width="100%" height="auto"><source src="'+mp+'" type="video/mp4"><source src="'+webm+'" type="video/webm"><source src="'+ogv+'" type="video/ogg"></video></div>';	
				   var riint = setInterval(function() {jQuery(window).trigger("resize");},100); setTimeout(function() {clearInterval(riint);},2500);
				   };
				 },
				beforeShow : function () { 
					this.title = jQuery(this.element).attr('lgtitle');
					if (this.title) {
						this.title="";
		   		this.title =  '<div style="padding:0px 0px 0px 0px">'+this.title+'</div>';
					}
				},
				afterShow : function() {
				},
				openEffect : 'fade',
				closeEffect : 'fade',
				nextEffect : 'elastic',
				prevEffect : 'elastic',
				openSpeed : 'normal',
				closeSpeed : 'normal',
				nextSpeed : 'normal',
				prevSpeed : 'normal',
				helpers : {
					media : {},
					thumbs: {
						width : 50,
						height : 50
					},
				    title : {
						type:""
					}
				}
			});
	 	} 
		catch (e) {}

	}
}


// Price range slider
function slider_range() {
    if (jQuery("#slider-range").length > 0) {
        jQuery("#slider-range").slider({
            range: true,
            min: 0,
            max: 200,
            values: [0, 200],
            slide: function(event, ui) {
                jQuery("#amount").val("£" + ui.values[0] + " - £" + ui.values[1]);
            }
        });
        jQuery("#amount").val("£" + jQuery("#slider-range").slider("values", 0) +
            " - £" + jQuery("#slider-range").slider("values", 1));
    }
}

// Select woocomerce review stars
function woo_review_star() {
    if (jQuery(".stars", "#review_form").length > 0) {
        jQuery(".stars").find("a").on("click", function() {
            jQuery("a.active").removeClass("active");
            jQuery(this).addClass("active");
            return false;
        });
    }
}