const celebrateBtn = document.getElementById('celebrateBtn');

celebrateBtn.addEventListener('click', () => {
    // trigger confetti
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    // button animation
    celebrateBtn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        celebrateBtn.style.transform = 'scale(1)';
    }, 100);
});

$(window).on('load', function () {
    $('.loader-wrepper').delay('1200').fadeOut('fast')
});


$(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $(".top-btn").fadeIn();
    }
    else {
        $(".top-btn").fadeOut();
    }
});