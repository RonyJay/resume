//设置topnavbar sticky效果
!function () {
    var view = document.querySelector('#top-nav-bar')
    var controller = {
        view: null,
        init: function (view) {
            this.view = view
            this.bindEvents()
        },
        bindEvents: function () {
            window.addEventListener('scroll', function () {
                if (window.scrollY > 0) {
                    view.classList.add("sticky")
                } else {
                    view.classList.remove("sticky")
                }
            })
        }
    }
controller.init(view)
}.call()
