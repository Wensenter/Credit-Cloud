window.onload = function () {
    $('.children_tab').delegate('li', 'click', function () {
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
    })

    //评价提示
    $('.goEvaluate').click(function(){
        $('.bg').css({
            'display':'block'
        })
    })

    //关闭弹窗提示
    $('.bg button').click(function(){
        $('.bg').css({
            'display':'none'
        })
    })
};