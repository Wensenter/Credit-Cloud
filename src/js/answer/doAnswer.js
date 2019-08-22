window.onload = function(){
   
   
    //错误
    $('.congratulations').attr('src','../../images/answer/unfortunately.png');
    $('.light').attr('src','../../images/answer/light_2.png');
    
    
    //正确
    //$('.congratulations').attr('src', '../../images/answer/congratulations.png');
    //$('.light').attr('src', '../../images/answer/light.png');
    
    
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