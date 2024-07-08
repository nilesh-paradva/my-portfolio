$('.center').slick({
    centerMode: true,
    dots: true,
    centerPadding: '60px',
    slidesToShow: 1,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1,
                dots: true,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                dots: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
});