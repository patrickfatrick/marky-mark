'use strict';

// Custom Event Polyfill for IE9+
(function () {
	function CustomEvent(event, params) {
		params = params || {
			bubbles: false,
			cancelable: false,
			detail: undefined
		};
		var evt = document.createEvent('CustomEvent');
		evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
		return evt;
	}

	CustomEvent.prototype = window.Event.prototype;

	window.CustomEvent = CustomEvent;
})();

export var markyblur = new CustomEvent('markyblur');
export var markyfocus = new CustomEvent('markyfocus');
export var markyselect = new CustomEvent('markyselect');
export var markyupdate = new CustomEvent('markyupdate');
export var markychange = new CustomEvent('markychange');