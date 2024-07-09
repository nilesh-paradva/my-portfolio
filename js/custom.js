$(window).on('load',function(){
    $('.loader-wrepper').fadeOut('fast')
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $(".top-btn").fadeIn();
    }
    else {
        $(".top-btn").fadeOut();
    }
});