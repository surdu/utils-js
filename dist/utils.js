//jshint -W020

/**
	used to fill in window and document
	in case node.js includes the library
	in order to ease the checks in the
	rest of the library
*/

if (typeof window === "undefined")
{
	window = {};
}

if (typeof document === "undefined")
{
	document = {};
}

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 */
(function() {
	"use strict";
	
	if (!window.console) {
		window.console = {};
	}
	// union of Chrome, FF, IE, and Safari console methods
	var m = [
		"log", "info", "warn", "error", "debug", "trace", "dir", "group",
		"groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
		"dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
	];
	// define undefined methods as noops to prevent errors
	for (var i = 0; i < m.length; i++) {
		if (!window.console[m[i]]) {
			window.console[m[i]] = function() {};
		}
	}
}());

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

(function() {
	'use strict';

	if (!String.prototype.insertAt)
	{
			String.prototype.insertAt = function(index, string) {
				return this.substr(0, index) + string + this.substr(index);
			};
	}

	if (!String.prototype.matchAll)
	{
		String.prototype.matchAll = function (re) {
			var result = [];
      var mods;
      var match;

			if (!re.global)
			{
				mods = "g";

				if (re.ignoreCase)
				{
					mods += "i";
				}

				if (re.multiline)
				{
					mods += "m";
				}

				re = new RegExp(re.source, mods);
			}

			do {
				match = re.exec(this);
				if (match) {
          result.push(match[0]);
        }
			} while (match);

			return result;
		};
	}

}());

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
