$(function(){
   let isDown = false;
   let startX;
   let scrollLeft;
   let currentX = 0;
   let animationId = null;

   const $slider = $('.card-wrap');
   const speed = 1;
   const smooth = 0.15;

   function animateScroll() {
    if(!isDown) return;

    const walk = (currentX - startX) * speed;
    const target = scrollLeft - walk;
    const current = $slider.scrollLeft();

    $slider.scrollLeft(current + (target - current) * smooth);

    animationId = requestAnimationFrame(animateScroll);
   }

   $('.card-wrap').on('mousedown',function(e) {
    isDown = true;
    $(this).addClass('active');

    startX = e.pageX;
    scrollLeft = $(this).scrollLeft();
   });

   $(document).on('mouseup',function() {
    isDown = false;
    $slider.removeClass('active');
   });

   $slider.on('mouseleave',function() {
    isDown = false;
   });

   $slider.on('mousemove',function(e) {
    if(!isDown) return;

    e.preventDefault();

    const x = e.pageX;
    const walk = (x-startX)*1.5;

    $(this).scrollLeft(scrollLeft - walk);
   });
});