/* Add custom sidebar */

var custom_options ='<div class="custom_options_shadow"></div>';
custom_options  +='<div id="custom_options" class="custom_options co_light">';
custom_options  +=	'<a href="#" id="co_toggle" class="icon-params"></a>';
custom_options  +=	'<div class="co_header">';
custom_options  +=		'<div class="co_title">';
custom_options  +=			'<span>Style switcher</span>';
custom_options  +=			'<a href="#" id="co_theme_reset" class="co_reset icon-retweet-1" title="Reset to defaults">RESET</a>';
custom_options  +=		'</div>';
custom_options  +=	'</div>';
custom_options  +=	'<div id="sc_custom_scroll" class="co_options sc_scroll sc_scroll_vertical">';
custom_options  +=		'<div class="sc_scroll_wrapper swiper-wrapper">';
custom_options  +=			'<div class="sc_scroll_slide swiper-slide">';
custom_options  +=				'<input type="hidden" id="co_site_url" name="co_site_url" value="#"/>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Body styles</div>';
custom_options  +=					'<div class="co_switch_box co_switch_horizontal co_switch_columns_3" data-options="body_style">';
custom_options  +=						'<div class="switcher" data-value="body_style_wide"></div>';
custom_options  +=						'<a href="#" data-value="body_style_boxed">Boxed</a>';
custom_options  +=						'<a href="#" data-value="body_style_wide">Wide</a>';
custom_options  +=						'<a href="#" data-value="body_style_fullscreen">Fullwide</a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section" style="display:none;">';
custom_options  +=					'<div class="co_label">Color scheme</div>';
custom_options  +=					'<div id="co_scheme_list" class="co_image_check" data-options="color_scheme">';
custom_options  +=						'<a href="#" id="scheme_original" class="co_scheme_wrapper active" data-value="original"><span>Original</span></a>';
custom_options  +=						'<a href="#" id="scheme_contrast" class="co_scheme_wrapper" data-value="contrast"><span>Contrast</span></a>';
custom_options  +=						'<a href="#" id="scheme_modern" class="co_scheme_wrapper" data-value="modern"><span>Modern</span></a>';
custom_options  +=						'<a href="#" id="scheme_pastel" class="co_scheme_wrapper" data-value="pastel"><span>Pastel</span></a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Color settings</div>';
custom_options  +=					'<div class="co_colorpic_list">';
custom_options  +=						'<div class="iColorPicker" data-options="link_color" data-value="#799515"><span>Color 1</span></div>';
custom_options  +=						'<div class="iColorPicker" data-options="menu_color" data-value="#c3602e"><span>Color 2</span></div>';
custom_options  +=						'<div class="iColorPicker" data-options="user_color" data-value="#a48576"><span>Color 3</span></div>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=				'<div class="co_section">';
custom_options  +=					'<div class="co_label">Background image</div>';
custom_options  +=					'<div id="co_bg_images_list" class="co_image_check" data-options="bg_image">';
custom_options  +=						'<a href="#" id="img_pattern_1" class="co_image_wrapper">';
custom_options  +=							'<span class="co_bg_preview"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="img_pattern_2" class="co_image_wrapper">';
custom_options  +=							'<span class="co_bg_preview"></span>';
custom_options  +=						'</a>';
custom_options  +=						'<a href="#" id="img_pattern_3" class="co_image_wrapper">';
custom_options  +=							'<span class="co_bg_preview"></span>';
custom_options  +=						'</a>';
custom_options  +=					'</div>';
custom_options  +=				'</div>';
custom_options  +=			'</div>';
custom_options  +=		'</div>';
custom_options  +=		'<div id="sc_custom_scroll_bar" class="sc_scroll_bar sc_scroll_bar_vertical sc_custom_scroll_bar"></div>';
custom_options  +=	'</div>';
custom_options  +='</div>';

jQuery('body').append(custom_options);


