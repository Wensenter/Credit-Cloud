
/**
 * 解决 IOS12.2以上手机软键盘收回 页面不回弹
 */
(function(){ 
    function checkVersion(){
        var resultArr = navigator.userAgent.match(/iPhone\sOS\s(\d+)/);
        if (resultArr && resultArr.length > 1) {
            var iosVersion = resultArr[1] * 1;
            if (iosVersion >= 12) {
                window.scrollTo(0, 0)
            }
        }
    }

    var inputElements = document.getElementsByTagName('input');
    var selectElements = document.getElementsByTagName('select');
    var i,
        len;
    for (i = 0, len = inputElements.length; i < len; i++) {
        inputElements[i].addEventListener('blur', checkVersion, false)
    }

    for (i = 0, len = selectElements.length; i < len; i++) {
        selectElements[i].addEventListener('blur', checkVersion, false)
    }
})()


