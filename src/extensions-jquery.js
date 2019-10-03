(function() {
	if (window.jQuery) {
		window.jQuery.fn.enable = function () {
			window.jQuery.each(this, function (index, el) {
				window.jQuery(el).removeAttr('disabled');
			});
		};

		window.jQuery.fn.disable = function () {
			window.jQuery.each(this, function (index, el) {
				window.jQuery(el).attr('disabled', 'disabled');
			});
		};
	}
}());
