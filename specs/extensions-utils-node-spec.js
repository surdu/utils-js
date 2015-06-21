(function() {
	'use strict';

	describe("Utils", function () {
		it("should work in node.js", function () {
			var utils = require("../");

			expect(utils.clone).toBeDefined();
		});
	});

}());
