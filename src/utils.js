function Utils()
{

}

Utils.prototype = {
  proxy: function (fn, context) {
    return function () {
      fn.apply(context, arguments);
    }
  },

  // Adds a self property in the context where the function 'fn' will be called
  addSelf: function (fn, self) {
    return function () {
      this.self = self;
      fn.apply(this, arguments);
    }
  }
};
