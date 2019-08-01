window.onload = function(){
    //评论栏切换
    $('.publish_box .title').focus(function(){
        $('.publish_box .opr').css({
            'display':'none'
        });
        $('.publish_box .publish_button').css({
            'display':'block'
        })
        $('.publish_box').css({
            'background':'#F7F7F7',
        })
        $(this).css({
            'background':'#ffffff',
            'width':'6.866667rem',
            'height':'.8rem',
            'borderRadius':'04rem'
        })
    })
    $('.publish_box .title').blur(function(){
        $('.publish_box .opr').css({
            'display': 'flex'
        });
        $('.publish_box .publish_button').css({
            'display': 'none'
        })
        $('.publish_box').css({
            'background': '#ffffff',
        })
        $(this).css({
            'background': 'transparent',
            'width': 'auto',
            'height': 'auto',
            'borderRadius': '0'
        }) 
    })

    //收藏
    $('.opr .star').click(function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active')
        }else{
            $(this).addClass('active')
        }
    })

    //播放视频
    $('.video_box .paly_icon').click(function(){
        var $V = document.getElementsByTagName('video')[0];
        $V.play();
        $('.video_box video').attr('controls',true);
        $(this).fadeOut();
    })
}