$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: "<button type='button' class='slick-prev pull-left'><img src='images/arrow-pre.svg' alt=''></button>",
    nextArrow: "<button type='button' class='slick-next pull-right'><img src='images/arrow-back.svg' alt=''> </button>",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
            }
        },
    ]
});