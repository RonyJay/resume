!function () {
    var view = document.querySelector('#myslides')
    var controller = function (view) {
        var mySwiper = new Swiper('.swiper-container', {

            loop: true,

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            // 自动播放
            autoplay: {
                delay: 3000,
                stopOnLastSlide: false,
                disableOnInteraction: true,
            }

        })
    }
        controller(view)
}.call()

