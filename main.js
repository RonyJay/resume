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
let liTags = document.querySelectorAll('nav.menu>ul>li')
for(let i=0;i<liTags.length;i++){
    liTags[i].onmouseenter=function(e){ 
        e.currentTarget.classList.add('active')
        
    }
    liTags[i].onmouseleave=function(e){ 
        e.currentTarget.classList.remove('active')
    }
}

//点击nav标签跳到指定的位置
let aTags=document.querySelectorAll('nav.menu>ul>li>a')
for(let i=0;i<aTags.length;i++){
	aTags[i].onclick=function(e){
		e.preventDefault()
		let a=e.currentTarget;
		let href=a.getAttribute('href')
		let element=document.querySelector(href)
		let top=element.offsetTop
		window.scrollTo(0,top-80)
	}
}
