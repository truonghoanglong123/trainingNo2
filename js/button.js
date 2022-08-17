(function ($) {
    var foo = function() {
        $('.humburger').on('click', function(){
            $(this).parents("body").find(".menu").toggleClass('displaymenu');
            $(this).parents("body").find("body").toggleClass('over');
            $(this).parents("body").find(".humburger").toggleClass('transformIcon');
            if($(this).parents("body").hasClass("over")){
                $("body").css({'top': 0});
                $("body").removeClass("over");
                var top = $(this).attr('id');
                $(window).scrollTop(top);
                console.log("if");
            } else {
                var top = $(window).scrollTop();
                $("body").addClass("over");
                $("body").css({'top': "-"+top+"px"});
                $(this).attr('id', top);
                console.log("else");   
            }
        })
    }

    $(function () {
        foo();
    });

})(jQuery);
