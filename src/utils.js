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

if (document)
{
  var utils = new Utils();
}
else
{
  module.exports = new Utils();
}
