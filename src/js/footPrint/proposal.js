window.onload = function(){
    $('.addPic').click(function(){
        $(this).next().click();
    })

    $('.anonymous').click(function(){
        if(!$(this).hasClass('active')){
            $(this).addClass('active')
        }else{
            $(this).removeClass('active')
        }
    })
}