// Customization panel
jQuery(document).ready(function() {
	"use strict";

	// Open/close panel
	if (jQuery('#custom_options').length > 0) {


        var swither = jQuery("#custom_options .co_switch_box:not(.inited)" )
        if (swither.length > 0) {
            swither.each(function() {
                jQuery(this).addClass('inited');
                axiom_custom_options_switcher(jQuery(this));
            });
            jQuery("#custom_options .co_switch_box a" ).on("click", function(e) {
                "use strict";
                var value = jQuery(this).data('value');
                var wrap = jQuery(this).parent('.co_switch_box');
                var options = wrap.data('options');
                wrap.find('.switcher').data('value', value);
                jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass( value );
                jQuery(document).find("#custom_options .switcher").css("left", "");
                var page_content = jQuery('body').eq(0);
                if (page_content.hasClass("body_style_wide")) {
                    jQuery(document).find(".page_content").addClass("container");
                } else {
                        jQuery(document).find(".page_content").removeClass('container');
                    }
                var page_content = jQuery('body').eq(0);
                if (page_content.hasClass("body_style_boxed")) {
                    jQuery(document).find(".page_wrap").addClass("container");
                } else {
                        jQuery(document).find(".page_wrap").removeClass('container');
                    }                    
                e.preventDefault();
                return false;
            });
        }

        jQuery("#custom_options #co_bg_pattern_list a").on("click", function(b) {
            jQuery("#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper").removeClass("current");
            var a = jQuery(this).addClass("current");
            var c = a.attr("id").substr(-1);
            jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass("bg_pattern_" + c);
            //jQuery(document).find(".body_wrap").addClass("container");
            jQuery(document).find("body").addClass("body_style_boxed");
            jQuery(document).find("#custom_options .switcher").css("left" , "0" , "!important");
            var page_content = jQuery('body').eq(0);
            if (page_content.hasClass("body_style_boxed")) {
                jQuery(document).find(".page_wrap").addClass("container");
            } else {
                    jQuery(document).find(".page_wrap").removeClass('container');
                }  
            b.preventDefault();
            return false
        });
        jQuery("#custom_options #co_bg_images_list a").on("click", function(b) {
            jQuery("#custom_options #co_bg_images_list .co_image_wrapper,#custom_options #co_bg_pattern_list .co_pattern_wrapper").removeClass("current");
            var a = jQuery(this).addClass("current");
            var c = a.attr("id").substr(-1);
            jQuery(document).find("body").removeClass("bg_pattern_0 bg_pattern_1 bg_pattern_2 bg_pattern_3 bg_pattern_4 bg_pattern_5 bg_pattern_6 bg_pattern_7 bg_pattern_8 bg_pattern_9 bg_image_1 bg_image_2 bg_image_3 bg_image_4 bg_image_5 bg_image_6 bg_image_7 bg_image_8 body_style_wide body_style_boxed body_style_fullscreen").addClass("bg_image_" + c);
            jQuery(document).find("body").addClass("body_style_boxed");
            jQuery(document).find("#custom_options .switcher").css("left" , "0" , "!important");
            var page_content = jQuery('body').eq(0);
            if (page_content.hasClass("body_style_boxed")) {
                jQuery(document).find(".page_wrap").addClass("container");
            } else {
                    jQuery(document).find(".page_wrap").removeClass('container');
                }              
            b.preventDefault();
            return false
        });

		jQuery('#co_toggle').click(function(e) {
			"use strict";
			var co = jQuery('#custom_options').eq(0);
			if (co.hasClass('opened')) {
				co.removeClass('opened');
				jQuery('body').removeClass('custom_options_opened');
				jQuery('.custom_options_shadow').fadeOut(500);
			} else {
				co.addClass('opened');
				jQuery('body').addClass('custom_options_opened');
				jQuery('.custom_options_shadow').fadeIn(500);
			}
			e.preventDefault();
			return false;
		});
		jQuery('.custom_options_shadow').click(function(e) {
			"use strict";
			jQuery('#co_toggle').trigger('click');
			e.preventDefault();
			return false;
		});

		// First open custom panel
		if (AXIOM_GLOBALS['demo_time'] > 0) {
			if (axiom_get_cookie('axiom_custom_options_demo') != 1 ){
				setTimeout(function() { jQuery("#co_toggle").trigger('click'); }, AXIOM_GLOBALS['demo_time']);
				setTimeout(function() { jQuery("#co_toggle").trigger('click'); }, 6 * AXIOM_GLOBALS['demo_time']);
				axiom_set_cookie('axiom_custom_options_demo', '1', 1);
			}
		}

		axiom_custom_options_reset(!AXIOM_GLOBALS['remember_visitors_settings']);

		jQuery('#custom_options #co_theme_reset').click(function (e) {
			"use strict";
			jQuery('#custom_options .co_section').each(function () {
				"use strict";
				jQuery(this).find('div[data-options]').each(function() {
					var opt = jQuery(this).data('options');
					if (AXIOM_GLOBALS['remember_visitors_settings'])
						axiom_del_cookie(opt);
					else
						axiom_custom_options_remove_option_from_url(opt);
				});
			});
			axiom_custom_options_show_loader();
			//window.location.reload();
			window.location.href = jQuery('#co_site_url').val();
			e.preventDefault();
			return false;
		});

		// Switcher
		/*var swither = jQuery("#custom_options .co_switch_box:not(.inited)" )
		if (swither.length > 0) {
			swither.each(function() {
				jQuery(this).addClass('inited');
				axiom_custom_options_switcher(jQuery(this));
			});
			jQuery("#custom_options .co_switch_box a" ).click(function(e) {
				"use strict";
				var value = jQuery(this).data('value');
				var wrap = jQuery(this).parent('.co_switch_box');
				var options = wrap.data('options');
				wrap.find('.switcher').data('value', value);
				if (AXIOM_GLOBALS['remember_visitors_settings']) axiom_set_cookie(options, value, 1);
				axiom_custom_options_reset(true);
				axiom_custom_options_switcher(wrap);
				axiom_custom_options_apply_settings(options, value);
				e.preventDefault();
				return false;
			});
		}*/

		// ColorPicker
		axiom_color_picker();
		jQuery('#custom_options .iColorPicker').each(function() {
			"use strict";
			jQuery(this).css('backgroundColor', jQuery(this).data('value'));
		});

		jQuery('#custom_options .iColorPicker').click(function (e) {
			"use strict";
			axiom_color_picker_show(null, jQuery(this), function(fld, clr) {
				"use strict";
				var val = fld.data('value');
				var options = fld.data('options');
				fld.css('backgroundColor', clr);
				if (AXIOM_GLOBALS['remember_visitors_settings']) axiom_set_cookie(options, clr, 1);
				if (options == 'bg_color') {
					if (AXIOM_GLOBALS['remember_visitors_settings'])  {
						axiom_del_cookie('bg_image');
						axiom_del_cookie('bg_pattern');
					}
				}
				axiom_custom_options_reset(true);
				axiom_custom_options_apply_settings(options, clr);
			});
		});
		
		// Color scheme
		jQuery('#custom_options #co_scheme_list a').click(function(e) {
			"use strict";
			jQuery('#custom_options #co_scheme_list .co_scheme_wrapper').removeClass('active');
			var obj = jQuery(this).addClass('active');
			var val = obj.data('value');
			if (AXIOM_GLOBALS['remember_visitors_settings'])  {
				axiom_set_cookie('color_scheme', val, 1);
			}
			axiom_custom_options_reset(true);
			axiom_custom_options_apply_settings('color_scheme', val);
			e.preventDefault();
			return false;
		});
		
		// Background patterns
		/*jQuery('#custom_options #co_bg_pattern_list a').click(function(e) {
			"use strict";
			jQuery('#custom_options #co_bg_pattern_list .co_pattern_wrapper,#custom_options #co_bg_images_list .co_image_wrapper').removeClass('active');
			var obj = jQuery(this).addClass('active');
			var val = obj.attr('id').substr(-1);
			if (AXIOM_GLOBALS['remember_visitors_settings'])  {
				axiom_del_cookie('bg_color');
				axiom_del_cookie('bg_image');
				axiom_set_cookie('bg_pattern', val, 1);
			}
			axiom_custom_options_reset(true);
			axiom_custom_options_apply_settings('bg_pattern', val);
			if (jQuery("#custom_options .co_switch_box .switcher").data('value') != 'boxed') {
				AXIOM_GLOBALS['co_add_params'] = {'bg_pattern': val};
				jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
			}
			e.preventDefault();
			return false;
		});*/

		// Background images
		/*jQuery('#custom_options #co_bg_images_list a').click(function(e) {
			"use strict";
			jQuery('#custom_options #co_bg_images_list .co_image_wrapper, #custom_options #co_bg_pattern_list .co_pattern_wrapper').removeClass('active');
			var obj = jQuery(this).addClass('active');
			var val = obj.attr('id').substr(-1);
			if (AXIOM_GLOBALS['remember_visitors_settings'])  {
				axiom_del_cookie('bg_color');
				axiom_del_cookie('bg_pattern');
				axiom_set_cookie('bg_image', val, 1);
			}
			axiom_custom_options_reset(true);
			axiom_custom_options_apply_settings('bg_image', val);
			if (jQuery("#custom_options .co_switch_box .switcher").data('value') != 'boxed') {
				AXIOM_GLOBALS['co_add_params'] = {'bg_image': val};
				jQuery("#custom_options .co_switch_box a[data-value='boxed']").trigger('click');
			}
			e.preventDefault();
			return false;
		});*/

		jQuery('#custom_options #co_bg_pattern_list a, #custom_options #co_bg_images_list a, .iColorPicker').hover(
			function() {
				"use strict";
				jQuery(this).addClass('current');
			},
			function() {
				"use strict";
				jQuery(this).removeClass('current');
			}
		);
	}
});

