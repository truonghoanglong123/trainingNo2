// imghideshow
function swapImages(){
    var $active = $('#myGallery .active');
    var $next = ($('#myGallery .active').next().length > 0) ? $('#myGallery .active').next() : $('#myGallery figure:first');
    $active.fadeOut(function(){
        $active.removeClass('active');
    });
    $next.fadeIn().addClass('active');
}
setInterval('swapImages()', 3500);

