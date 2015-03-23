// used to fill in window and document
// in case node.js includes the library
// in order to ease the checks in the
// rest of the library

if (typeof window === "undefined")
{
  window = {};
}

if (typeof document === "undefined")
{
  document = {};
}

if (window.jQuery)
{
    jQuery.fn.enable = function () {
        $.each(this, function (index, el) {
            $(el).removeAttr('disabled');
        });
    };

    jQuery.fn.disable = function () {
        $.each(this, function (index, el) {
            $(el).attr('disabled', 'disabled');
        });
    };
}

if (!String.prototype.insertAt)
{
    String.prototype.insertAt = function(index, string) {
      return this.substr(0, index) + string + this.substr(index);
    };
}

if (!String.prototype.matchAll)
{
  String.prototype.matchAll = function (re) {
    var result = [];

    if (!re.global)
    {
      mods = "g";

      if (re.ignoreCase)
      {
        mods += "i";
      }

      if (re.multiline)
      {
        mods += "m";
      }

      re = RegExp(re.source, mods);
    }

    do {
      var match = re.exec(this);
      if (match)
        result.push(match[0]);
    } while (match);

    return result;
  }
}

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
