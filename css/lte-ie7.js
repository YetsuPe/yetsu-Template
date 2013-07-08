/* Use this script if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'yet-icons\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-radio-unchecked' : '&#x21;',
			'icon-radio-checked' : '&#x22;',
			'icon-facebook' : '&#x23;',
			'icon-google-plus' : '&#x24;',
			'icon-twitter' : '&#x25;',
			'icon-android' : '&#x26;',
			'icon-html5' : '&#x27;',
			'icon-css3' : '&#x28;',
			'icon-html5-2' : '&#x29;',
			'icon-pinterest' : '&#x2a;',
			'icon-tumblr' : '&#x2b;',
			'icon-linkedin' : '&#x2c;',
			'icon-youtube' : '&#x2d;',
			'icon-fullscreen' : '&#x2e;',
			'icon-heart-fill' : '&#x2f;',
			'icon-cog' : '&#x30;',
			'icon-code' : '&#x31;',
			'icon-stats' : '&#x32;',
			'icon-grid' : '&#x33;',
			'icon-console' : '&#x34;',
			'icon-location' : '&#x35;',
			'icon-heart' : '&#x36;',
			'icon-cloud' : '&#x37;',
			'icon-user' : '&#x38;',
			'icon-comment' : '&#x39;',
			'icon-file-xml' : '&#x3a;',
			'icon-github' : '&#x3b;',
			'icon-console-2' : '&#x3c;',
			'icon-code-2' : '&#x3d;',
			'icon-exit' : '&#x3e;',
			'icon-enter' : '&#x3f;',
			'icon-point-left' : '&#x40;',
			'icon-smiley' : '&#x41;',
			'icon-tongue' : '&#x42;',
			'icon-happy' : '&#x43;',
			'icon-wink' : '&#x44;',
			'icon-grin' : '&#x45;',
			'icon-cool' : '&#x46;',
			'icon-menu' : '&#x47;',
			'icon-users' : '&#x48;',
			'icon-user-2' : '&#x49;',
			'icon-user-3' : '&#x4a;',
			'icon-bubbles' : '&#x4b;',
			'icon-qrcode' : '&#x4c;',
			'icon-image' : '&#x4d;',
			'icon-home' : '&#x4e;',
			'icon-newspaper' : '&#x4f;',
			'icon-pacman' : '&#x50;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; i < els.length; i += 1) {
		el = els[i];
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};