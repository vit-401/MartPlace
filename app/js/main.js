$(function () {

  $('.suggest__slider-inner').slick({
    slidesToShow: 1,
    arrows: true,
  })

  $('.followers-slider__inner').slick({
    slidesToShow: 3,
    arrows: true,
  })

    $('.clients__inner').slick({
    slidesToShow: 2,
    prevArrow:'<button type="button" class="slick-clients-arrow clients-prev-arrow"><span class="lnr lnr-chevron-left"></span></button>',
    nextArrow:'<button type="button" class="slick-clients-arrow clients-next-arrow"><span class="lnr lnr-chevron-right"></span></button>',
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
  $(".newPlagins__rating").rateYo({
    rating: 4.5,
    readOnly: true,
    starWidth: "11px",
    
    
  });
  $(".page-content__rateYo").rateYo({
    rating: 3.2,
    readOnly: true,
    starWidth: "14px"
  });

  $('.btn-grid').on('click',function(){
    $(this).addClass('active')
    $('.btn-list').removeClass('active')
  })
  $('.btn-list').on('click',function(){
    $(this).addClass('active'),
    $('.btn-grid').removeClass('active')
  })

  $(".range-slider").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 320,
    from: 30,
    to: 300,
    prefix: "$",
});
  


  var mixer = mixitup('.newPlagins__inner');


});
