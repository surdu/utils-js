(function() {
	describe("Utils", function () {
		it("should work in node.js", function () {
			const utils = require("../");

			expect(utils.clone).toBeDefined();
		});
	});
}());
