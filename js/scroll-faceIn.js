document.addEventListener("DOMContentLoaded",function(){


    var service = document.querySelector('.title')
    var location_service = service.offsetTop - 900;

    var box = document.querySelector('.box')
    var location_box = service.offsetTop - 600;

    var about = document.querySelector('.about__content')
    var location_about = service.offsetTop -200;

    var partners= document.querySelector('.text-partners')
    var location_partners = partners.offsetTop -800;

    var content_partners = document.querySelector('.content-partners')
    var location_content_partners = content_partners.offsetTop - 700

    var recruit = document.querySelector('.recruit-image__content')
    var location_recruit = recruit.offsetTop + 1700
    console.log(location_recruit);

    var text_contact = document.querySelector('.text-contact')
    var location_text_contact = text_contact.offsetTop -750

    var contact_content = document.querySelector('.contact-content')
    var location_contact_content = contact_content.offsetTop -650

    window.addEventListener("scroll",function(){
        console.log(window.pageYOffset);
        if(window.pageYOffset > location_service){
            service.classList.add('faceIn')
        }

        if(window.pageYOffset > location_box){
            box.classList.add('faceIn')
        }

        if(window.pageYOffset > location_about){
            about.classList.add('faceIn')
        }

        if(window.pageYOffset > location_partners){
            partners.classList.add('faceIn')
        }

        if(window.pageYOffset > location_content_partners){
            content_partners.classList.add('faceIn')
        }

        if(window.pageYOffset > location_recruit){
            recruit.classList.add('faceIn')
        }

        if(window.pageYOffset > location_text_contact){
            text_contact.classList.add('faceIn')
        }

        if(window.pageYOffset > location_contact_content){
            contact_content.classList.add('faceIn')
        }
    })
})