window.onload = function () {
    $('.children_tab').delegate('li', 'click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        if($(this).hasClass('my')){
            $('.myRanking').addClass('showFlex')
            $('.generalRanking').removeClass('show')
        }else{
            $('.myRanking').removeClass('showFlex')
            $('.generalRanking').addClass('show')
        }
    })
};