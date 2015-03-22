describe("Utils", function () {
  var utils;

  beforeAll(function () {
    utils = new Utils();
  });

  it("should proxy function calls", function (done) {
    var obj = {
      test:  "I'm here",

      check: function () {
        expect(this.test).toEqual("I'm here");
        done();
      }
    };

    setTimeout(utils.proxy(obj.check, obj));
  });
});
