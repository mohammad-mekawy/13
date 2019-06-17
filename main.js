$(document).ready(function() {
    $(".circle").click(function() {
        window.location = $(this).children().attr("href");
    })

    $(".list-choose>li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        $(".right-part>div").hide()
        $("." + $(this).data("class")).fadeIn(1000)
    });
});