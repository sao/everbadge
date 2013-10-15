$(document).ready(function() {

  $('.retina').retinise();

  var jPM = $.jPanelMenu({
    menu: '#mobile-menu',
    trigger: '.mobile-menu-trigger',
    openPosition: '80%'
  });

  var phones = $('#phones');
  function animatePhone() {
    phones.animate({top:'+=10'}, 1000);
    phones.animate({top:'-=10'}, 1000, animatePhone);
  }
  // $(animatePhone);

  $("#slides").slidesjs({
    width: 947,
    height: 701,
  });

  $("#offers").slidesjs({
    width: 900,
    height: 250,
    navigation: false
  });

  var jRes = jRespond([
    {
        label: 'small',
        enter: 0,
        exit: 1024
    },{
        label: 'large',
        enter: 1024,
        exit: 10000
    }]
  );

  jRes.addFunc({
    breakpoint: 'small',
    enter: function() {
      jPM.on();
      // phones.stop(true, false);
    },
    exit: function() {
      jPM.off();
      // animatePhone();
    }
  });

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
