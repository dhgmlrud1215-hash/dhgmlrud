$(function() {
    let index = 0;
    const list = $(".event-list");
    const total = list.length;

    function Show(i) {
        list.removeClass("active");
        list.eq(i).addClass("active");

        $(".page").text((i+1) + " / " + total);
    };

    $(".prev").on("click",function(e) {
        e.preventDefault();

        index--;

        if(index < 0) {
            index = list.length-1;
        }
        Show(index);
    });

    $(".next").on("click",function(e) {
        e.preventDefault();

        index++;

        if(index >= list.length) {
            index =0;
        }
        Show(index);
    });

    Show(index);
});