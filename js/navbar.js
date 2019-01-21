$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > window.innerHeight * .70) {
            $(".probootstrap-header").css("background" , "black");
        }

        else{
            $(".probootstrap-header").css("background" , "transparent");
        }
    });
});