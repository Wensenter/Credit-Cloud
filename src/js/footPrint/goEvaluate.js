window.onload = function () {
    $('.addPic').click(function () {
        $(this).next().click();
    })

    $('.l_stars i,.s_stars i').click(function(){
        let count = showStar(this)
        let textDom = $(this).parent().siblings('.evaluate_text')
        let text = ''
        switch(count) {
            case 1:
                text = '不行'
                break
            case 2:
                text = '一般'
                break
            case 3:
                text = '挺不错'
                break
            case 4:
                text = '超级棒'
                break
            case 5:
                text = '无敌棒'
                break
            case 0:
                text = '不行'
                break
        }
        textDom.text(text)
    })
}

//显示星星
function showStar(obj, count=5){
    var curStar = $(obj).index()+1;
    var i,
        len,
        starCount = curStar,
        unstarCount = count - curStar;

 //$(obj).siblings();
    for (i = 0, len = starCount;i<len;i++){
        $(obj).siblings().eq(i).attr('class','star')
    }
    if (unstarCount){
        for (i = 0, len = unstarCount; i < len; i++){
            $(obj).siblings().eq(i+starCount-1).attr('class', 'unstar')
        }
    }

    $(obj).attr('class', 'star')
    return starCount
}