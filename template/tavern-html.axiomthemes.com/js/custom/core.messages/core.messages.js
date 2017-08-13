// Popup messages
//-----------------------------------------------------------------
jQuery(document).ready(function(){
	"use strict";

	AXIOM_GLOBALS['message_callback'] = null;
	AXIOM_GLOBALS['message_timeout'] = 5000;

	jQuery('body').on('click', '#axiom_modal_bg,.axiom_message .axiom_message_close', function (e) {
		"use strict";
		axiom_message_destroy();
		if (AXIOM_GLOBALS['message_callback']) {
			AXIOM_GLOBALS['message_callback'](0);
			AXIOM_GLOBALS['message_callback'] = null;
		}
		e.preventDefault();
		return false;
	});
});


// Warning
function axiom_message_warning(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'cancel-1';
	var delay = arguments[3] ? arguments[3] : AXIOM_GLOBALS['message_timeout'];
	return axiom_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'warning',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Success
function axiom_message_success(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'check-1';
	var delay = arguments[3] ? arguments[3] : AXIOM_GLOBALS['message_timeout'];
	return axiom_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'success',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Info
function axiom_message_info(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'info-1';
	var delay = arguments[3] ? arguments[3] : AXIOM_GLOBALS['message_timeout'];
	return axiom_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'info',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Regular
function axiom_message_regular(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var icon = arguments[2] ? arguments[2] : 'quote-1';
	var delay = arguments[3] ? arguments[3] : AXIOM_GLOBALS['message_timeout'];
	return axiom_message({
		msg: msg,
		hdr: hdr,
		icon: icon,
		type: 'regular',
		delay: delay,
		buttons: [],
		callback: null
	});
}

// Confirm dialog
function axiom_message_confirm(msg) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var callback = arguments[2] ? arguments[2] : null;
	return axiom_message({
		msg: msg,
		hdr: hdr,
		icon: 'help',
		type: 'regular',
		delay: 0,
		buttons: ['Yes', 'No'],
		callback: callback
	});
}

// Modal dialog
function axiom_message_dialog(content) {
	"use strict";
	var hdr  = arguments[1] ? arguments[1] : '';
	var init = arguments[2] ? arguments[2] : null;
	var callback = arguments[3] ? arguments[3] : null;
	return axiom_message({
		msg: content,
		hdr: hdr,
		icon: '',
		type: 'regular',
		delay: 0,
		buttons: ['Apply', 'Cancel'],
		init: init,
		callback: callback
	});
}

// General message window
function axiom_message(opt) {
	"use strict";
	var msg = opt.msg != undefined ? opt.msg : '';
	var hdr  = opt.hdr != undefined ? opt.hdr : '';
	var icon = opt.icon != undefined ? opt.icon : '';
	var type = opt.type != undefined ? opt.type : 'regular';
	var delay = opt.delay != undefined ? opt.delay : AXIOM_GLOBALS['message_timeout'];
	var buttons = opt.buttons != undefined ? opt.buttons : [];
	var init = opt.init != undefined ? opt.init : null;
	var callback = opt.callback != undefined ? opt.callback : null;
	// Modal bg
	jQuery('#axiom_modal_bg').remove();
	jQuery('body').append('<div id="axiom_modal_bg"></div>');
	jQuery('#axiom_modal_bg').fadeIn();
	// Popup window
	jQuery('.axiom_message').remove();
	var html = '<div class="axiom_message axiom_message_' + type + (buttons.length > 0 ? ' axiom_message_dialog' : '') + '">'
		+ '<span class="axiom_message_close iconadmin-cancel icon-cancel-1"></span>'
		+ (icon ? '<span class="axiom_message_icon iconadmin-'+icon+' icon-'+icon+'"></span>' : '')
		+ (hdr ? '<h2 class="axiom_message_header">'+hdr+'</h2>' : '');
	html += '<div class="axiom_message_body">' + msg + '</div>';
	if (buttons.length > 0) {
		html += '<div class="axiom_message_buttons">';
		for (var i=0; i<buttons.length; i++) {
			html += '<span class="axiom_message_button">'+buttons[i]+'</span>';
		}
		html += '</div>';
	}
	html += '</div>';
	// Add popup to body
	jQuery('body').append(html);
	var popup = jQuery('body .axiom_message').eq(0);
	// Prepare callback on buttons click
	if (callback != null) {
		AXIOM_GLOBALS['message_callback'] = callback;
		jQuery('.axiom_message_button').click(function(e) {
			"use strict";
			var btn = jQuery(this).index();
			callback(btn+1, popup);
			AXIOM_GLOBALS['message_callback'] = null;
			axiom_message_destroy();
		});
	}
	// Call init function
	if (init != null) init(popup);
	// Show (animate) popup
	var top = jQuery(window).scrollTop();
	jQuery('body .axiom_message').animate({top: top+Math.round((jQuery(window).height()-jQuery('.axiom_message').height())/2), opacity: 1}, {complete: function () {
		// Call init function
		//if (init != null) init(popup);
	}});
	// Delayed destroy (if need)
	if (delay > 0) {
		setTimeout(function() { axiom_message_destroy(); }, delay);
	}
	return popup;
}

// Destroy message window
function axiom_message_destroy() {
	"use strict";
	var top = jQuery(window).scrollTop();
	jQuery('#axiom_modal_bg').fadeOut();
	jQuery('.axiom_message').animate({top: top-jQuery('.axiom_message').height(), opacity: 0});
	setTimeout(function() { jQuery('#axiom_modal_bg').remove(); jQuery('.axiom_message').remove(); }, 500);
}
