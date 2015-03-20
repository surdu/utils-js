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
