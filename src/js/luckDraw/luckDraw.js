
//禁止页面滑动
window.addEventListener('touchmove',function(e){
    e.preventDefault();
},false)

window.onload = function(){
    //开始抽奖
    var count = true;
    $('.luckDraw_icon').click(function(){
        console.log('开始抽奖')
        if (!count){
            alert('已经抽过奖了')
            return false
        }else{
            var rand = Math.random().toFixed(2)*360;
            $('.turntable_in').css({
                'transform':'translateX(-50%) rotate('+(360*2+rand)+'deg)',
                'transition':'all 3s'
            })
            setTimeout(() => {
                pop(rand);
            }, 3*1000);
            count = false;
        }
    })

    //关闭结果
    $('.close').click(function(){
        $('.pop_wrapper').css({
            'display':'none'
        })
    })
}

function pop(rand) {
    // console.log('中奖了角度为'+ rand +'区域的奖品')
    console.log(rand)
    if (0 < rand && rand <= 22.5 || 337.5 < rand && rand <= 360 || 157.5 < rand && rand <= 202.5){
        console.log('5积分')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_1.png'
        })
    } else if (247.5 < rand && rand <= 292.5){
        console.log('10积分')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_2.png'
        });
    } else if (67.5 < rand && rand <= 112.5){
        console.log('20积分')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_4.png'
        })
    } else if (22.5 < rand && rand <= 67.5){
        console.log('物品')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_4.png'
        })
    } else if (112.5 < rand && rand <= 157.5){
        console.log('笔记本')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_4.png'
        })
    }else if(202.5<rand && rand <= 247.5){
        console.log('会员')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_4.png'
        })      
    } else if (292.5 < rand && rand <= 337.5) {
        console.log('手机')
        $('.prize').attr({
            'src': '../../images/luckDraw/prize_4.png'
        })
    }
    $('.pop_wrapper').css({
        'display': 'block'
    })
}
