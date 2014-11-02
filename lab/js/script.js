$(function() {
    var infotext = $('#valor');


    Draggable.create(".arrastrable", {
        type: "top,left",
        edgeResistance: 1,
        bounds: $('.wraper'),
        // trigger:($(this).find('p')),
        onDragEnd: soltar,
        onDrag: verDatos

    });

    function verDatos() {
        var posicion = "pos : " + this.x + " : " + this.y;
        infotext.html(posicion);
    }

    function soltar() {
        infotext.html('soltar');
        for (var i = 0; i < $('.caja').length; i++) {
            if ($('.arrastrable').hittest($('.caja')[i]) == true) {
                var dropped = $('.caja')[i];
                infotext.html(i);
                $('.arrastrable').addClass('recibido');
                return false;
            }
            else{
                $('.arrastrable').removeClass('recibido');
            }
        }
    }



    var slider = $('#slider');
    var sprite = $('.sprite');
    var caja = $('.caja');

    var intX = 240;
    var intY = 314;
    var fila = 0;


    slider.change(function() {
        var valor = slider.prop('value');
        var razon = valor % 5;

        fila = Math.floor(valor / 5);

        var valorX = -(razon * intX);
        var valorY = -(fila * intY);

        sprite.css('background-position', valorX + 'px ' + valorY + 'px');

        var posicion = valor + " : " + sprite.css('backgroundPosition');

        infotext.html(valor);
    })
        .change();

    TweenMax.staggerFrom(caja, 2, {
        top: "800px",
        rotation: "90",
        ease: Cubic.easeOut
    }, 0.2);

});
