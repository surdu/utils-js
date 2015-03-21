describe("jQuery", function () {
  var el;

  beforeAll(function () {
    el = $("div");
  });

  it("should disable elements", function () {
    el.disable();
    expect(el.attr("disabled")).toEqual("disabled");
  });

  it("should enable elements", function () {
    el.enable();
    expect(el.attr("disabled")).toEqual(undefined);
  });
})
