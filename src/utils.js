(function() {
	'use strict';

	function Utils(){}

	Utils.prototype = {
		proxy: function (fn, context) {
			return function () {
				fn.apply(context, arguments);
			};
		},

		clone: function (obj) {
			return JSON.parse(JSON.stringify(obj));
		}
	};

	window.Utils = Utils;

	if (typeof module !== "undefined" && module.exports)
	{
		module.exports = new Utils();
	}
	else
	{
		window.utils = new Utils();
	}


}());
