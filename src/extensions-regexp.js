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
