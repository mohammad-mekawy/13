$(document).ready(function() {
    $(".circle").click(function() {
        window.location = $(this).children().attr("href");
    })

});