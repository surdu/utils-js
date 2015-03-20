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

if (!RegExp.prototype.getAllMatches)
{
  RegExp.prototype.getAllMatches = function (string) {
    var result = [];

    do {
      var match = this.exec(string);
      if (match)
        result.push(match[0]);
    } while (match);

    return result;
  }
}

if (!String.prototype.insertAt)
{
    String.prototype.insertAt = function(index, string) {
      return this.substr(0, index) + string + this.substr(index);
    };
}

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

var utils = new Utils();