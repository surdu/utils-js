describe("Utils", function () {
	let utils;

	beforeAll(function () {
		utils = new Utils();
	});

	it("should proxy function calls", function (done) {
		const obj = {
			test:	"I'm here",

			check: function () {
				expect(this.test).toEqual("I'm here");
				done();
			}
		};

		setTimeout(utils.proxy(obj.check, obj));
	});

	it("should deep clone objects", function () {
		const obj = {
			level1: {
				someProp: "mama",
				level2: {
					someProp: "tata"
				}
			},
			someProp: "sister"
		};

		const obj2 = utils.clone(obj);

		expect(obj2).not.toBe(obj);
		expect(obj2.someProp).toEqual("sister");
		expect(obj2.level1.level2.someProp).toEqual("tata");
	});
});
