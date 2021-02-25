$(function() {

    /* Fixed header */

    let header = $("#header");
    let intro =$("#intro");
    let introH = intro.innerHeight();; 
    // height() - без учёта пэддингов, innerHeigth() - с учётом
    let ScrollPosition = $(window).scrollTop();

    checkScroll(ScrollPosition, introH);

    $(window).on("scroll resize", function() {
        introH = intro.innerHeight(); 
        ScrollPosition = $(this).scrollTop();

        checkScroll(ScrollPosition, introH);
    });
    

    function checkScroll (ScrollPosition, introH) {
        if( ScrollPosition > introH ) {
            header.addClass("fixed");
        }
        else {
            header.removeClass("fixed");
        }
    }


    /* Smooth scroll */

    $("[data-scroll]").on("click", function(event) {
        event.preventDefault(); // отменяет стандартное поведение элемента (ссылки)
        let BlockId = $(this).data('scroll');
        let BlockOffset = $(BlockId).offset().top; // получаем отступ от начала страницы

        nav.removeClass("show");

        $('html, body').animate({
            scrollTop: BlockOffset - 80


        }, 700);

    });


    /* Nav Toggle */

    let nav = $("#nav");
    let navToggle = $("#navToggle");

    navToggle.on("click" , function(event) {

        event.preventDefault();
        
        nav.toggleClass("show");


    });


    /* Reviews: https://kenwheeler.github.io/slick/ */

    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
      });
    





});