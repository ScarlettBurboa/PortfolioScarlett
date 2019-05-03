$(window).scroll(function() {
  $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
});
$(document).ready(function() {
  $('.cerrarMenu').click(function() {
    $('.navbar-toggler').click();
  });
});
$(function() {
  $('li').removeClass('active');
  $('#CargaMasiva').addClass('active');
});
