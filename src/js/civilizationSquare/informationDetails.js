window.onload = function(){
    
    //input聚焦
    $('.publish_box .title').focus(inputFocus)

    //input失焦
    // $('.publish_box .title').blur(inputBlur)

    //发布按钮点击
    $('.publish_box .publish_button').click(inputBlur)

    function inputFocus(){
        $('.publish_box .opr').css({
            'display': 'none'
        });
        $('.publish_box .publish_button').css({
            'display': 'block'
        })
        $('.publish_box').css({
            'background': '#F7F7F7',
        })
        $(this).css({
            'background': '#ffffff',
            'width': '6.866667rem',
            'height': '.8rem',
            'borderRadius': '04rem'
        })
        $(this).attr('placeholder', '好观点将优先展示')
    }

    function inputBlur(){
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
        $(this).attr('placeholder', '欢迎发表你的观点')
    }

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

    //点击分享
    $('.detail .share,.opr .forward').click(function(){        
        $('.bg').css({
            'display':'block'
        })
    })
}