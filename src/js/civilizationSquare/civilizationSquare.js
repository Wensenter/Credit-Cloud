window.onload = function () {
    var picSwiper = new Swiper('#picSwiper', {
        autoplay: false,
        loop: true
    });
    var doc = document,
        $children_tab = doc.getElementsByClassName('children_tab')[0],
        $tab_item = $children_tab.getElementsByTagName('li');
    console.log($tab_item);
    $children_tab.addEventListener('click', function (e) {
        var i, len;

        for (i = 0, len = e.target.parentNode.children.length; i < len; i++) {
            if (e.target.parentNode.children.item(i).classList.value.indexOf('active') !== -1) {
                console.log(1);
                e.target.parentNode.children.item(i).classList.remove('active');
            }
        }

        e.target.classList.add('active');
    }, false);
};