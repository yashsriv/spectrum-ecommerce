$(function() {
  $(".button-collapse").sideNav({
    menuWidth: 300
  });
  //$('.carousel').carousel();
  $('.carousel.carousel-slider').carousel({
    full_width: true,
    time_constant: 700,
    indicators: false
  });
  $('.carousel.carousel-slider').css('height', '700px');
  setInterval(function() {
    $('.carousel').carousel('next');
  }, 4500);
  $('.match-height').matchHeight();
  $('.match-height1').matchHeight();

  var thumbnailSliderOptions = {
    sliderId: "thumbnail-slider",
    orientation: "horizontal",
    thumbWidth: "140px", // or "xx%", or "auto"
    thumbHeight: "140px", // or "xx%", or "auto"
    showMode: 1,
    autoAdvance: true,
    selectable: true,
    slideInterval: 3000, // in seconds
    transitionSpeed: 300, // in seconds
    shuffle: false,
    startSlideIndex: 0, // 0-based
    pauseOnHover: true,
    initSliderByCallingInitFunc: false,
    rightGap: 0, // or 90, or "auto"
    keyboardNav: true,
    mousewheelNav: false,
    before: null,
    license: "yourlicensekey"
  };

  var mcThumbnailSlider = new ThumbnailSlider(thumbnailSliderOptions);

})
