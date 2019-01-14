
(function ( $ ) {
 
    $.fn.typewriter = function( options ) {

        var settings = $.extend({
            text: $(this).attr("tw-text"),
            delay: 150,
            waitingTime: 1000,
            cursor: false,
            hide: 0,
        }, options );

        var item = $(this); //Our element
        var i = 0;          //Current char index

        //Function for adding char
        function startType() {
            //If cursor is enabled, we're adding our class.
            if (i==0 && settings.cursor==true) {
                item.addClass("tw-cursor");
            }
            //This is where the magic happens
            if (i<settings.text.length) {
                item.append(settings.text.charAt(i));
                i++;
                //Call function again
                setTimeout( startType, settings.delay );
            }
            //If the whole text appears, we're removing our class.
            else {
                item.removeClass("tw-cursor");
                //Hide element if it necessary.
                if (settings.hide>0) {
                    setTimeout( function() {
                        item.fadeOut();
                    }, settings.hide );
                }
            }
        }

        //Call our function for the first time.
        setTimeout( startType, settings.waitingTime );
        
    };
 
}( jQuery ));