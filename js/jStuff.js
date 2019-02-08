//Codigo para hacer scroll animado, adaptado de http://stackoverflow.com/questions/19012495/smooth-scroll-to-div-id-jquery
// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]:not([href="#myCarousel"])', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $id.offset().top;
    if ($("nav.in").length > 0) $("button#collapse-toggler").click();
    console.log(pos);

    // animated top scrolling
    $('body, html').animate({ scrollTop: pos });
});
//Codigo para una transicion suave entre index y pagina y vice versa
(function() {

    //inicia con todo fadeado
    $('body').children().fadeOut(0);
    //hace fade in
    setTimeout(function() {
        $('body').removeClass("pre");
        $('body').children().fadeIn(500);
    }, 500);

    //En index, al espichar este boton, se fadea y va a la pagina
    $('button.home-btn').click(function() {
        $('body').children().fadeOut(500);
        var s = 'eng.html';
        if ($(this)[0] == $('button.home-btn.es')[0]) {
            s = "es.html";
        }
        setTimeout(function() { location.href = s; }, 500);

    });

    //Boton para volver suavemente. No funciona en celular, no se porque...
    $('div.title').on("click", function() {
        $('body').children().fadeOut(500);
        setTimeout(function() { location.href = "index.html"; }, 500);
    });


})();


//Codigo para animar la barra de navegacion, adaptado de https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.89dmd8wue
(function() {
    var didScroll;
    var lastScrollTop = 0;
    var delta = 30;
    var navbarHeight = $("div.nav-down").outerHeight();

    // on scroll, let the interval function know the user has scrolled
    $(window).scroll(function(event) {
        didScroll = true;
    });
    // run hasScrolled() and reset didScroll status
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        // do stuff here...
        var st = $(this).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta) {
            return;
        }

        // If current position > last position AND scrolled past navbar...
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $("div.nav-down").removeClass("nav-down").addClass("nav-up");
        } else {
            // Scroll Up
            // If did not scroll past the document (possible on mac)...
            if (st + $(window).height() < $(document).height()) {
                $("div.nav-up").removeClass("nav-up").addClass("nav-down");
            }
        }
        lastScrollTop = st;
    }
})();


$('.carousel').carousel('pause').on('slide.bs.carousel', function (e) {
    var nextH = $(e.relatedTarget).height();
    console.log(nextH)
    console.log( $(this).find('.active.item').parent() )
    $(this).find('.active.item').parent().animate({
        height: nextH
    });
});