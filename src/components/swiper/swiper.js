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

// =======================================================

// loparPictures
const loparPictures = new Swiper("#lopar-pictures .swiper", {
    slidesPerView: 1,
    // slidesPerGroup:4,
    spaceBetween: 30,
    // loop: true,
    onclick: function(swiper){
        console.log('test')

    },
    navigation: {
        nextEl: "#lopar-pictures .next",
        prevEl: "#lopar-pictures .prev",
    },
});

loparPictures.on("slideChange", function (e) {
    const activeIndex = loparPictures.activeIndex
    
    loparPicturesThumbnails.slideTo(activeIndex);
    
    const thumbnailCarousel = document.querySelector('#lopar-pictures-thumbnails')
    const thumbnails = thumbnailCarousel.querySelectorAll(".swiper-image");
    const activeThumbnail = thumbnailCarousel.querySelector(".swiper-image.active");
    
    if (activeThumbnail) activeThumbnail.classList.remove("active");
    thumbnails[activeIndex].classList.add("active");
});

loparPictures.on("click", function (e) {
    const activeIndex = loparPictures.activeIndex
    loparPicturesLightbox.slideTo(activeIndex)
});


// =======================================================

// loparPicturesSmall
const loparPicturesThumbnails = new Swiper("#lopar-pictures-thumbnails .swiper", {
    slidesPerView: "auto",
    // slidesPerGroup:4,
    spaceBetween: 14,
    // slideToClickedSlide: true,
   
    // loop: true,
    navigation: {
        nextEl: "#lopar-pictures-thumbnails .next",
        prevEl: "#lopar-pictures-thumbnails .prev",
    },
});

loparPicturesThumbnails.on("click", function (e) {
    const activeIndex = e.clickedIndex
    loparPictures.slideTo(activeIndex)
});



// =======================================================

// loparPicturesLightbox

const loparPicturesLightbox = new Swiper("#lopar-pictures-lightbox .swiper", {
    slidesPerView: "auto",
    // slidesPerGroup:4,
    spaceBetween: 14,
    // slideToClickedSlide: true,
   
    // loop: true,
    navigation: {
        nextEl: "#lopar-pictures-lightbox .next",
        prevEl: "#lopar-pictures-lightbox .prev",
    },
});