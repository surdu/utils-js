(function() {
	'use strict';

	describe("Utils", function () {
		it("should work in node.js", function () {
			var utils = require("../dist/utils.js");

			expect(utils).toBeDefined();
		});
	});

}());
