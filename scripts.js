/**
 * Created by Coach on 17-Mar-17.
 */


$(function() {
    var isClicked = false;
    $('.scrollTop').css("display","none");
    $(window).scroll(function() {
        if (isClicked == false){
            if ($(this).scrollTop() > 300) {$('.scrollTop').show();}
            else {$('.scrollTop').hide();}
        }
    });

    $('.scrollTop').click(function() {
        isClicked = true;
        $('.scrollTop').fadeOut(500);
        $('html, body').animate({
            scrollTop : 0
        }, 800, function(){
            isClicked = false;
        });
    });
    $('.scrollTop').on("mouseenter",function() {
        $('.scrollTop').css({opacity:'1.0'});
    });
    $('.scrollTop').on("mouseleave",function() {
        $('.scrollTop').css({opacity:'0.5'});
    });
});