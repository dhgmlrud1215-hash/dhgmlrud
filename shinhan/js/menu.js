$(function() {
    $(".navi > li > button").on("mouseover focus", function() {
        const target = $(this).data("target");

        $(".navi > li > button").attr("aria-expanded","false");

        $(this).attr("aria-expanded","true");

        $(".menu-content").hide();
        $("#" + target).show();
        $(".content-wrap").show();
    });

    $(".content-wrap").on("mouseleave", function(){
        $(".content-wrap").hide();
        $(".menu-content").hide();

         $(".navi > li > button").attr("aria-expanded","false");
    });
});