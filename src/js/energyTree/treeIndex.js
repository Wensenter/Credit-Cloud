window.onload = function(){
    var type = null
    var count = null;
    var countStr = null;
    //兑换能量
    $('.exchange').click(function(){
        $('.pop_box').css('display','flex');
        type = 'exchange';
        count = 0;
        pop(type)
    })
    //浇水
    $('.watering').click(function(){
        $('.pop_box').css('display', 'flex');
        type = 'watering';
        count = 0;
        pop(type)
    })
    //增加
    $('.add').click(function(){
        if (type === 'exchange'){
            count ++;
            countStr = `${(count+1)}颗`
            $('.count').text(countStr);
        } else if (type === 'watering'){
            count+=10;
            countStr = `${(count + 10)}g`
            $('.count').text(countStr);
        }
    })
    //减少
    $('.reduce').click(function () {
        if (type === 'exchange') {
            count--;
            if(count <= 0){
                count = 0
            }
            countStr = `${(count + 1)}颗`
            $('.count').text(countStr);
        } else if (type === 'watering') {
            count -=10;
            if (count <= 0) {
                count = 0
            }
            countStr = `${(count + 10)}g`
            $('.count').text(countStr);
        }
    })
    //确认
    var $sure = document.getElementsByClassName('sure')[0];
    $sure.onclick = debounce(
        function () {
            if (type === 'exchange') {
                var num = $('.count').text().split('颗')[0] * 1;
                var curNum = 10; //这里用虚拟文明果数量
                if (num > curNum) {
                    $('.tip').attr('src', '../../images/energyTree/tip_2.png')
                        .css('display', 'block');
                    setTimeout(() => {
                        $('.tip').css('display', 'none');
                    }, 2 * 1000);
                } else {
                    $('.pop_box').css('display', 'none')
                }
            } else if (type === 'watering'){
                var num = $('.count').text().split('g')[0] * 1;
                var curNum = 10; //这里用虚拟甘露数量
                if (num > curNum) {
                    $('.tip').attr('src', '../../images/energyTree/tip_1.png')
                        .css('display', 'block');
                    setTimeout(() => {
                        $('.tip').css('display', 'none');
                    }, 2 * 1000);
                } else {
                    $('.pop_box').css('display', 'none')
                    $('.kettle').css({
                        'animation':'kettleMove 3s'
                    })
                }
            }
    },1000)
    //取消
    $('.cancle').click(function(){
        $('.pop_box').css('display','none');
    })
}
//弹窗
function pop(type){
    $('.kettle').css({
        'animation': 'none' //初始化动画
    }) 
    if (type === 'exchange'){
        $('.pop_box>h3').text('兑换数量')
        $('.tips').css('display','flex');
        $('.count').text('1颗');
    } else if (type === 'watering'){
        $('.pop_box>h3').text('浇水数量')
        $('.tips').css('display', 'none');
        $('.count').text('10g');
    }
}
//防抖
function debounce(fun,time){
    var timeout;
    return function(){
       var ctx = this,
           args = arguments;
        if(timeout) clearTimeout(timeout);
        var callNow = !timeout;
        timeout = setTimeout(() => {
            timeout = null;
        }, time);
        if(callNow) fun.apply(ctx,args);
    }
}