window.onload = function () {
    $('.addPic').click(function () {
        $(this).next().click();
    })

    $('.l_stars i,.s_stars i').click(function(){
        showStar(this)
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
}