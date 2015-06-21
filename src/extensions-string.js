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
