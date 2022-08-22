//pagebacktop
var rootElement = document.documentElement
var backtop = document.querySelector('.backtop')

function handleScroll(){
    if(window.pageYOffset > 500){
        backtop.classList.remove('btnshow');
    }
    else{
        backtop.classList.add('btnshow');
    }
}

function scrollToTop(){
    handleScroll()
    rootElement.scrollTo({
        top:0,
        behavior: "smooth"
    })
}

backtop.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)



//fixmenu
var menu = document.querySelector('.section-menu')
var section = document.querySelector('.section-service')
function handleScrollMenu(){
    // console.log(window.pageYOffset);
    if(window.pageYOffset > 950){
        menu.classList.add('fixmenu')
        section.classList.add('gat')
    }
    else{
        menu.classList.remove('fixmenu')
        section.classList.remove('gat')
    }
}

document.addEventListener("scroll", handleScrollMenu)
