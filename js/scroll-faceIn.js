document.addEventListener("DOMContentLoaded",function(){


    var service = document.querySelector('.title')
    var location_service = service.offsetTop - 900;

    var box = document.querySelector('.box')
    var location_box = service.offsetTop - 600;
    console.log(location_box);

    var about = document.querySelector('.about__content')
    var location_about = service.offsetTop -200;


    window.addEventListener("scroll",function(){
        if(window.pageYOffset > location_service){
            service.classList.add('faceIn')
        }

        if(window.pageYOffset > location_box){
            box.classList.add('faceIn')
        }

        if(window.pageYOffset > location_about){
            about.classList.add('faceIn')
        }
    })
})