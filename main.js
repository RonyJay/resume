//设置loading动画延迟
setTimeout(function () {
    document.getElementById("site-welcome").classList.remove("active")
}, 500);

//设置topnavbar sticky效果
window.onscroll = function () {
    if (window.scrollY > 0) {
        document.getElementById('top-nav-bar').classList.add("sticky")
    } else {
        document.getElementById('top-nav-bar').classList.remove("sticky")
    }
}
//top-nav-bar二级菜单
let liTags = document.getElementsByClassName("menuTigger")
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(e){ 
        let li=e.currentTarget
        let ul=li.getElementsByTagName('ul')[0]
        ul.classList.add("active")
    }
    liTags[i].onmouseleave=function(e){ 
        let li=e.currentTarget
        let ul=li.getElementsByTagName('ul')[0]
        ul.classList.remove("active")
    }
}
