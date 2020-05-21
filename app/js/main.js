$(function () {

  $('.suggest__slider-inner').slick({
    slidesToShow: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev">Previous</button>',
    nextArrow: '<button type="button" class="slick-next">Next</button>',
  })

  $('.newProduct-link').on('click', function () {
    $(this).toggleClass('active_btn');
    $(this).siblings().removeClass('active_btn');
  });

  $(".rating-slide").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "17px",
    
    
  });

  var mixer = mixitup('.container');


});
