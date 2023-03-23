// const swiper = new Swiper(".swiper", {
    // Optional parameters
    //   direction: 'vertical',
    //   loop: true,
    //   // If we need pagination
    //   pagination: {
    //     el: '.swiper-pagination',
    //   },
    //   // Navigation arrows
    //   navigation: {
    //     nextEl: '.swiper-button-next',
    //     prevEl: '.swiper-button-prev',
    //   },
    //   // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
// });

const loparPictures = new Swiper("#lopar-pictures .swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    spaceBetween:30,
    loop: true,
    navigation: {
        nextEl: "#lopar-pictures .next",
        prevEl: "#lopar-pictures .prev",
    },
    breakpoints: {
        // when window width is >= 320px
        // 640: {
        //     //   width: 640,
        //     slidesPerView: 2,
        // },
        // // when window width is >= 768px
        // 768: {
        //     //   width: 768,
        //     slidesPerView: 3,
        // },
        // 992: {
        //     slidesPerView: 4,
        // },
      }
});
const loparPicturesSmall = new Swiper("#lopar-pictures-small .swiper", {
    slidesPerView: 'auto',
    // slidesPerGroup:4,
    spaceBetween:16,
    loop: true,
    navigation: {
        nextEl: "#lopar-pictures-small .next",
        prevEl: "#lopar-pictures-small .prev",
    },
    breakpoints: {
        // when window width is >= 320px
        // 640: {
        //     //   width: 640,
        //     slidesPerView: 2,
        // },
        // // when window width is >= 768px
        // 768: {
        //     //   width: 768,
        //     slidesPerView: 3,
        // },
        // 992: {
        //     slidesPerView: 4,
        // },
      }
});
