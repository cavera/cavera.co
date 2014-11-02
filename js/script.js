$(function() {

    var caja = $('.letra');
    var links = $('.link');

    var palabra = $('.palabra');
    var mapa = $('#map');

    caja.hover(function() {
        palabra.fadeOut('400');
        mapa.css('opacity', '1');
    }, function() {
       palabra.fadeIn('400');
         mapa.css('opacity', '0.5');
    });

    TweenMax.staggerFrom(caja, 1, {
        top: "-300px",
        rotation: "90",
        ease: Elastic.easeOut/*,
        onComplete:mostrarLinks*/
    }, 0.2);

    function mostrarLinks () {
        TweenMax.staggerFrom(links, 1, {
        top: "800px",
        rotation: "90",
        ease: Cubic.easeOut,
        onComplete:mostrarLinks
    }, 0.2);
    }
});
