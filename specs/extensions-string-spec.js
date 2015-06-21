(function() {
	'use strict';

	describe("String", function () {

		it("should insert another string at a specified position", function () {
			expect("This is a test".insertAt(10, "successful ")).toEqual("This is a successful test");
		});

		it("should get all matches from a regular expression", function () {
			// The regexp will match words
			expect("This is a test".matchAll(/\w+/g)).toEqual(["This", "is", "a", "test"]);
		});

		it("should get all matches even if the global modifier is ommited", function () {
			// The regexp will match words that start with the letter "t"
			expect("This is a test".matchAll(/T\w+/i)).toEqual(["This", "test"]);
		});

	});	

}());
