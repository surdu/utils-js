function Utils()
{

}

Utils.prototype = {
  proxy: function (fn, context) {
    return function () {
      fn.apply(context, arguments);
    }
  }
};
