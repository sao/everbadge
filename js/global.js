$(document).ready(function() {

  jQuery.fn.center = function () {
      this.css("position","absolute");
      this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
                                                  $(window).scrollTop()) + "px");
      this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
                                                  $(window).scrollLeft()) + "px");
      return this;
  }

  // $('.authbox').center();
  // $(window).resize(function() {
  //   $('.authbox').center();
  // })

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
  $(animatePhone);

  $("#slides").slidesjs({
    width: 947,
    height: 701,
  });

  $("#offers").slidesjs({
    width: 900,
    height: 250,
    navigation: false
  });

  $(".team-members-mobile").slidesjs({
    width: 640,
    height: 800,
    pagination: false,
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
      phones.stop(true, false);
    },
    exit: function() {
      jPM.off();
      animatePhone();
    }
  });

  /** custom slider navs **/
  $('.slider-nav a.prev').click(function(e) {
    e.preventDefault();
    $('#slider .slidesjs-previous').trigger('click');
  });

  $('.slider-nav a.next').click(function(e) {
    e.preventDefault();
    $('#slider .slidesjs-next').trigger('click');
  });

  $('.team-members-nav a.prev').click(function(e) {
    e.preventDefault();
    $('.team-members-mobile .slidesjs-previous').trigger('click');
  });

  $('.team-members-nav a.next').click(function(e) {
    e.preventDefault();
    $('.team-members-mobile .slidesjs-next').trigger('click');
  });
})
