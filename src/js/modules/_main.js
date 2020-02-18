/* viewport width */
function viewport(){
    var e = window, 
        a = 'inner';
    if ( !( 'innerWidth' in window ) )
    {
        a = 'client';
        e = document.documentElement || document.body;
    }
    return { width : e[ a+'Width' ] , height : e[ a+'Height' ] }
};
/* viewport width */

function animateme() {
    var viewport_height = viewport().height;
    var scroll_top = $(window).scrollTop();
    $(".js-animateme").each(function(){
        var animate_pos = $(this).offset().top;
        var animate_offset = $(this).data("animate-offset");
        var animate_delay = $(this).data("animate-delay");
        var animate = $(this).data("animate-class");
        var win_scroll = scroll_top + viewport_height - animate_offset;
        $(this).css("transition-delay",animate_delay+"ms");
        if ( win_scroll >= animate_pos ) {
            $(this).addClass(animate);
        } else {
            $(this).removeClass(animate);
        }
    });
}

//Анимации по странице
$(window).scroll(function(){
    var viewport_height = viewport().height;
    var viewport_width = viewport().width;
    var scroll_top = $(window).scrollTop();
    
    animateme();
    
    $(".js-paralax").each(function(){
        var paralax_pos = $(this).offset().top;
        var paralax_side = $(this).data("paralax-side");
        var paralax_step = $(this).data("paralax-step");
        if ( paralax_side == 'bottom') {
            $(this).attr("style","transform: translateY(" + (-scroll_top - paralax_pos )/paralax_step + "px)" );
        } 
        if ( paralax_side == 'left') {
            $(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + viewport_height )/paralax_step + "px)" );
            if ( viewport_width < viewport_height ) {
                $(this).attr("style","transform: translateX(" + (scroll_top - paralax_pos + ( viewport_height/2 ) )/paralax_step + "px)" );
            }
        } else {
            $(this).attr("style","transform: translateY(" + (scroll_top - paralax_pos )/paralax_step + "px)" );
        }
    });

});