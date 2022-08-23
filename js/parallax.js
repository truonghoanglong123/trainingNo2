const parallax = document.getElementById('parallax')

window.addEventListener("scroll",function(){
    let offset = window.pageYOffset;
    var mq = window.matchMedia( "(min-width: 640px)" );
    console.log(offset);
    console.log("----------------",offset*0.7);
    if (mq.matches) {
        parallax.style.backgroundPositionY = offset * -0.7 + "px"
    }
    else {
        parallax.style.backgroundPositionY = offset * 0.1 + "px"
    }
})