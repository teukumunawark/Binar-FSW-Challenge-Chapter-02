$('.owl-carousel').owlCarousel({
    loop: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
        },
        768: {
            items: 2,
        },
        1100: {
            items: 2,
        },
        1400: {
            items: 2,
        }
    },
    nav: true,
    dots: false,
    navText: [
    '<i class= "fa-solid fa-circle-chevron-left"></ >', 
    '<i class="fa-solid fa-circle-chevron-right"></i>'
    ],
});


