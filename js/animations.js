$(document).ready(function() {
  $('.ex').mouseenter(function() {
    $(this).attr('src', "./imgs/" + $(this).parent().attr('id').toString() + "-selected.png");
  }).mouseleave(function() {
    $(this).attr('src', "./imgs/" + $(this).parent().attr('id').toString() + ".png");
  })
  $('.ex').click(function() {
    var slide = '#' + $(this).parent().attr('id') + "-slide";
    $(slide).slideDown(250);
  })
});
