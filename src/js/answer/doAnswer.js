window.onload = function(){
    //开启弹窗
    $('.next').click(function(){
        $('.pop_2').css({
            'display':'block'
        })
    })

    //关闭弹窗
    $('.iSee').click(function(){
        $('.pop_2').css({
            'display': 'none'
        })
    })
}