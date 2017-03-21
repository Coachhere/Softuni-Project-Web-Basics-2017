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


function fnDoAllTransparent() {
    var opacity = 0.25;
    document.getElementById("nakov").style.opacity=opacity;
    document.getElementById("bio_maikata").style.opacity=opacity;
    document.getElementById("batka").style.opacity=opacity;
    document.getElementById("studentska").style.opacity=opacity;
    document.getElementById("izmerenie").style.opacity=opacity;
    document.getElementById("mandala").style.opacity=opacity;
    document.getElementById("zhulieta").style.opacity=opacity;
}

function fnNewest(){
    fnDoAllTransparent();
    document.getElementById("nakov").style.opacity=1;
    document.getElementById("bio_maikata").style.opacity=1;
}
function fnBiggestSellers(){
    fnDoAllTransparent();
    document.getElementById("batka").style.opacity=1;
    document.getElementById("studentska").style.opacity=1;
    document.getElementById("izmerenie").style.opacity=1;
}
function fnSpecial(){
    fnDoAllTransparent();
    document.getElementById("izmerenie").style.opacity=1;
    document.getElementById("zhulieta").style.opacity=1;
}
function fnChocolate(){
    fnDoAllTransparent();
    document.getElementById("nakov").style.opacity=1;
    document.getElementById("zhulieta").style.opacity=1;
}
function fnVegan(){
    fnDoAllTransparent();
    document.getElementById("bio_maikata").style.opacity=1;
    document.getElementById("izmerenie").style.opacity=1;
    document.getElementById("mandala").style.opacity=1;
}
function fnRemoveFilters(){
    document.getElementById("nakov").style.opacity=1;;
    document.getElementById("bio_maikata").style.opacity=1;;
    document.getElementById("batka").style.opacity=1;;
    document.getElementById("studentska").style.opacity=1;;
    document.getElementById("izmerenie").style.opacity=1;;
    document.getElementById("mandala").style.opacity=1;;
    document.getElementById("zhulieta").style.opacity=1;;
}