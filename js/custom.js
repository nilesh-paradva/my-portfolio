$(window).on('load',function(){
    $('.loader-wrepper').delay('1000').fadeOut('fast')
});

$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $(".top-btn").fadeIn();
    }
    else {
        $(".top-btn").fadeOut();
    }
});