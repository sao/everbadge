$(document).ready(function() {
  var phones = $('#phones');
  function runIt() {
    phones.animate({top:'+=10'}, 1000);
    phones.animate({top:'-=10'}, 1000, runIt);
  }
  phones.fadeIn(2000);
  runIt();
})
