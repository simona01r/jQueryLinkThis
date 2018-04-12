/*
 name: Link This
 author: Simona Adalberth
 version: 0.1.0
 license:MIT
 */

(function ($) {
    $.fn.linkThis = function (options) {
        // Default settings
        var settings = $.extend({
            href: null,
            text: null,
            target: "_self"
        }, options);

        // Validation
        if (settings.href == null) {
            console.log("You need a href option for linkThis to work");
            return this;
        }
        
        // Wrap the all elements with this plugin touch
        return this.each(function () { 
            var object = $(this); 
            if (settings.text == null) {
                settings.text = object.text();
            }
            object.wrap('<a target= "' + settings.target + '" href="' + settings.href + '"></a>').text(settings.text);
        });

    }
}(jQuery));
