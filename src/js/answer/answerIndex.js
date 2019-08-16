//禁止页面滑动
window.addEventListener('touchmove', function (e) {
    e.preventDefault();
}, false)

window.onload = function(){
    //弹出规则
    $('.ruleButton').click(function(){
        $('.pop_1').css({
            'display':'block'
        })
    })

    //关闭规则
    $('.iSee').click(function(){
        $('.pop_1').css({
            'display': 'none'
        })
    })
}