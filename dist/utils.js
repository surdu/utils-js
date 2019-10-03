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

(function() {
	if (!String.prototype.insertAt) {
		String.prototype.insertAt = function(index, string) {
			return this.substr(0, index) + string + this.substr(index);
		};
	}

	if (!String.prototype.matchAll) {
		String.prototype.matchAll = function (re) {
			const result = [];
			let mods;
			let match;

			if (!re.global) {
				mods = "g";

				if (re.ignoreCase) {
					mods += "i";
				}

				if (re.multiline) {
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

	String.prototype.trimChar = function (char) {
		if (!char) {
			return this.trim();
		}

		const regexp = new RegExp(`^${char}+|${char}+$`, "g");
		return this.replace(regexp, "");
	};
}());

(function() {
	function Utils() {}

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

	if (typeof module !== "undefined" && module.exports) {
		module.exports = new Utils();
	}
	else {
		window.utils = new Utils();
	}
}());
