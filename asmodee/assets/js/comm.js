// swiper
var swiper = new Swiper(".main-slide", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".upcoming-slide", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".news-slide", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// 왜,, 안 되는데^-^...?
// scroll에 따른 header의 색상 변화
$(window).on('scroll', function() {
  if($(window).scrollTop()){
    $('#header').addClass('active');
  }else{
    $('#header').removeClass('active');
  }
});
