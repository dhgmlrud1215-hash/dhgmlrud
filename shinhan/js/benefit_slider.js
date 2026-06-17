$(function() {

    $(".category ul li").click(function(e) {
        e.preventDefault();

        const target = $(this).data("target");

        $(".category ul li").removeClass("active");
        $(this).addClass("active");

        $(".benefit-content").removeClass("active");
        $("#" + target).addClass("active");
    });
});