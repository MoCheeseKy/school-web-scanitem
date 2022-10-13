$(window).on('load', function () {
    $('.gpu').addClass('start');
    $('.core').addClass('start');
    $('.batery').addClass('start');
    $('.memory').addClass('start');
    $('.hero').addClass('start');
    $('.left').addClass('start');
    $('.desc .right').addClass('start');
});

$(window).scroll(function () {
    var ifscroll = $(this).scrollTop();

    // if (ifscroll > $('.tittle').offset().bottom) {
    //     $('.profile').addClass('start');
    // }

    if (ifscroll > $('.desc').offset().top - 500) {
        console.log('ok');
        $('.left').addClass('go');
    }
    if (ifscroll > $('.left').offset().top) {
        console.log('ok');
        $('.right').addClass('go');
    }

    if (ifscroll > $('.tittle').offset().top - 500) {
        console.log('ok');
        $('.profile').addClass('start');
    }
});

var typed = new Typed(".changeText", {
    strings: ["museum", "bandung"],
    typeSpeed: 200,
    backSpeed: 50,
    loop: true
})



