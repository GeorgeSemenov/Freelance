$(".mobile-sandwich-close-button").click(function(){
    $(this).toggleClass("opened hidden");
    $(this).siblings("ul").toggleClass("opened hidden");
});