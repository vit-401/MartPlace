$(function(){

$('.newProduct-link').on('click', function () {
  $(this).toggleClass('active_btn');
  $(this).siblings().removeClass('active_btn');
});



});