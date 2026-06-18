$(function(){
    let isDown = false;
    let startX = 0;
    let scrollLeft = 0;
    let currentX = 0;
    let animationId = null;

    const $slider = $('.card-wrap');
    const speed = 1;
    const smooth = 0.18;

    function animateScroll() {
        if (!isDown) {
            cancelAnimationFrame(animationId);
            animationId = null;
            return;
        }

        const walk = (currentX - startX) * speed;
        const target = scrollLeft - walk;
        const current = $slider.scrollLeft();

        $slider.scrollLeft(current + (target - current) * smooth);

        animationId = requestAnimationFrame(animateScroll);
    }

    $slider.on('mousedown', function(e) {
        isDown = true;
        $(this).addClass('active');

        startX = e.pageX;
        currentX = e.pageX;
        scrollLeft = $(this).scrollLeft();

        if (!animationId) {
            animationId = requestAnimationFrame(animateScroll);
        }
    });

    $(document).on('mouseup', function() {
        isDown = false;
        $slider.removeClass('active');
    });

    $slider.on('mouseleave', function() {
        isDown = false;
        $slider.removeClass('active');
    });

    $slider.on('mousemove', function(e) {
        if (!isDown) return;
        e.preventDefault();
        currentX = e.pageX;
    });
});