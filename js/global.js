$(document).ready(function() {
  var phones = $('#phones');
  function runIt() {
    phones.animate({top:'+=10'}, 1000);
    phones.animate({top:'-=10'}, 1000, runIt);
  }
  phones.fadeIn(2000);
  runIt();

  $('.team-members li').hover(
    function() {
      $(this).addClass('on');
    }, function() {
      $(this).removeClass('on');
    }
  );

  /** custom slider navs **/
  $('.slider-nav a#prev').click(function(e) {
    e.preventDefault();
    $('.slidesjs-previous').trigger('click');
  });

  $('.slider-nav a#next').click(function(e) {
    e.preventDefault();
    $('.slidesjs-next').trigger('click');
  });
})