jQuery(window).resize(function () {
	jQuery('#custom_options .sc_scroll').css('height',jQuery('#custom_options').height()-46);
})


// SwitchBox
function axiom_custom_options_switcher(wrap) {
	"use strict";
	var drag = wrap.find('.switcher').eq(0);
	var value = drag.data('value');
	var pos = wrap.find('a[data-value="'+value+'"]').position();
	if (pos != undefined) {
		drag.css({
			left: pos.left,
			top: pos.top
		});
	}
}

// Show Reset button
function axiom_custom_options_reset() {
	"use strict";

	var cooks = arguments[0] ? true : false;
	
	if (!cooks) {
		jQuery('#custom_options .co_section').each(function () {
			if (cooks) return;
	
			jQuery(this).find('div[data-options]').each(function() {
				var cook = axiom_get_cookie(jQuery(this).data('options'))
				if (cook != null && cook != undefined)
					cooks = true;			
			});
		});
	}
	if (cooks)
		jQuery('#custom_options').addClass('co_show_reset');			
	else
		jQuery('#custom_options').removeClass('co_show_reset');
}

// Remove specified option from URL
function axiom_custom_options_remove_option_from_url(option) {
	var pos = -1, pos2 = -1, pos3 = -1;
	var loc = jQuery('#co_site_url').val();
	if (loc && (pos = loc.indexOf('?')) > 0) {
		if ((pos2 = loc.indexOf(option, pos)) > 0) {
			if ((pos3 = loc.indexOf('&', pos2)) > 0)
				loc = loc.substr(0, pos2) + loc.substr(pos3);
			else
				loc = loc.substr(0, pos2);
		}
		jQuery('#co_site_url').val(loc);
	}
}

// Show Loader
function axiom_custom_options_show_loader() {
	jQuery('.custom_options_shadow').addClass('loading');
}

// Apply settings
function axiom_custom_options_apply_settings(option, val) {
	if (window.axiom_skin_customizer)
		axiom_skin_customizer(option, val);
	else {
		axiom_custom_options_show_loader();
		location.reload();
	}
}
