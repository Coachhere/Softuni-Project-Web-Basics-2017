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


function fnNewest(){

    document.getElementById("nakov").style.borderColor="#4C1818";
    document.getElementById("bio_maikata").style.borderColor="#4C1818";
    document.getElementById("batka").style.borderColor="#ffffff";
    document.getElementById("studentska").style.borderColor="#ffffff";
    document.getElementById("izmerenie").style.borderColor="#ffffff";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#ffffff";

}
function fnBiggestSellers(){
    document.getElementById("nakov").style.borderColor="#ffffff";
    document.getElementById("bio_maikata").style.borderColor="#ffffff";
    document.getElementById("batka").style.borderColor="#4C1818";
    document.getElementById("studentska").style.borderColor="#4C1818";
    document.getElementById("izmerenie").style.borderColor="#4C1818";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#ffffff";
}
function fnSpecial(){
    document.getElementById("nakov").style.borderColor="#ffffff";
    document.getElementById("bio_maikata").style.borderColor="#ffffff";
    document.getElementById("batka").style.borderColor="#ffffff";
    document.getElementById("studentska").style.borderColor="#ffffff";
    document.getElementById("izmerenie").style.borderColor="#4C1818";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#4C1818";
}
function fnChocolate(){
    document.getElementById("nakov").style.borderColor="#4C1818";
    document.getElementById("bio_maikata").style.borderColor="#ffffff";
    document.getElementById("batka").style.borderColor="#ffffff";
    document.getElementById("studentska").style.borderColor="#ffffff";
    document.getElementById("izmerenie").style.borderColor="#ffffff";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#4C1818";
}
function fnVegan(){
    document.getElementById("nakov").style.borderColor="#ffffff";
    document.getElementById("bio_maikata").style.borderColor="#4C1818";
    document.getElementById("batka").style.borderColor="#ffffff";
    document.getElementById("studentska").style.borderColor="#ffffff";
    document.getElementById("izmerenie").style.borderColor="#4C1818";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#ffffff";
}
function fnRemoveFilters(){
    document.getElementById("nakov").style.borderColor="#ffffff";
    document.getElementById("bio_maikata").style.borderColor="#ffffff";
    document.getElementById("batka").style.borderColor="#ffffff";
    document.getElementById("studentska").style.borderColor="#ffffff";
    document.getElementById("izmerenie").style.borderColor="#ffffff";
    document.getElementById("mandala").style.borderColor="#ffffff";
    document.getElementById("zhulieta").style.borderColor="#ffffff";
}