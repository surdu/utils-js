if (!String.prototype.insertAt)
{
    String.prototype.insertAt = function(index, string) {
      return this.substr(0, index) + string + this.substr(index);
    };
}
