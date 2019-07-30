window.onload = function () {
    var picSwiper = new Swiper('#picSwiper', {
        autoplay: false,
        loop: true
    });
    $('.children_tab').delegate('li','click',function(){
        console.log($(this).siblings())
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })
};