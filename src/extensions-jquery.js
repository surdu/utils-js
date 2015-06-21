(function() {
	'use strict';

	if (window.jQuery)
	{
			jQuery.fn.enable = function () {
					jQuery.each(this, function (index, el) {
							jQuery(el).removeAttr('disabled');
					});
			};

			jQuery.fn.disable = function () {
					jQuery.each(this, function (index, el) {
							jQuery(el).attr('disabled', 'disabled');
					});
			};
	}	

}());
