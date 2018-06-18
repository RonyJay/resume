//设置loading动画延迟
setTimeout(function () {
    document.getElementById("site-welcome").classList.remove("active")
}, 500);



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




//滑动距离，对应标签高亮
let speacialTags = document.querySelectorAll('[data-x]')
let minIndex = 0
for (let i = 1; i < speacialTags.length; i++) {
    if (Math.abs(speacialTags[i].offsetTop - window.scrollY) < Math.abs(speacialTags[minIndex].offsetTop - window.scrollY)) {
        minIndex = i
    }
    let id = speacialTags[minIndex].id
    // siteAbout
    // siteSkills
    // siteWorks
    let a = document.querySelector("a[href='#" + id + "']")
    let li = a.parentNode
    let brothers = li.parentNode.children
    for (let i = 0; i < brothers.length; i++) {
        brothers[i].classList.remove('highlight')
    }
    if (window.scrollY !== 0) {
        li.classList.add('highlight')
    }

}

//top-nav-bar二级菜单
let liTags = document.querySelectorAll('nav.menu>ul>li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (e) {
        e.currentTarget.classList.add('active')

    }
    liTags[i].onmouseleave = function (e) {
        e.currentTarget.classList.remove('active')
    }
}

//点击nav标签跳到指定的位置
let aTags = document.querySelectorAll('nav.menu>ul>li>a')
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (e) {
        e.preventDefault()
        let a = e.currentTarget;
        let href = a.getAttribute('href')
        let element = document.querySelector(href)
        let top = element.offsetTop

        let currentTop = window.scrollY
        let targetTop = top - 80
        s = targetTop - currentTop
        //缓动效果      
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

        var coords = { y: currentTop }; //初始值
        var t = Math.abs((s / 100) * 500)
        if (t > 1000) {
            t = 500
        }
        var tween = new TWEEN.Tween(coords)
            .to({ y: targetTop }, t) //目标值-时间
            .easing(TWEEN.Easing.Quadratic.InOut) //缓动动画
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
            })//每次会调用这个函数
            .start();
    }
}
