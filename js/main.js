$(document).ready(function () {

  //Pour un defilement des liens plus souple
  $('a[href^="#"]').click(function(event){
    event.preventDefault();

    var valHref = $(this).attr("href");

    $('html, body')
    .stop()
    .animate({scrollTop: $(valHref).offset().top},1000);
    $('body').removeClass('menu-open');
    $('.menu').removeClass('active');
  });
  //Nav translate    
  var estActif = false;

  $('.menu').on('click', function () {
    if (estActif) {
      $(this).removeClass('active');
      $('body').removeClass('menu-open');
    } else {
      $(this).addClass('active');
      $('body').addClass('menu-open');
    }
    estActif = !estActif;
  });

  //Menu: scrolling effect and toTop button
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 300) {
      $('nav').addClass('white');
      $('#topBtn').css("display", "block");
      $(".logo").css("opacity", "1");

    } else {
      $('nav').removeClass('white');
      $('#topBtn').css("display", "none");
      $(".logo").css("opacity", "0");
    }
  });

  //Apparition scroll to top button
  $("window").scroll(function () {
    if ($(window).scrollTop() > 300) {
      $("#topBtn").fadeIn();
    } else {
      $("#topBtn").fadeOut();
    }
  });

  //Animation scroll to top
  $("#topBtn").click(function () {
    $("html ,body").animate({
      scrollTop: 0
    }, 1500);
  });


  $(window).on("scroll", function () {
    var y = $(this).scrollTop();
    this.console.log(y);
    if (y > 2200 && y < 3000) {
      $('.skills__bar').each(function () {
        $(this).find('.bar').animate({
          width: $(this).attr('data-percent')
        }, 4000);
      });
    }
  });

});