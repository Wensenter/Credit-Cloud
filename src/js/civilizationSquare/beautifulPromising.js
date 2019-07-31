window.onload = function () {
    $('.children_tab').delegate('li', 'click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })
};